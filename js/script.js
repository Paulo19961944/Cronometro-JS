const minutesEl = document.querySelector("#minutes");
const secondsEl = document.querySelector("#seconds");
const milisecondsEl = document.querySelector("#miliseconds");
const startBtn = document.querySelector("#startBtn");
const pauseBtn = document.querySelector("#pauseBtn");
const resumeBtn = document.querySelector("#resumeBtn");
const resetBtn = document.querySelector("#resetBtn");

let interval;
let minutes = 0;
let seconds = 0;
let miliseconds = 0;
let isPaused = true; // Alterado para iniciar pausado
let isFirstClick = true; // Variável para controlar o primeiro clique

startBtn.addEventListener("click", startTimer);
pauseBtn.addEventListener("click", pauseTimer);
resumeBtn.addEventListener("click", resumeTimer);
resetBtn.addEventListener("click", resetTimer);

function startTimer() {
  if (isFirstClick || resetTimer() === true) { // Verifica se é o primeiro clique ou se está pausado
    interval = setInterval(() => {
      if (!isPaused) {
        miliseconds += 10;
      }

      if (miliseconds === 1000) {
        seconds++;
        miliseconds = 0;
      }

      if (seconds === 60) {
        minutes++;
        seconds = 0;
      }

      minutesEl.textContent = formatTime(minutes);
      secondsEl.textContent = formatTime(seconds);
      milisecondsEl.textContent = formatMiliseconds(miliseconds);

    }, 10);

    isFirstClick = false; // Marca que o primeiro clique já ocorreu
    isPaused = false; // Inicia o cronômetro
  }
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

function formatMiliseconds(time) {
  return time < 100 ? `${time}`.padStart(3, "0") : time;
}

function pauseTimer() {
  isPaused = true;
}

function resumeTimer() {
  isPaused = false;
}

function resetTimer() {
  clearInterval(interval);
  minutes = 0;
  seconds = 0;
  miliseconds = 0;
  isFirstClick = true; // Reseta a variável isFirstClick para permitir o próximo clique no startBtn

  minutesEl.textContent = "00";
  secondsEl.textContent = "00";
  milisecondsEl.textContent = "000";
}
