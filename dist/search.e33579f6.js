(()=>{var e=globalThis,t={},i={},r=e.parcelRequireb585;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in i){var r=i[e];delete i[e];var a={id:e,exports:{}};return t[e]=a,r.call(a.exports,a,a.exports),a.exports}var s=Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){i[e]=t},e.parcelRequireb585=r);var a=r.register;a("NFbU6",function(e,t){Object.assign(r.i??={},{jyK6J:"karaoke-data.f94743e7.js"})}),a("7CF6O",function(e,t){var i;e.exports=(i="jyK6J",import("./"+(i=r.i?.[i]||i))).then(()=>r("dCMSQ"))}),r("NFbU6")})();class KaraokeEngine{constructor(e,t,i,r){this.audio=e,this.lyricsContainer=t,this.progressBar=i,this.controls=r,this.currentSong=null,this.currentLyricIndex=-1,this.lyrics=[],this.isPlaying=!1,this.animationFrame=null,this.audioContext=null,this.demoOscillator=null,this.init()}init(){try{this.audioContext=new(window.AudioContext||window.webkitAudioContext)}catch(e){console.warn("Web Audio API not supported")}this.audio.addEventListener("loadedmetadata",()=>{this.progressBar.max=this.audio.duration,this.updateDuration()}),this.audio.addEventListener("timeupdate",()=>{this.updateProgress(),this.updateLyrics()}),this.audio.addEventListener("ended",()=>{this.pause(),this.resetLyrics(),this.stopDemoSound()}),this.audio.addEventListener("error",()=>{console.log("Audio file not available, using demo sound"),this.startDemoSound()}),this.progressBar.addEventListener("input",e=>{this.audio.currentTime=e.target.value,this.updateLyrics()}),this.controls.playPause.addEventListener("click",()=>this.togglePlayPause()),this.controls.volume.addEventListener("input",e=>{this.audio.volume=e.target.value/100,this.demoOscillator&&(this.demoOscillator.volume=e.target.value/100)}),document.addEventListener("keydown",e=>{switch(e.code){case"Space":e.preventDefault(),this.togglePlayPause();break;case"ArrowLeft":e.preventDefault(),this.audio.currentTime=Math.max(0,this.audio.currentTime-5);break;case"ArrowRight":e.preventDefault(),this.audio.currentTime=Math.min(this.audio.duration||this.currentSong?.duration||60,this.audio.currentTime+5)}})}loadSong(e){this.currentSong=e,this.lyrics=e.lyrics,this.currentLyricIndex=-1,this.stopDemoSound(),this.audio.src=e.instrumental,this.audio.load(),this.renderLyrics(),document.getElementById("songTitle").textContent=`${e.title} - ${e.artist}`,this.progressBar.max=e.duration}renderLyrics(){this.lyricsContainer.innerHTML="",this.lyrics.forEach((e,t)=>{let i=document.createElement("div");i.className="lyric-line text-center py-2 px-4 rounded-lg transition-all duration-300 cursor-pointer hover:bg-purple-100",i.textContent=e.text,i.dataset.index=t,i.dataset.time=e.time,i.addEventListener("click",()=>{this.audio.currentTime=e.time,this.updateLyrics()}),this.lyricsContainer.appendChild(i)})}updateLyrics(){if(!this.lyrics.length)return;let e=this.audio.currentTime||this.demoTime||0,t=-1;for(let i=0;i<this.lyrics.length;i++)if(e>=this.lyrics[i].time)t=i;else break;if(t!==this.currentLyricIndex){if(this.currentLyricIndex>=0){let e=this.lyricsContainer.children[this.currentLyricIndex];e&&e.classList.remove("active","bg-gradient-to-r","from-pink-400","to-purple-600","text-white","scale-105","shadow-lg")}if(this.currentLyricIndex=t,t>=0){let e=this.lyricsContainer.children[t];e&&(e.classList.add("active","bg-gradient-to-r","from-pink-400","to-purple-600","text-white","scale-105","shadow-lg"),e.scrollIntoView({behavior:"smooth",block:"center"}))}}}updateProgress(){let e=this.audio.currentTime||this.demoTime||0;this.progressBar.value=e,this.updateTimeDisplay()}updateTimeDisplay(){let e=this.formatTime(this.audio.currentTime||this.demoTime||0),t=this.formatTime(this.audio.duration||this.currentSong?.duration||60);document.getElementById("currentTime").textContent=e,document.getElementById("totalTime").textContent=t}updateDuration(){this.updateTimeDisplay()}formatTime(e){let t=Math.floor(e/60),i=Math.floor(e%60);return`${t}:${i.toString().padStart(2,"0")}`}play(){let e=this.audio.play();void 0!==e?e.then(()=>{this.isPlaying=!0,this.controls.playPause.innerHTML='<i class="fas fa-pause"></i>',this.controls.playPause.classList.add("playing")}).catch(()=>{this.startDemoSound()}):this.startDemoSound()}pause(){this.audio.pause(),this.stopDemoSound(),this.isPlaying=!1,this.controls.playPause.innerHTML='<i class="fas fa-play"></i>',this.controls.playPause.classList.remove("playing")}togglePlayPause(){this.isPlaying?this.pause():this.play()}startDemoSound(){if(!this.audioContext)return;this.isPlaying=!0,this.controls.playPause.innerHTML='<i class="fas fa-pause"></i>',this.controls.playPause.classList.add("playing"),this.demoTime=0,this.demoStartTime=Date.now();let e=(e,t,i=0)=>{setTimeout(()=>{if(!this.isPlaying)return;let i=this.audioContext.createOscillator(),r=this.audioContext.createGain();i.connect(r),r.connect(this.audioContext.destination),i.frequency.setValueAtTime(e,this.audioContext.currentTime),i.type="sine",r.gain.setValueAtTime(.1,this.audioContext.currentTime),r.gain.exponentialRampToValueAtTime(.01,this.audioContext.currentTime+t),i.start(this.audioContext.currentTime),i.stop(this.audioContext.currentTime+t)},i)},t=[{freq:261.63,duration:.5,delay:0},{freq:261.63,duration:.5,delay:500},{freq:293.66,duration:.5,delay:1e3},{freq:293.66,duration:.5,delay:1500},{freq:329.63,duration:.5,delay:2e3},{freq:329.63,duration:.5,delay:2500},{freq:293.66,duration:1,delay:3e3}],i=()=>{this.isPlaying&&(t.forEach(t=>e(t.freq,t.duration,t.delay)),this.demoInterval=setInterval(()=>{this.isPlaying?(this.demoTime=(Date.now()-this.demoStartTime)/1e3,this.updateProgress(),this.updateLyrics(),this.demoTime>4&&(this.demoStartTime=Date.now(),this.demoTime=0)):clearInterval(this.demoInterval)},100),setTimeout(i,4e3))};i()}stopDemoSound(){this.isPlaying=!1,this.demoInterval&&(clearInterval(this.demoInterval),this.demoInterval=null)}resetLyrics(){this.currentLyricIndex=-1,Array.from(this.lyricsContainer.children).forEach(e=>{e.classList.remove("active","bg-gradient-to-r","from-pink-400","to-purple-600","text-white","scale-105","shadow-lg")})}destroy(){this.animationFrame&&cancelAnimationFrame(this.animationFrame),this.audio.pause(),this.audio.src="",this.stopDemoSound()}}document.addEventListener("DOMContentLoaded",async function(){let{karaokeAPI:e,demoSongs:t}=await parcelRequireb585("7CF6O"),i=document.createElement("div");i.id="karaokeContainer",i.className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16",i.innerHTML=`
    <div class="bg-white rounded-2xl shadow-xl p-8">
      <div class="text-center mb-6">
        <h2 id="songTitle" class="text-2xl font-bold text-gray-900 mb-2">Search for a Song to Start Karaoke</h2>
        <p class="text-gray-600">Find any song with synchronized lyrics</p>
      </div>

      <!-- Search Form -->
      <div class="bg-gray-50 rounded-xl p-6 mb-6">
        <div class="flex flex-col md:flex-row gap-4 mb-4">
          <div class="flex-1">
            <input type="text" id="songSearch" placeholder="Enter song title..." class="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:ring-4 focus:ring-purple-200 transition-all duration-200">
          </div>
          <div class="flex-1">
            <input type="text" id="artistSearch" placeholder="Enter artist name (optional)..." class="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:ring-4 focus:ring-purple-200 transition-all duration-200">
          </div>
          <button id="searchBtn" class="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
            <i class="fas fa-search mr-2"></i>Search
          </button>
        </div>
        <div id="searchResults" class="hidden space-y-2 max-h-60 overflow-y-auto"></div>
      </div>

      <!-- Audio Controls -->
      <div id="audioControls" class="bg-gray-50 rounded-xl p-6 mb-6 hidden">
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
      <div id="lyricsDisplay" class="bg-gradient-to-b from-purple-50 to-pink-50 rounded-xl p-8 min-h-96 flex-col justify-center space-y-2 hidden">
        <div class="text-center text-gray-500">
          <i class="fas fa-music text-4xl mb-4"></i>
          <p>Search for a song above to start your karaoke session!</p>
        </div>
      </div>

      <!-- Demo Songs -->
      <div class="mt-8">
        <h3 class="text-lg font-semibold text-gray-900 mb-4">Demo Songs (No Search Required)</h3>
        <div id="demoSongs" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <!-- Demo songs will be populated here -->
        </div>
      </div>
    </div>
  `;let r=document.querySelector(".bg-white.rounded-2xl.shadow-xl.p-6");r&&r.parentNode.insertBefore(i,r.nextSibling);let a=new Audio,s=document.getElementById("lyricsDisplay"),n=new KaraokeEngine(a,s,document.getElementById("progressBar"),{playPause:document.getElementById("playPauseBtn"),volume:document.getElementById("volumeControl")}),o=document.getElementById("demoSongs");Object.entries(t).forEach(([e,t])=>{let r=document.createElement("div");r.className="bg-gradient-to-r from-purple-100 to-pink-100 p-4 rounded-lg cursor-pointer hover:shadow-lg transition-all duration-300 transform hover:scale-105",r.innerHTML=`
      <div class="flex items-center space-x-3">
        <div class="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg flex items-center justify-center">
          <i class="fas fa-music text-white"></i>
        </div>
        <div>
          <h4 class="font-semibold text-gray-900">${t.title}</h4>
          <p class="text-sm text-gray-600">${t.artist}</p>
        </div>
      </div>
    `,r.addEventListener("click",()=>{n.loadSong(t),i.classList.remove("hidden"),document.getElementById("audioControls").classList.remove("hidden"),s.classList.remove("hidden"),i.scrollIntoView({behavior:"smooth"})}),o.appendChild(r)});let d=document.getElementById("searchBtn"),l=document.getElementById("songSearch"),c=document.getElementById("artistSearch"),u=document.getElementById("searchResults");function h(e,t="info"){document.querySelectorAll(".notification").forEach(e=>e.remove());let i=document.createElement("div");i.className=`notification fixed top-4 right-4 z-50 px-6 py-3 rounded-lg shadow-lg transform translate-x-full transition-transform duration-300 ${"success"===t?"bg-green-500 text-white":"error"===t?"bg-red-500 text-white":"bg-blue-500 text-white"}`,i.innerHTML=`
      <div class="flex items-center">
        <i class="fas ${"success"===t?"fa-check-circle":"error"===t?"fa-exclamation-circle":"fa-info-circle"} mr-2"></i>
        ${e}
      </div>
    `,document.body.appendChild(i),setTimeout(()=>{i.classList.remove("translate-x-full")},100),setTimeout(()=>{i.classList.add("translate-x-full"),setTimeout(()=>{i.parentNode&&i.parentNode.removeChild(i)},300)},3e3)}d.addEventListener("click",async()=>{let t=l.value.trim(),r=c.value.trim();if(!t)return void h("Please enter a song title","error");d.disabled=!0,d.innerHTML='<i class="fas fa-spinner fa-spin mr-2"></i>Searching...';try{var a;let o=await e.searchSongs(t,r);if(0===o.length){u.innerHTML='<p class="text-gray-500 text-center py-4">No songs found. Try different search terms.</p>',u.classList.remove("hidden");return}a=o,u.innerHTML="",a.forEach(t=>{var r;let a,o,d=document.createElement("div");d.className="bg-white p-4 rounded-lg border border-gray-200 hover:border-purple-300 cursor-pointer transition-all duration-200 hover:shadow-md",d.innerHTML=`
        <div class="flex justify-between items-start">
          <div class="flex-1">
            <h4 class="font-semibold text-gray-900">${t.name}</h4>
            <p class="text-sm text-gray-600">by ${t.artistName}</p>
            ${t.albumName?`<p class="text-xs text-gray-500">Album: ${t.albumName}</p>`:""}
          </div>
          <div class="text-right">
            <span class="text-xs text-gray-500">${r=t.duration,a=Math.floor(r/60),o=Math.floor(r%60),`${a}:${o.toString().padStart(2,"0")}`}</span>
          </div>
        </div>
      `,d.addEventListener("click",async()=>{d.innerHTML='<div class="text-center py-4"><i class="fas fa-spinner fa-spin mr-2"></i>Loading lyrics...</div>';try{let r=await e.searchAndGetSong(t.name,t.artistName);r?(n.loadSong(r),i.classList.remove("hidden"),document.getElementById("audioControls").classList.remove("hidden"),s.classList.remove("hidden"),i.scrollIntoView({behavior:"smooth"}),h(`Loaded "${r.title}" by ${r.artist}`,"success")):(h("Lyrics not available for this song","error"),d.innerHTML='<div class="text-center py-4 text-red-500"><i class="fas fa-exclamation-triangle mr-2"></i>Lyrics not found</div>')}catch(e){console.error("Load song error:",e),h("Failed to load song","error"),d.innerHTML='<div class="text-center py-4 text-red-500"><i class="fas fa-exclamation-triangle mr-2"></i>Failed to load</div>'}}),u.appendChild(d)}),u.classList.remove("hidden")}catch(e){console.error("Search error:",e),h("Search failed. Please try again.","error")}finally{d.disabled=!1,d.innerHTML='<i class="fas fa-search mr-2"></i>Search'}}),[l,c].forEach(e=>{e.addEventListener("keypress",e=>{"Enter"===e.key&&d.click()})});let m=document.createElement("style");m.textContent=`
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
  `,document.head.appendChild(m)});
//# sourceMappingURL=search.e33579f6.js.map
