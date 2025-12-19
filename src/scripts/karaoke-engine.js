// Karaoke Engine - Interactive Lyrics with Audio Synchronization
class KaraokeEngine {
  constructor(audioElement, lyricsContainer, progressBar, controls) {
    this.audio = audioElement;
    this.lyricsContainer = lyricsContainer;
    this.progressBar = progressBar;
    this.controls = controls;
    this.currentSong = null;
    this.currentLyricIndex = -1;
    this.lyrics = [];
    this.isPlaying = false;
    this.animationFrame = null;
    this.audioContext = null;
    this.demoOscillator = null;

    this.init();
  }

  init() {
    // Create audio context for demo sounds
    try {
      this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
    } catch (e) {
      console.warn('Web Audio API not supported');
    }

    // Audio event listeners
    this.audio.addEventListener('loadedmetadata', () => {
      this.progressBar.max = this.audio.duration;
      this.updateDuration();
    });

    this.audio.addEventListener('timeupdate', () => {
      this.updateProgress();
      this.updateLyrics();
    });

    this.audio.addEventListener('ended', () => {
      this.pause();
      this.resetLyrics();
      this.stopDemoSound();
    });

    this.audio.addEventListener('error', () => {
      console.log('Audio file not available, using demo sound');
      this.startDemoSound();
    });

    // Progress bar interaction
    this.progressBar.addEventListener('input', (e) => {
      this.audio.currentTime = e.target.value;
      this.updateLyrics();
    });

    // Control buttons
    this.controls.playPause.addEventListener('click', () => this.togglePlayPause());
    this.controls.volume.addEventListener('input', (e) => {
      this.audio.volume = e.target.value / 100;
      if (this.demoOscillator) {
        this.demoOscillator.volume = e.target.value / 100;
      }
    });

    // Keyboard controls
    document.addEventListener('keydown', (e) => {
      switch(e.code) {
        case 'Space':
          e.preventDefault();
          this.togglePlayPause();
          break;
        case 'ArrowLeft':
          e.preventDefault();
          this.audio.currentTime = Math.max(0, this.audio.currentTime - 5);
          break;
        case 'ArrowRight':
          e.preventDefault();
          this.audio.currentTime = Math.min(this.audio.duration || this.currentSong?.duration || 60, this.audio.currentTime + 5);
          break;
      }
    });
  }

  loadSong(songData) {
    this.currentSong = songData;
    this.lyrics = songData.lyrics;
    this.currentLyricIndex = -1;

    // Stop any existing demo sound
    this.stopDemoSound();

    // Try to load audio
    this.audio.src = songData.instrumental;
    this.audio.load();

    // Display lyrics
    this.renderLyrics();

    // Update UI
    document.getElementById('songTitle').textContent = `${songData.title} - ${songData.artist}`;

    // Set progress bar max for demo
    this.progressBar.max = songData.duration;
  }

  renderLyrics() {
    this.lyricsContainer.innerHTML = '';

    this.lyrics.forEach((lyric, index) => {
      const lyricElement = document.createElement('div');
      lyricElement.className = 'lyric-line text-center py-2 px-4 rounded-lg transition-all duration-300 cursor-pointer hover:bg-purple-100';
      lyricElement.textContent = lyric.text;
      lyricElement.dataset.index = index;
      lyricElement.dataset.time = lyric.time;

      lyricElement.addEventListener('click', () => {
        this.audio.currentTime = lyric.time;
        this.updateLyrics();
      });

      this.lyricsContainer.appendChild(lyricElement);
    });
  }

  updateLyrics() {
    if (!this.lyrics.length) return;

    const currentTime = this.audio.currentTime || this.demoTime || 0;
    let newIndex = -1;

    // Find the current lyric line
    for (let i = 0; i < this.lyrics.length; i++) {
      if (currentTime >= this.lyrics[i].time) {
        newIndex = i;
      } else {
        break;
      }
    }

    if (newIndex !== this.currentLyricIndex) {
      // Remove previous active class
      if (this.currentLyricIndex >= 0) {
        const prevElement = this.lyricsContainer.children[this.currentLyricIndex];
        if (prevElement) {
          prevElement.classList.remove('active', 'bg-gradient-to-r', 'from-pink-400', 'to-purple-600', 'text-white', 'scale-105', 'shadow-lg');
        }
      }

      // Add active class to current line
      this.currentLyricIndex = newIndex;
      if (newIndex >= 0) {
        const currentElement = this.lyricsContainer.children[newIndex];
        if (currentElement) {
          currentElement.classList.add('active', 'bg-gradient-to-r', 'from-pink-400', 'to-purple-600', 'text-white', 'scale-105', 'shadow-lg');
          currentElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }
    }
  }

  updateProgress() {
    const currentTime = this.audio.currentTime || this.demoTime || 0;
    this.progressBar.value = currentTime;
    this.updateTimeDisplay();
  }

  updateTimeDisplay() {
    const current = this.formatTime(this.audio.currentTime || this.demoTime || 0);
    const duration = this.formatTime(this.audio.duration || this.currentSong?.duration || 60);
    document.getElementById('currentTime').textContent = current;
    document.getElementById('totalTime').textContent = duration;
  }

  updateDuration() {
    this.updateTimeDisplay();
  }

  formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  }

