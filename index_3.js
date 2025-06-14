function fadeTo(event, url) {
  event.preventDefault();
  document.body.classList.remove("loaded");
  setTimeout(() => {
    window.location.href = url;
  }, 150);
}

window.addEventListener("DOMContentLoaded", () => {
  requestAnimationFrame(() => {
    document.body.classList.add("loaded");
  });
});

let totalSeconds = 0;
let countdownInterval = null;

const display = document.getElementById("display");
const input = document.getElementById("inputSeconds");
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const resetBtn = document.getElementById("resetBtn");

function formatTime(seconds) {
  const hrs = Math.floor(seconds / 3600).toString().padStart(2, '0');
  const mins = Math.floor((seconds % 3600) / 60).toString().padStart(2, '0');
  const secs = (seconds % 60).toString().padStart(2, '0');
  return `${hrs}:${mins}:${secs}`;
}

function updateDisplay() {
  display.textContent = formatTime(totalSeconds);
}

function start() {
  if (countdownInterval) return;

  if (totalSeconds === 0) {
    totalSeconds = parseInt(input.value, 10);
    if (isNaN(totalSeconds) || totalSeconds <= 0) {
      alert("Please enter a valid number of seconds.");
      return;
    }
  }

  updateDisplay();

  countdownInterval = setInterval(() => {
    if (totalSeconds <= 0) {
      clearInterval(countdownInterval);
      countdownInterval = null;
      display.textContent = "Time's up!";
      return;
    }
    totalSeconds--;
    updateDisplay();
  }, 1000);
}

function stop() {
  clearInterval(countdownInterval);
  countdownInterval = null;
}

function reset(){
  stop();
  totalSeconds = 0;
  display.textContent = "00:00:00";
  input.value = "";
}

document.addEventListener("DOMContentLoaded", () => {
  requestAnimationFrame(() => {
    document.body.classList.add("loaded");
  });

  startBtn.addEventListener("click", startCountdown);
  stopBtn.addEventListener("click", stopCountdown);
  resetBtn.addEventListener("click", resetCountdown);
});
