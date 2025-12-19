var e=globalThis,t={},i={},r=e.parcelRequireb585;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in i){var r=i[e];delete i[e];var a={id:e,exports:{}};return t[e]=a,r.call(a.exports,a,a.exports),a.exports}var s=Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){i[e]=t},e.parcelRequireb585=r);var a=r.register;a("fr3Jf",function(e,t){e.exports=import("axIYR").then(()=>r("beBBR"))}),a("g6FTi",function(e,t){e.exports=import("jyK6J").then(()=>r("dCMSQ"))}),a("2D80e",function(e,t){e.exports=import("9PQfj").then(()=>r("h8sKa"))});class s{constructor(e,t,i,r){this.audio=e,this.lyricsContainer=t,this.progressBar=i,this.controls=r,this.currentSong=null,this.currentLyricIndex=-1,this.lyrics=[],this.isPlaying=!1,this.animationFrame=null,this.audioContext=null,this.demoOscillator=null,this.init()}init(){try{this.audioContext=new(window.AudioContext||window.webkitAudioContext)}catch(e){console.warn("Web Audio API not supported")}this.audio.addEventListener("loadedmetadata",()=>{this.progressBar.max=this.audio.duration,this.updateDuration()}),this.audio.addEventListener("timeupdate",()=>{this.updateProgress(),this.updateLyrics()}),this.audio.addEventListener("ended",()=>{this.pause(),this.resetLyrics(),this.stopDemoSound()}),this.audio.addEventListener("error",()=>{console.log("Audio file not available, using demo sound"),this.startDemoSound()}),this.progressBar.addEventListener("input",e=>{this.audio.currentTime=e.target.value,this.updateLyrics()}),this.controls.playPause.addEventListener("click",()=>this.togglePlayPause()),this.controls.volume.addEventListener("input",e=>{this.audio.volume=e.target.value/100,this.demoOscillator&&(this.demoOscillator.volume=e.target.value/100)}),document.addEventListener("keydown",e=>{switch(e.code){case"Space":e.preventDefault(),this.togglePlayPause();break;case"ArrowLeft":e.preventDefault(),this.audio.currentTime=Math.max(0,this.audio.currentTime-5);break;case"ArrowRight":e.preventDefault(),this.audio.currentTime=Math.min(this.audio.duration||this.currentSong?.duration||60,this.audio.currentTime+5)}})}loadSong(e){this.currentSong=e,this.lyrics=e.lyrics,this.currentLyricIndex=-1,this.stopDemoSound(),this.audio.src=e.instrumental,this.audio.load(),this.renderLyrics(),document.getElementById("songTitle").textContent=`${e.title} - ${e.artist}`,this.progressBar.max=e.duration}renderLyrics(){this.lyricsContainer.innerHTML="";let e=document.createElement("div");e.className="lyrics-container w-full",this.lyrics.forEach((t,i)=>{let r=document.createElement("div");r.className="lyric-line text-center py-3 px-4 rounded-lg cursor-pointer hover:bg-purple-100",r.textContent=t.text,r.dataset.index=i,r.dataset.time=t.time,r.addEventListener("click",()=>{this.audio.currentTime=t.time,this.updateLyrics()}),e.appendChild(r)}),this.lyricsContainer.appendChild(e)}updateLyrics(){if(!this.lyrics.length)return;let e=this.audio.currentTime||this.demoTime||0,t=-1;for(let i=0;i<this.lyrics.length;i++)if(e>=this.lyrics[i].time)t=i;else break;if(t!==this.currentLyricIndex){let e=this.lyricsContainer.querySelector(".lyrics-container");if(!e)return;if(this.currentLyricIndex>=0){let t=e.children[this.currentLyricIndex];t&&t.classList.remove("active")}if(this.currentLyricIndex=t,t>=0){let i=e.children[t];if(i){Array.from(e.children).forEach(e=>{e.classList.remove("active")}),i.classList.add("active");let t=e.getBoundingClientRect(),r=i.getBoundingClientRect(),a=r.top-t.top,s=(t.height-r.height)/2,n=e.scrollTop+a-s;e.scrollTo({top:n,behavior:"smooth"})}}}}updateProgress(){let e=this.audio.currentTime||this.demoTime||0;this.progressBar.value=e,this.updateTimeDisplay()}updateTimeDisplay(){let e=this.formatTime(this.audio.currentTime||this.demoTime||0),t=this.formatTime(this.audio.duration||this.currentSong?.duration||60);document.getElementById("currentTime").textContent=e,document.getElementById("totalTime").textContent=t}updateDuration(){this.updateTimeDisplay()}formatTime(e){let t=Math.floor(e/60),i=Math.floor(e%60);return`${t}:${i.toString().padStart(2,"0")}`}play(){let e=this.audio.play();void 0!==e?e.then(()=>{this.isPlaying=!0,this.controls.playPause.innerHTML='<i class="fas fa-pause"></i>',this.controls.playPause.classList.add("playing")}).catch(()=>{this.startDemoSound()}):this.startDemoSound()}pause(){this.audio.pause(),this.stopDemoSound(),this.isPlaying=!1,this.controls.playPause.innerHTML='<i class="fas fa-play"></i>',this.controls.playPause.classList.remove("playing")}togglePlayPause(){this.isPlaying?this.pause():this.play()}startDemoSound(){if(!this.audioContext)return;this.isPlaying=!0,this.controls.playPause.innerHTML='<i class="fas fa-pause"></i>',this.controls.playPause.classList.add("playing"),this.demoTime=0,this.demoStartTime=Date.now();let e=(e,t,i=0)=>{setTimeout(()=>{if(!this.isPlaying)return;let i=this.audioContext.createOscillator(),r=this.audioContext.createGain();i.connect(r),r.connect(this.audioContext.destination),i.frequency.setValueAtTime(e,this.audioContext.currentTime),i.type="sine",r.gain.setValueAtTime(.1,this.audioContext.currentTime),r.gain.exponentialRampToValueAtTime(.01,this.audioContext.currentTime+t),i.start(this.audioContext.currentTime),i.stop(this.audioContext.currentTime+t)},i)},t=[{freq:261.63,duration:.5,delay:0},{freq:261.63,duration:.5,delay:500},{freq:293.66,duration:.5,delay:1e3},{freq:293.66,duration:.5,delay:1500},{freq:329.63,duration:.5,delay:2e3},{freq:329.63,duration:.5,delay:2500},{freq:293.66,duration:1,delay:3e3}],i=()=>{this.isPlaying&&(t.forEach(t=>e(t.freq,t.duration,t.delay)),this.demoInterval=setInterval(()=>{this.isPlaying?(this.demoTime=(Date.now()-this.demoStartTime)/1e3,this.updateProgress(),this.updateLyrics(),this.demoTime>4&&(this.demoStartTime=Date.now(),this.demoTime=0)):clearInterval(this.demoInterval)},100),setTimeout(i,4e3))};i()}stopDemoSound(){this.isPlaying=!1,this.demoInterval&&(clearInterval(this.demoInterval),this.demoInterval=null)}resetLyrics(){this.currentLyricIndex=-1;let e=this.lyricsContainer.querySelector(".lyrics-container");e&&Array.from(e.children).forEach(e=>{e.classList.remove("active")})}destroy(){this.animationFrame&&cancelAnimationFrame(this.animationFrame),this.audio.pause(),this.audio.src="",this.stopDemoSound()}}document.addEventListener("DOMContentLoaded",async function(){let{loadNavBar:e}=await r("fr3Jf");e();let{karaokeAPI:t,demoSongs:i}=await r("g6FTi"),{showNotification:a}=await r("2D80e"),n=window.location.pathname.includes("lyrics.html"),o=window.location.pathname.includes("search.html");if(o){let e=document.createElement("div");e.id="karaokeContainer",e.className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16",e.innerHTML=`
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
  `;let r=document.querySelector(".bg-white.rounded-2xl.shadow-xl.p-6");r&&r.parentNode.insertBefore(e,r.nextSibling);let n=new Audio,l=document.getElementById("lyricsDisplay"),c=new s(n,l,document.getElementById("progressBar"),{playPause:document.getElementById("playPauseBtn"),volume:document.getElementById("volumeControl")}),u=document.getElementById("demoSongs");u?Object.entries(i).forEach(([t,i])=>{let r=document.createElement("div");r.className="bg-gradient-to-r from-purple-100 to-pink-100 p-4 rounded-lg cursor-pointer hover:shadow-lg transition-all duration-300 transform hover:scale-105",r.innerHTML=`
        <div class="flex items-center space-x-3">
          <div class="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg flex items-center justify-center">
            <i class="fas fa-music text-white"></i>
          </div>
          <div>
            <h4 class="font-semibold text-gray-900">${i.title}</h4>
            <p class="text-sm text-gray-600">${i.artist}</p>
          </div>
        </div>
      `,r.addEventListener("click",()=>{c.loadSong(i),e.classList.remove("hidden"),document.getElementById("audioControls").classList.remove("hidden"),l.classList.remove("hidden"),e.scrollIntoView({behavior:"smooth"})}),u.appendChild(r)}):console.warn("Demo songs container not found");let m=document.getElementById("searchBtn"),h=document.getElementById("songSearch"),p=document.getElementById("artistSearch"),g=document.getElementById("searchResults");m&&h&&p&&g?(m.addEventListener("click",async()=>{let e=h.value.trim(),i=p.value.trim();if(!e)return void a("Please enter a song title","error");m.disabled=!0,m.innerHTML='<i class="fas fa-spinner fa-spin mr-2"></i>Searching...';try{let r=await t.searchSongs(e,i);if(0===r.length){g.innerHTML='<p class="text-gray-500 text-center py-4">No songs found. Try different search terms.</p>',g.classList.remove("hidden");return}d(r,c,o),g.classList.remove("hidden")}catch(e){console.error("Search error:",e),a("Search failed. Please try again.","error")}finally{m.disabled=!1,m.innerHTML='<i class="fas fa-search mr-2"></i>Search'}}),[h,p].forEach(e=>{e.addEventListener("keypress",e=>{"Enter"===e.key&&m.click()})})):console.warn("Search elements not found")}else if(n){let e=new s(new Audio,document.getElementById("lyricsDisplay"),document.getElementById("progressBar"),{playPause:document.getElementById("playPauseBtn"),volume:document.getElementById("volumeControl")}),i=document.getElementById("prevBtn"),r=document.getElementById("nextBtn"),n=document.getElementById("rewindBtn"),l=document.getElementById("forwardBtn"),c=document.getElementById("speedControl"),u=document.getElementById("effectControl");i&&i.addEventListener("click",()=>{e.audio.currentTime=0,e.updateLyrics()}),r&&r.addEventListener("click",()=>{e.audio.currentTime=e.audio.duration||60}),n&&n.addEventListener("click",()=>{e.audio.currentTime=Math.max(0,e.audio.currentTime-10),e.updateLyrics()}),l&&l.addEventListener("click",()=>{let t=e.audio.duration||e.currentSong?.duration||60;e.audio.currentTime=Math.min(t,e.audio.currentTime+10),e.updateLyrics()}),c&&c.addEventListener("change",t=>{e.audio.playbackRate=parseFloat(t.target.value)}),u&&u.addEventListener("change",e=>{a(`${e.target.value} effect not implemented yet`,"info")});let m=document.getElementById("searchBtn"),h=document.getElementById("songSearch"),p=document.getElementById("artistSearch"),g=document.getElementById("searchResults");m&&h&&p&&g?(m.addEventListener("click",async()=>{let i=h.value.trim(),r=p.value.trim();if(!i)return void a("Please enter a song title","error");m.disabled=!0,m.innerHTML='<i class="fas fa-spinner fa-spin mr-3"></i>Searching...';try{let a=await t.searchSongs(i,r);if(0===a.length){g.innerHTML='<p class="text-gray-500 text-center py-4">No songs found. Try different search terms.</p>',g.classList.remove("hidden");return}d(a,e,o),g.classList.remove("hidden")}catch(e){console.error("Search error:",e),a("Search failed. Please try again.","error")}finally{m.disabled=!1,m.innerHTML='<i class="fas fa-search mr-3"></i>Search'}}),[h,p].forEach(e=>{e.addEventListener("keypress",e=>{"Enter"===e.key&&m.click()})})):console.warn("Search elements not found on lyrics page")}function d(e,i,r){searchResults.innerHTML="",e.forEach(e=>{var s;let n,o,d=document.createElement("div");d.className="bg-white p-4 rounded-lg border border-gray-200 hover:border-purple-300 cursor-pointer transition-all duration-200 hover:shadow-md";let l=`
        <div class="flex justify-between items-start">
          <div class="flex-1">
            <h4 class="font-semibold text-gray-900">${e.name}</h4>
            <p class="text-sm text-gray-600">by ${e.artistName}</p>
            ${e.albumName?`<p class="text-xs text-gray-500">Album: ${e.albumName}</p>`:""}
          </div>
          <div class="text-right">
            <span class="text-xs text-gray-500">${(n=Math.floor((s=e.duration)/60),o=Math.floor(s%60),`${n}:${o.toString().padStart(2,"0")}`)}</span>
          </div>
        </div>
      `;d.innerHTML=l;let c=async()=>{d.innerHTML='<div class="text-center py-4"><i class="fas fa-spinner fa-spin mr-2"></i>Loading lyrics...</div>',d.removeEventListener("click",c);try{let s=await t.searchAndGetSong(e.name,e.artistName);s?(i.loadSong(s),r&&(karaokeContainer.classList.remove("hidden"),karaokeContainer.scrollIntoView({behavior:"smooth"})),document.getElementById("audioControls").classList.remove("hidden"),document.getElementById("lyricsDisplay").classList.remove("hidden"),a(`Loaded "${s.title}" by ${s.artist}`,"success")):(a("Lyrics not available for this song","error"),d.innerHTML='<div class="text-center py-4 text-red-500"><i class="fas fa-exclamation-triangle mr-2"></i>Lyrics not found</div>',setTimeout(()=>{d.innerHTML=l,d.addEventListener("click",c)},2e3))}catch(e){console.error("Load song error:",e),a("Failed to load song","error"),d.innerHTML='<div class="text-center py-4 text-red-500"><i class="fas fa-exclamation-triangle mr-2"></i>Failed to load</div>',setTimeout(()=>{d.innerHTML=l,d.addEventListener("click",c)},2e3)}};d.addEventListener("click",c),searchResults.appendChild(d)})}let l=document.createElement("style");l.textContent=`
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
    .lyric-line.active {
      background: linear-gradient(135deg, #ec4899, #8b5cf6);
      color: white;
      transform: scale(1.05);
      font-weight: bold;
      text-shadow: 0 2px 4px rgba(0,0,0,0.3);
      box-shadow: 0 4px 8px rgba(236, 72, 153, 0.3);
    }
    .lyric-line {
      transition: all 0.3s ease;
    }
  `,document.head.appendChild(l)});
//# sourceMappingURL=search.d281964d.js.map
