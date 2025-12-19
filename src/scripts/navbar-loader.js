function chargerPage(url, conteneurId) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            document.getElementById(conteneurId).innerHTML = xhr.responseText;
        }
    };
    xhr.open('GET', url, true);
    xhr.send();
}

export function loadNavBar() {
    chargerPage('./src/pages/navbar.html', 'navBar');
}
