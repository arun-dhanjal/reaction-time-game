// Identify and select DOM elements

const startButton = document.getElementById("start-button");
const gameButtons = document.querySelectorAll(".game-button");
let best = document.getElementById("best");
let last = document.getElementById("last");

// State variables

let activeButton = null;
let startTime = 0;
let waiting = false;
let bestTime = null;

// Functions

function startGame() {
    // Reset all buttons to red when starting the game again
    gameButtons.forEach(button => {
        button.style.backgroundColor = "red";
    });

    waiting = true;

    // Random delay between 1000ms and 5000ms
    const delay = Math.floor(Math.random() * 4000) + 1000;

    setTimeout(() => {

        // Pick random button
        const randomIndex = Math.floor(Math.random() * gameButtons.length);

        activeButton = gameButtons[randomIndex];

        // Turn chosen button green
        activeButton.style.backgroundColor = "green";

        // Start timer
        startTime = Date.now();

    }, delay);
}

function handleClick(event) {
    // Ignore clicks if game hasn't started
    if (!activeButton) return;

    // Check if correct button clicked
    if (event.target === activeButton) {

        const reactionTime = Date.now() - startTime;

        // Update last score
        last.textContent = `${reactionTime} ms`;

        // Update best score
        if (bestTime === null || reactionTime < bestTime) {
            bestTime = reactionTime;
            best.textContent = `${bestTime} ms`;
        }

        // Reset button
        activeButton.style.backgroundColor = "red";

        activeButton = null;
        waiting = false;

    } else {

        alert("Wrong button!");
    }
}


// Add event listeners

startButton.addEventListener("click", startGame);
gameButtons.forEach(button => {
    button.addEventListener("click", handleClick);
});