import { startTimer, stopTimer, resetTimer } from "../utils/timer.js";

const showCalc = document.querySelector("#ShowCalc");
const showTimer = document.querySelector("#ShowTimer");
const calcBlock = document.querySelector("#CalcBlock");
const timerBlock = document.querySelector("#TimerBlock");

const hoursInput = document.querySelector("#hours");
const minutesInput = document.querySelector("#minutes");
const secondsInput = document.querySelector("#seconds");
const startBtn = document.querySelector("#startBtn");
const stopBtn = document.querySelector("#stopBtn");
const deleteBtn = document.querySelector("#deleteBtn");

/////

let secondsValue = 0;
let minutesValue = 0;
let hoursValue = 0;

secondsInput.addEventListener("input", (event) => {
  const value = Number(event.target.value);
  if (value > 60) {
    event.target.value = 60;
  } else if (value < 0) {
    event.target.value = 0;
  }
  secondsValue = value;
});

minutesInput.addEventListener("input", (event) => {
  const value = Number(event.target.value);
  if (value > 60) {
    event.target.value = 60;
  } else if (value < 0) {
    event.target.value = 0;
  }
  minutesValue = value;
});

hoursInput.addEventListener("input", (event) => {
  const value = Number(event.target.value);
  if (value < 0) {
    event.target.value = 0;
  }
  hoursValue = value;
});

/////

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
  if (secondsValue > 0 || minutesValue > 0 || hoursValue > 0) {
    startTimer(timerCallback, secondsValue, minutesValue, hoursValue);
    secondsValue = 0;
    minutesValue = 0;
    hoursValue = 0;
  } else {
    alert("Введите таймер");
  }
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

  seconds.value = format(s);
  minutes.value = format(m);
  hours.value = format(h);
}

seconds.value = "00";
minutes.value = "00";
hours.value = "00";
