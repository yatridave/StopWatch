let time = 0;
let interval;
let isRunning = false;

let timeDisplay = document.getElementById("timeDisplay");
let startBtn = document.getElementById("startBtn");
let stopBtn = document.getElementById("stopBtn");
let resetBtn = document.getElementById("resetBtn");

function updateTime() {
    debugger
    time += 0.01;
    timeDisplay.textContent = time.toFixed(2);
}

function startStopwatch() {
    debugger;

    if (!isRunning) {
        interval = setInterval(updateTime, 10); // Start the stopwatch
        isRunning = true;
    }
    
}

function stopStopwatch() {
    debugger;
    clearInterval(interval); // Stop the stopwatch
    isRunning = false;
}

function resetStopwatch() {
    debugger;
    clearInterval(interval); // Stop and rest the stopwatch [start from zero again]
    isRunning = false;
    time = 0;
    timeDisplay.textContent = "0.00";
}

startBtn.addEventListener("click", startStopwatch);
stopBtn.addEventListener("click", stopStopwatch);
resetBtn.addEventListener("click", resetStopwatch);
