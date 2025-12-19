# MelodyMate Karaoke 🎤

An interactive karaoke experience with synchronized lyrics and instrumental tracks.

## ✨ Features

### 🎤 **Interactive Karaoke**
- **Synchronized Lyrics**: Lyrics highlight in real-time as the music plays
- **Instrumental Tracks**: Professional backing music for sing-along
- **Click to Jump**: Click any lyric line to jump to that part of the song
- **Audio Controls**: Play, pause, volume, and progress controls

### 🎵 **Song Library**
- **Curated Collection**: Hand-picked songs with timed lyrics
- **Multiple Genres**: Traditional songs, classics, and popular tunes
- **Easy Selection**: Visual song cards for quick browsing

### 🎮 **Interactive Controls**
- **Keyboard Shortcuts**: Space bar for play/pause, arrow keys for seeking
- **Progress Bar**: Visual progress with clickable seeking
- **Volume Control**: Adjustable audio levels
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

1. **Choose a Song**: Browse the available karaoke songs
2. **Start Singing**: Click on a song card to load it
3. **Follow Lyrics**: Watch as lyrics highlight in real-time
4. **Control Playback**: Use play/pause, volume, and progress controls
5. **Jump Around**: Click any lyric line to jump to that section

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
    │   ├── karaoke-engine.js # Main karaoke logic
    │   └── karaoke-data.js # Song data and lyrics
    └── styles/
        └── tailwind.css   # Custom styles and animations
```

## 🎵 Available Songs

- **Happy Birthday** - Traditional
- **Twinkle Twinkle Little Star** - Traditional
- **Amazing Grace** - Traditional

## 🛠️ Technologies Used

- **HTML5**: Semantic markup with audio elements
- **Tailwind CSS**: Utility-first styling
- **JavaScript**: Interactive karaoke engine
- **Parcel**: Build tool and dev server
- **Font Awesome**: Beautiful icons
- **Web Audio API**: Audio playback and controls

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

## 🔧 Customization

### Adding New Songs

1. Add song data to `karaoke-data.js`:
```javascript
"new-song": {
  title: "New Song Title",
  artist: "Artist Name",
  instrumental: "path/to/audio.mp3",
  duration: 180,
  lyrics: [
    { time: 0, text: "First line of lyrics" },
    { time: 5, text: "Second line of lyrics" },
    // ... more lyrics with timestamps
  ]
}
```

2. Ensure audio file is accessible
3. Test timing with the karaoke engine

### Styling Customization

- Modify `tailwind.config.js` for color schemes
- Update `src/styles/tailwind.css` for custom animations
- Adjust gradients and effects in component classes

Enjoy your karaoke experience with MelodyMate! 🎶✨🎤