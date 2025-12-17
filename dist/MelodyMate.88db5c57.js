function chargerPage(url, conteneurId) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) document.getElementById(conteneurId).innerHTML = xhr.responseText;
    };
    xhr.send();
}
document.addEventListener('DOMContentLoaded', function() {
    chargerPage('./src/pages/navbar.html', 'navBar');
});

//# sourceMappingURL=MelodyMate.88db5c57.js.map
