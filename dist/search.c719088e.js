// Legacy app.js - functionality moved to search-enhancements.js
// This file is kept for backward compatibility with lyrics.html page
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('lyricsForm');
    if (!form) return; // Exit if form doesn't exist on this page
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        let artist = document.getElementById('artist').value.trim();
        let title = document.getElementById('title').value.trim();
        if (artist === '' || title === '') {
            alert('Please fill the field!');
            return;
        }
        fetch(`https://api.lyrics.ovh/v1/${artist}/${title}`).then((response)=>response.json()).then((data)=>{
            if (data.lyrics) document.getElementById('lyrics').innerText = data.lyrics;
            else document.getElementById('lyrics').innerText = 'Lyrics not found';
        }).catch((error)=>{
            document.getElementById('lyrics').innerText = 'An Error occured! Please try again later';
            console.error('Erreur:', error);
        });
    });
});

//# sourceMappingURL=search.c719088e.js.map
