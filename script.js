// Identify and select DOM elements

const startButton = document.getElementById("start-button");
const gameButtons = document.querySelectorAll(".game-button");
let best = document.getElementById("best");
let last = document.getElementById("last");

// Functions

function startGame() {
    
}

function handleClick(event) {
    
}


// Add event listeners

startButton.addEventListener("click", startGame);
gameButtons.forEach(button => {
    button.addEventListener("click", handleClick);
});