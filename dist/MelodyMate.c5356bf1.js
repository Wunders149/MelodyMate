function chargerPage(e,n){var t=new XMLHttpRequest;t.open("GET",e,!0),t.onreadystatechange=function(){4==t.readyState&&200==t.status&&(document.getElementById(n).innerHTML=t.responseText)},t.send()}document.addEventListener("DOMContentLoaded",function(){chargerPage("./src/pages/navbar.html","navBar")});
//# sourceMappingURL=MelodyMate.c5356bf1.js.map
