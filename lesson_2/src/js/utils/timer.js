import "../libs/howler.js";

let seconds = 0;
let minutes = 0;
let hours = 0;

let interval;
let myCallback;
let soundActive = false;

function startTimer(callback, initSecond, initMinute, initHour) {
  seconds = initSecond;
  minutes = initMinute;
  hours = initHour;
  myCallback = callback;
  interval = setInterval(() => {
    seconds--;

    if (!soundActive && seconds <= 10 && hours == 0 && minutes == 0) {
      var sound = new Howl({
        src: ["timer.mp3"],
      });
      sound.play();
      soundActive = true;
    }

    //
    if (seconds < 0) {
      seconds = 59;
      if (hours > 0) {
        if (minutes > 0) {
          minutes--;
        } else {
          minutes = 59;
          hours--;
        }
      } else {
        minutes--;
      }
    }

    if (seconds == 0 && minutes == 0 && hours == 0) {
      resetTimer();
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
  soundActive = false;
  myCallback(seconds, minutes, hours);
  stopTimer();
}

export { startTimer, stopTimer, resetTimer };
