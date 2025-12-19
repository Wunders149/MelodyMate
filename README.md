# MelodyMate Karaoke 🎤

An interactive karaoke experience with timestamped lyrics from LRCLIB and PoYo APIs.

## ✨ Features

### 🎤 **Dynamic Song Search**
- **API-Powered Search**: Search millions of songs using LRCLIB API
- **Timestamped Lyrics**: Automatically synchronized lyrics with precise timing
- **Dual API Support**: LRCLIB primary + PoYo API as fallback
- **Real-time Results**: Instant search results with song details

### 🎵 **Interactive Karaoke**
- **Synchronized Lyrics**: Lyrics highlight in real-time as music plays
- **Audio Controls**: Play, pause, volume, and progress controls
- **Click to Jump**: Click any lyric line to jump to that part
- **Keyboard Shortcuts**: Space bar (play/pause), arrow keys (seek)

### 🎼 **Song Library**
- **Millions of Songs**: Access to vast music catalog
- **Multiple Sources**: LRCLIB + PoYo API integration
- **Fallback System**: Automatic fallback between APIs
- **Demo Songs**: Traditional songs available without search

### 🎮 **Enhanced Controls**
- **Progress Bar**: Visual progress with clickable seeking
- **Volume Control**: Adjustable audio levels
- **Time Display**: Current time and total duration
- **Responsive Design**: Works perfectly on all devices

### 🎨 **Modern UI/UX**
- **Gradient Themes**: Beautiful purple-to-pink gradients
- **Smooth Animations**: Floating elements and transitions
- **Glass Morphism**: Modern translucent effects
- **Mobile-First**: Optimized for touch devices

## 🚀 Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Build CSS**
   ```bash
   npm run build:css
   ```

3. **Start Development Server**
   ```bash
   npm start
   ```

4. **Open in Browser**
   ```
   http://localhost:1234
   ```

## 🎤 How to Use

1. **Search for Songs**: Enter song title and artist name (optional)
2. **Browse Results**: Click on search results to load songs
3. **Start Singing**: Use play button to begin karaoke
4. **Follow Lyrics**: Watch as lyrics highlight in real-time
5. **Control Playback**: Use keyboard shortcuts or on-screen controls

## 🎹 Controls

- **Space Bar**: Play/Pause
- **Left/Right Arrows**: Seek backward/forward 5 seconds
- **Mouse**: Click progress bar to seek, drag volume slider
- **Click Lyrics**: Jump to that part of the song

## 📁 Project Structure

```
MelodyMate/
├── index.html              # Karaoke landing page
├── package.json            # Dependencies and scripts
├── tailwind.config.js      # Tailwind configuration
├── postcss.config.js       # PostCSS configuration
├── dist/
│   └── output.css         # Compiled CSS
└── src/
    ├── images/            # Logo and images
    ├── pages/             # HTML pages
    │   ├── navbar.html    # Navigation component
    │   ├── search.html    # Main karaoke interface
    │   └── lyrics.html    # Alternative karaoke page
    ├── scripts/           # JavaScript functionality
    │   ├── scripts.js     # Navbar loading
    │   ├── karaoke-engine.js # Main karaoke logic + API integration
    │   └── karaoke-data.js # API classes and demo songs
    └── styles/
        └── tailwind.css   # Custom styles and animations
```

## 🔗 APIs Used

### LRCLIB API
- **Base URL**: `https://lrclib.net/api`
- **Features**: Timestamped lyrics, song search, metadata
- **Format**: `[mm:ss.xx]lyrics` timestamp format

### PoYo API
- **Base URL**: `https://api.poyo.ai`
- **Features**: Alternative timestamped lyrics source
- **Usage**: Fallback when LRCLIB doesn't have lyrics

## 🎵 Demo Songs

- **Happy Birthday** - Traditional (pre-loaded)
- **Search any song** - Millions available via APIs

## 🛠️ Technologies Used

- **HTML5**: Semantic markup with audio elements
- **Tailwind CSS**: Utility-first styling
- **JavaScript**: Interactive karaoke engine with API integration
- **Parcel**: Build tool and dev server
- **Font Awesome**: Beautiful icons
- **Web Audio API**: Audio playback and demo sounds
- **Fetch API**: RESTful API communication

## 🎨 Design Highlights

- **Color Palette**: Purple, pink, and blue gradients
- **Typography**: Modern fonts with gradient text effects
- **Animations**: CSS keyframes for smooth interactions
- **Icons**: Font Awesome integration throughout
- **Shadows**: Layered shadows for depth

## 📱 Responsive Features

- **Mobile Navigation**: Collapsible menu for small screens
- **Flexible Layouts**: Grid and flexbox for all screen sizes
- **Touch-Friendly**: Large buttons and touch targets
- **Adaptive Controls**: Optimized for different screen sizes

## 🔧 API Integration Details

### Search Flow
1. User enters song title/artist
2. LRCLIB API search returns matching songs
3. User selects song from results
4. App fetches timestamped lyrics
5. Fallback to PoYo API if needed
6. Lyrics parsed and synchronized

### Lyrics Format
- **LRCLIB**: `[mm:ss.xx]Lyrics text here`
- **PoYo**: `{time: seconds, text: "lyrics"}`
- **Parsed to**: `[{time: seconds, text: "lyrics"}, ...]`

### Error Handling
- Network failures gracefully handled
- API fallbacks for reliability
- User-friendly error messages
- Demo songs always available

Enjoy your karaoke experience with MelodyMate! 🎶✨🎤