  play() {
    // Try to play audio file first
    const playPromise = this.audio.play();

    if (playPromise !== undefined) {
      playPromise.then(() => {
        this.isPlaying = true;
        this.controls.playPause.innerHTML = '<i class="fas fa-pause"></i>';
        this.controls.playPause.classList.add('playing');
      }).catch(() => {
        // Audio file failed, start demo sound
        this.startDemoSound();
      });
    } else {
      // Fallback for older browsers
      this.startDemoSound();
    }
  }

  pause() {
    this.audio.pause();
    this.stopDemoSound();
    this.isPlaying = false;
    this.controls.playPause.innerHTML = '<i class="fas fa-play"></i>';
    this.controls.playPause.classList.remove('playing');
  }

  togglePlayPause() {
    if (this.isPlaying) {
      this.pause();
    } else {
      this.play();
    }
  }

  startDemoSound() {
    if (!this.audioContext) return;

    this.isPlaying = true;
    this.controls.playPause.innerHTML = '<i class="fas fa-pause"></i>';
    this.controls.playPause.classList.add('playing');

    // Create a simple demo melody using oscillators
    this.demoTime = 0;
    this.demoStartTime = Date.now();

    const playNote = (frequency, duration, delay = 0) => {
      setTimeout(() => {
        if (!this.isPlaying) return;

        const oscillator = this.audioContext.createOscillator();
        const gainNode = this.audioContext.createGain();

        oscillator.connect(gainNode);
        gainNode.connect(this.audioContext.destination);

        oscillator.frequency.setValueAtTime(frequency, this.audioContext.currentTime);
        oscillator.type = 'sine';

        gainNode.gain.setValueAtTime(0.1, this.audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + duration);

        oscillator.start(this.audioContext.currentTime);
        oscillator.stop(this.audioContext.currentTime + duration);
      }, delay);
    };

    // Simple melody for demo (Twinkle Twinkle)
    const melody = [
      { freq: 261.63, duration: 0.5, delay: 0 },   // C4
      { freq: 261.63, duration: 0.5, delay: 500 }, // C4
      { freq: 293.66, duration: 0.5, delay: 1000 }, // D4
      { freq: 293.66, duration: 0.5, delay: 1500 }, // D4
      { freq: 329.63, duration: 0.5, delay: 2000 }, // E4
      { freq: 329.63, duration: 0.5, delay: 2500 }, // E4
      { freq: 293.66, duration: 1, delay: 3000 },   // D4
    ];

    // Play the melody and loop it
    const playMelody = () => {
      if (!this.isPlaying) return;

      melody.forEach(note => playNote(note.freq, note.duration, note.delay));

      // Update progress
      this.demoInterval = setInterval(() => {
        if (!this.isPlaying) {
          clearInterval(this.demoInterval);
          return;
        }

        this.demoTime = (Date.now() - this.demoStartTime) / 1000;
        this.updateProgress();
        this.updateLyrics();

        // Loop every 4 seconds
        if (this.demoTime > 4) {
          this.demoStartTime = Date.now();
          this.demoTime = 0;
        }
      }, 100);

      // Loop the melody
      setTimeout(playMelody, 4000);
    };

    playMelody();
  }

  stopDemoSound() {
    this.isPlaying = false;
    if (this.demoInterval) {
      clearInterval(this.demoInterval);
      this.demoInterval = null;
    }
  }

  resetLyrics() {
    this.currentLyricIndex = -1;
    Array.from(this.lyricsContainer.children).forEach(child => {
      child.classList.remove('active', 'bg-gradient-to-r', 'from-pink-400', 'to-purple-600', 'text-white', 'scale-105', 'shadow-lg');
    });
  }

  destroy() {
    if (this.animationFrame) {
      cancelAnimationFrame(this.animationFrame);
    }
    this.audio.pause();
    this.audio.src = '';
    this.stopDemoSound();
  }
}

