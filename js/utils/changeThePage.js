const calcBlock = document.querySelector("#CalcBlock");
const timerBlock = document.querySelector("#TimerBlock");

const showCalc = document.querySelector("#ShowCalc");
const showTimer = document.querySelector("#ShowTimer");

showCalc.onclick = OnCalcClick;
showTimer.onclick = OnTimerClick;

function OnCalcClick() {
  calcBlock.style.display = "block";
  timerBlock.style.display = "none";
  if (calcBlock.style.display == "block") {
    showCalc.style.background = "#FF8500";
    showTimer.style.background = "#babcf6";
  }
}

function OnTimerClick() {
  calcBlock.style.display = "none";
  timerBlock.style.display = "block";
  if (timerBlock.style.display == "block") {
    showTimer.style.background = "#FF8500";
    showCalc.style.background = "#babcf6";
  }
}

calcBlock.style.display = "none";
timerBlock.style.display = "none";
