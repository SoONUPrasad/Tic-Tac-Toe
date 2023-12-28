const box = document.querySelectorAll('.box');
const resetBtn = document.querySelector('.reset');
const startBtn = document.querySelector('.start');
const winner = document.querySelector('.winner-container');
const winMsg = document.querySelector('.winner-msg');

let turn0 = true;
let disabled = false;

if (turn0) {
    disableAll();
}

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
]

function disableAll() {
    for (let boxes of box) {
        boxes.disabled = true;
    }
}

function enableAll() {
    for (let boxes of box) {
        boxes.disabled = false;
    }
}

function showWinner() {
    winner.classList.add('');
}

box.forEach((box) => {
    box.addEventListener('click', () => {
        if (turn0) {
            box.innerHTML = 'X';
            turn0 = false;
        } else {
            box.innerHTML = 'O';
            turn0 = true;
        }
        box.disabled = true;
        checkWinner();
    })
})

function checkWinner() {
    for (let pattern of winPatterns) {
        let [a, b, c] = pattern;
        if (box[a].innerHTML === box[b].innerHTML && box[b].innerHTML === box[c].innerHTML && box[a].innerHTML !== '') {
            winMsg.innerHTML = `Player ${box[a].innerHTML} is the winner`
            // console.log(`Player ${box[a].innerHTML} is the winner`);
            disableAll();
        }
    }
}

startBtn.addEventListener('click', () => {
    box.forEach((box) => {
        box.innerHTML = '';
        winMsg.innerHTML = '';
        enableAll();
    })
})

resetBtn.addEventListener('click', () => {
    box.forEach((box) => {
        box.innerHTML = '';
        winMsg.innerHTML = 'Press Start Button to Play';
        disableAll();
    })
    turn0 = true;
})

function timer(){
    let time = new Date().getTime();
    let hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((time % (1000 * 60)) / 1000);
    let timer = setInterval(() => {
        // time += 1;
        document.getElementById('time').innerHTML = `${hours}:${minutes}:${seconds}`;
    }, 1000)
}
