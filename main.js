const getBird = document.getElementById('container')
const score = document.getElementsByClassName('score')
let marks = 0;

function restart() {
    location.reload();
}

function reSetAnimations() {
    marks = 0
    score[0].textContent = marks;
    getBird.style.display="block"
    getBird.classList.remove('bird-container');
    void getBird.offsetWidth;
    getBird.classList.add('bird-container');
}

function easyMode() {
    reSetAnimations();
    getBird.style.animationDuration = "30s"
}

function mediumMode() {
    reSetAnimations();
    getBird.style.animationDuration = "14s"
}

function hardMode() {
    reSetAnimations();
    getBird.style.animationDuration = "12s"
}

function count() {
    marks++;
    score[0].textContent = marks;
}