var nav = document.querySelector('.left-container');
var btn = document.querySelector('.button');
var icon = document.querySelector('.button .material-symbols-outlined');

function toggleNav() {
    nav.classList.toggle('hide-nav');
}

if(btn && nav) {
    btn.addEventListener('click', toggleNav);
}
if(icon && nav) {
    icon.addEventListener('click', toggleNav);
}console.log("JS loaded");
