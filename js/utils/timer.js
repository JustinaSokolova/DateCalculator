let seconds = 0;
let minutes = 0;
let hours = 0;

let interval;
let myCallback;

function startTimer(callback) {
  myCallback = callback;
  interval = setInterval(() => {
    seconds++;
    if (seconds == 60) {
      minutes++;
      seconds = 0;
    }
    if (minutes == 60) {
      hours++;
      minutes = 0;
    }
    myCallback(seconds, minutes, hours);
  }, 1000);
}

function stopTimer() {
  clearInterval(interval);
}

function resetTimer() {
  seconds = 0;
  minutes = 0;
  hours = 0;
  myCallback(seconds, minutes, hours);
  stopTimer();
}

export { startTimer, stopTimer, resetTimer };
