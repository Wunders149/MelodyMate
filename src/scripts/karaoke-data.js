// Karaoke API Integration - LRCLIB and PoYo timestamped lyrics
class KaraokeAPI {
  constructor() {
    this.lrclibBase = 'https://lrclib.net/api';
    this.poyoBase = 'https://api.poyo.ai';
  }

  // Search for songs using LRCLIB
  async searchSongs(query, artist = '') {
    try {
      const searchQuery = artist ? `${artist} ${query}` : query;
      const response = await fetch(`${this.lrclibBase}/search?q=${encodeURIComponent(searchQuery)}`);

      if (!response.ok) {
        throw new Error('Search failed');
      }

      const data = await response.json();
      return data.slice(0, 10); // Return top 10 results
    } catch (error) {
      console.error('LRCLIB search error:', error);
      return [];
    }
  }

  // Get timestamped lyrics from LRCLIB
  async getTimestampedLyrics(trackName, artistName, albumName = '', duration = 0) {
    try {
      const params = new URLSearchParams({
        track_name: trackName,
        artist_name: artistName,
        album_name: albumName,
        duration: Math.floor(duration)
      });

      const response = await fetch(`${this.lrclibBase}/get?${params}`);

      if (!response.ok) {
        throw new Error('Lyrics not found');
      }

      const data = await response.json();

      if (data.syncedLyrics) {
        return this.parseLRCLyrics(data.syncedLyrics);
      } else if (data.plainLyrics) {
        // Fallback to plain lyrics with estimated timestamps
        return this.createEstimatedTimestamps(data.plainLyrics, duration);
      }

      return null;
    } catch (error) {
      console.error('LRCLIB lyrics error:', error);
      return null;
    }
  }

  // Parse LRCLIB timestamped lyrics format [mm:ss.xx]lyrics
  parseLRCLyrics(lyricsText) {
    const lines = lyricsText.split('\n');
    const parsedLyrics = [];

    lines.forEach(line => {
      const match = line.match(/\[(\d+):(\d+\.\d+)\](.*)/);
      if (match) {
        const minutes = parseInt(match[1]);
        const seconds = parseFloat(match[2]);
        const time = minutes * 60 + seconds;
        const text = match[3].trim();

        if (text) {
          parsedLyrics.push({ time, text });
        }
      }
    });

    return parsedLyrics.sort((a, b) => a.time - b.time);
  }

  // Create estimated timestamps for plain lyrics
  createEstimatedTimestamps(plainLyrics, duration) {
    const lines = plainLyrics.split('\n').filter(line => line.trim());
    const parsedLyrics = [];
    const timePerLine = duration / lines.length;

    lines.forEach((line, index) => {
      parsedLyrics.push({
        time: index * timePerLine,
        text: line.trim()
      });
    });

    return parsedLyrics;
  }

  // Try PoYo API as fallback
  async getPoyoLyrics(trackName, artistName) {
    try {
      const response = await fetch(`${this.poyoBase}/lyrics`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          track: trackName,
          artist: artistName
        })
      });

      if (!response.ok) {
        throw new Error('PoYo API failed');
      }

      const data = await response.json();

      if (data.lyrics && data.lyrics.length > 0) {
        return data.lyrics.map(line => ({
          time: line.time,
          text: line.text
        }));
      }

      return null;
    } catch (error) {
      console.error('PoYo API error:', error);
      return null;
    }
  }

  // Main function to get lyrics for a song
  async getLyrics(trackName, artistName, albumName = '', duration = 0) {
    // Try LRCLIB first
    let lyrics = await this.getTimestampedLyrics(trackName, artistName, albumName, duration);

    // If LRCLIB fails, try PoYo
    if (!lyrics) {
      lyrics = await this.getPoyoLyrics(trackName, artistName);
    }

    return lyrics;
  }

  // Search and get complete song data
  async searchAndGetSong(trackName, artistName) {
    const searchResults = await this.searchSongs(trackName, artistName);

    if (searchResults.length === 0) {
      return null;
    }

    // Get the best match (first result)
    const song = searchResults[0];
    const lyrics = await this.getLyrics(song.name, song.artistName, song.albumName, song.duration);

    if (!lyrics) {
      return null;
    }

    return {
      id: `${song.artistName}-${song.name}`.toLowerCase().replace(/\s+/g, '-'),
      title: song.name,
      artist: song.artistName,
      album: song.albumName,
      duration: song.duration,
      instrumental: this.generateInstrumentalUrl(song), // We'll create a placeholder
      lyrics: lyrics,
      source: 'api'
    };
  }

  // Generate a placeholder instrumental URL (in a real app, you'd have actual instrumentals)
  generateInstrumentalUrl(song) {
    // For demo purposes, return a placeholder
    // In production, you'd have a database of instrumental tracks
    return `https://www.soundjay.com/misc/sounds/bell-ringing-05.wav`;
  }
}

// Create global API instance
const karaokeAPI = new KaraokeAPI();

// For backward compatibility, keep some demo songs
const demoSongs = {
  "happy-birthday": {
    title: "Happy Birthday",
    artist: "Traditional",
    instrumental: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav",
    duration: 30,
    lyrics: [
      { time: 0, text: "Happy birthday to you," },
      { time: 5, text: "Happy birthday to you," },
      { time: 10, text: "Happy birthday dear [Name]," },
      { time: 15, text: "Happy birthday to you!" }
    ]
  }
};

export { karaokeAPI, demoSongs };