// Karaoke-enabled app.js for lyrics.html page
import { loadNavBar } from './navbar-loader.js';

document.addEventListener('DOMContentLoaded', async function() {
    // Load the navbar
    await loadNavBar();

    // Since we're using the full karaoke engine, we just need to ensure the page is ready
    // The karaoke engine is loaded via script tag in the HTML and handles everything

    // Add any page-specific initialization if needed
    console.log('Interactive Karaoke Page Loaded');

    // Check if we're on the legacy lyrics page
    const lyricsForm = document.getElementById('lyricsForm');
    if (lyricsForm) {
        // If the old form still exists somehow, hide it since we're using the new interface
        lyricsForm.closest('.bg-white').style.display = 'none';
    }

    // Initialize any interactive elements that might be needed
    const searchBtn = document.getElementById('searchBtn');
    if (searchBtn) {
        // Add keyboard support for search
        const songInput = document.getElementById('songSearch');
        const artistInput = document.getElementById('artistSearch');

        [songInput, artistInput].forEach(input => {
            if (input) {
                input.addEventListener('keypress', (e) => {
                    if (e.key === 'Enter') {
                        searchBtn.click();
                    }
                });
            }
        });
    }
});