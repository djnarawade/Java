let timer;
let secondsLeft = 25 * 60;  // Default Pomodoro time in seconds (25 minutes)
let isRunning = false;

const timerDisplay = document.getElementById("timer-display");
const startButton = document.getElementById("start-btn");
const resetButton = document.getElementById("reset-btn");
const customizeButton = document.getElementById("set-custom");
const customTimeInput = document.getElementById("custom-time");

function startTimer() {
    if (isRunning) return;
    isRunning = true;

    timer = setInterval(() => {
        secondsLeft--;
        updateDisplay();

        if (secondsLeft <= 0) {
            clearInterval(timer);
            isRunning = false;
            alert("Time's up! Take a break.");
        }
    }, 1000);
}

function resetTimer() {
    clearInterval(timer);
    isRunning = false;
    secondsLeft = 25 * 60;  // Reset to 25 minutes
    updateDisplay();
}

function updateDisplay() {
    const minutes = Math.floor(secondsLeft / 60);
    const seconds = secondsLeft % 60;
    timerDisplay.textContent = `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

function setCustomTime() {
    const customTime = parseInt(customTimeInput.value, 10);
    if (isNaN(customTime) || customTime <= 0) return;
    secondsLeft = customTime * 60;
    updateDisplay();
}

startButton.addEventListener("click", startTimer);
resetButton.addEventListener("click", resetTimer);
customizeButton.addEventListener("click", setCustomTime);

updateDisplay();  // Initialize the display