// Initialize karaoke when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  // Create karaoke interface elements
  const karaokeContainer = document.createElement('div');
  karaokeContainer.id = 'karaokeContainer';
  karaokeContainer.className = 'max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 hidden';

  karaokeContainer.innerHTML = `
    <div class="bg-white rounded-2xl shadow-xl p-8">
      <div class="text-center mb-6">
        <h2 id="songTitle" class="text-2xl font-bold text-gray-900 mb-2">Select a Song to Start Karaoke</h2>
        <p class="text-gray-600">Click on lyrics to jump to that part</p>
      </div>

      <!-- Audio Controls -->
      <div class="bg-gray-50 rounded-xl p-6 mb-6">
        <div class="flex items-center justify-center space-x-4 mb-4">
          <button id="playPauseBtn" class="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 flex items-center justify-center">
            <i class="fas fa-play"></i>
          </button>
          <div class="flex-1 max-w-md">
            <input type="range" id="progressBar" class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider" value="0" min="0" max="100">
          </div>
          <div class="flex items-center space-x-2">
            <i class="fas fa-volume-up text-gray-600"></i>
            <input type="range" id="volumeControl" class="w-20 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider" value="70" min="0" max="100">
          </div>
        </div>
        <div class="text-center text-sm text-gray-600">
          <span id="currentTime">0:00</span> / <span id="totalTime">0:00</span>
        </div>
      </div>

      <!-- Lyrics Display -->
      <div id="lyricsDisplay" class="bg-gradient-to-b from-purple-50 to-pink-50 rounded-xl p-8 min-h-96 flex flex-col justify-center space-y-2">
        <div class="text-center text-gray-500">
          <i class="fas fa-music text-4xl mb-4"></i>
          <p>Choose a song from the list below to start your karaoke session!</p>
        </div>
      </div>

      <!-- Song Selection -->
      <div class="mt-8">
        <h3 class="text-lg font-semibold text-gray-900 mb-4">Available Songs</h3>
        <div id="songList" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <!-- Songs will be populated here -->
        </div>
      </div>
    </div>
  `;

  // Insert karaoke container after the search form
  const searchForm = document.querySelector('form');
  if (searchForm) {
    searchForm.parentNode.insertBefore(karaokeContainer, searchForm.nextSibling);
  }

  // Initialize karaoke engine
  const audio = new Audio();
  const lyricsContainer = document.getElementById('lyricsDisplay');
  const progressBar = document.getElementById('progressBar');
  const controls = {
    playPause: document.getElementById('playPauseBtn'),
    volume: document.getElementById('volumeControl')
  };

  const karaoke = new KaraokeEngine(audio, lyricsContainer, progressBar, controls);

  // Load and display available songs
  import('./karaoke-data.js').then(({ karaokeSongs }) => {
    const songList = document.getElementById('songList');

    Object.entries(karaokeSongs).forEach(([id, song]) => {
      const songCard = document.createElement('div');
      songCard.className = 'bg-gradient-to-r from-purple-100 to-pink-100 p-4 rounded-lg cursor-pointer hover:shadow-lg transition-all duration-300 transform hover:scale-105';
      songCard.innerHTML = `
        <div class="flex items-center space-x-3">
          <div class="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg flex items-center justify-center">
            <i class="fas fa-music text-white"></i>
          </div>
          <div>
            <h4 class="font-semibold text-gray-900">${song.title}</h4>
            <p class="text-sm text-gray-600">${song.artist}</p>
          </div>
        </div>
      `;

      songCard.addEventListener('click', () => {
        karaoke.loadSong(song);
        karaokeContainer.classList.remove('hidden');
        karaokeContainer.scrollIntoView({ behavior: 'smooth' });
      });

      songList.appendChild(songCard);
    });
  });

  // Add custom styles for sliders
  const style = document.createElement('style');
  style.textContent = `
    .slider::-webkit-slider-thumb {
      appearance: none;
      height: 12px;
      width: 12px;
      border-radius: 50%;
      background: linear-gradient(135deg, #ec4899, #8b5cf6);
      cursor: pointer;
      box-shadow: 0 2px 4px rgba(0,0,0,0.2);
    }
    .slider::-moz-range-thumb {
      height: 12px;
      width: 12px;
      border-radius: 50%;
      background: linear-gradient(135deg, #ec4899, #8b5cf6);
      cursor: pointer;
      border: none;
      box-shadow: 0 2px 4px rgba(0,0,0,0.2);
    }
  `;
  document.head.appendChild(style);
});