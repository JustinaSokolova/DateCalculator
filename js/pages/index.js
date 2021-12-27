import { startTimer, stopTimer, resetTimer } from "../utils/timer.js";

const showCalc = document.querySelector("#ShowCalc");
const showTimer = document.querySelector("#ShowTimer");
const calcBlock = document.querySelector("#CalcBlock");
const timerBlock = document.querySelector("#TimerBlock");

const hours = document.querySelector("#hours");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");
const startBtn = document.querySelector("#startBtn");
const stopBtn = document.querySelector("#stopBtn");
const deleteBtn = document.querySelector("#deleteBtn");

showCalc.onclick = OnCalcClick;
showTimer.onclick = OnTimerClick;

function OnCalcClick() {
  calcBlock.style.display = "block";
  timerBlock.style.display = "none";
}

function OnTimerClick() {
  calcBlock.style.display = "none";
  timerBlock.style.display = "block";
}

calcBlock.style.display = "none";
timerBlock.style.display = "none";

startBtn.onclick = () => {
  startTimer(timerCallback);
};

stopBtn.onclick = () => {
  stopTimer();
};

deleteBtn.onclick = () => {
  resetTimer();
};

function timerCallback(s, m, h) {
  function format(number) {
    if (number < 10) {
      return "0" + number;
    } else {
      return number;
    }
  }

  seconds.innerHTML = format(s);
  minutes.innerHTML = format(m);
  hours.innerHTML = format(h);
}
