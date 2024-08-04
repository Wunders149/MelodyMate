document.getElementById('lyricsForm').addEventListener('submit', function(e) {
    e.preventDefault();

    let artist = document.getElementById('artist').value.trim();
    let title = document.getElementById('title').value.trim();

    if (artist === '' || title === '') {
        alert('Please fill the field!');
        return;
    }

    fetch(`https://api.lyrics.ovh/v1/${artist}/${title}`)
        .then(response => response.json())
        .then(data => {
            if (data.lyrics) {
                document.getElementById('lyrics').innerText = data.lyrics;
            } else {
                document.getElementById('lyrics').innerText = 'Lyrics not found';
            }
        })
        .catch(error => {
            document.getElementById('lyrics').innerText = 'An Error occured! Please try again later';
            console.error('Erreur:', error);
        });
});