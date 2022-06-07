

const hides = document.querySelectorAll(".hidden");
const scoreLand = document.querySelector(".score");
const obitoUchiha = document.querySelectorAll(".obito");
let lastHides;
let timeUp = false;
let score = 0;

function randomTime(min, max) {
    return Math.round(Math.random() * (max-min) + min);
}

function randomHides(hides) {
    const idx = Math.floor(Math.random() * hides.length);
    const hide = hides[idx];
    if (hides === lastHides) {
        return randomHides(hides);
    }
    lastHides = hide;
    return hide;
}

function proof() {
    const time = randomTime(200, 1000);
    const hide = randomHides(hides);
    hide.classList.add("up");
    setTimeout(() => {
        hide.classList.remove("up");
        if (!timeUp) proof();
    }, time);
}

function startGame() {
    scoreLand.textContent = 0;
    timeUp = false;
    score = 0;
    proof();
    setTimeout(() => (timeUp = true), 10000);
    
}

function bonk(n) {
    if(!n.isTrusted) return;
    score++;
    this.parentNode.classList.remove("up");
    scoreLand.textContent = score;
}

obitoUchiha.forEach((obito) => obito.addEventListener("click", bonk));