const sqaures = document.querySelectorAll(".square");
const mole = document.querySelector(".mole");

const timeLeft = document.querySelector("#time-left");
const score = document.querySelector("#score");

let result = 0;
let hitPosition;
let currentTime = 60;

function randomSquare() {
  sqaures.forEach((sqaure) => {
    sqaure.classList.remove("mole");
  });

  let randomSquare = sqaures[Math.floor(Math.random() * 9)];
  randomSquare.classList.add("mole");
  hitPosition = randomSquare.id;
}

sqaures.forEach((sqaure) => {
  sqaure.addEventListener("mousedown", () => {
    if (sqaure.id == hitPosition) {
      result++;
      score.textContent = result;
      hitPosition = null;
    }
  });
});

function moveMole() {
  let timerId = null;
  timerId = setInterval(randomSquare, 500);
}

moveMole();

function countDown() {
  currentTime--;
  timeLeft.textContent = currentTime;

  if (currentTime == 0) {
    clearInterval(countDownTimerId);
    alert(gameover);
  }
}

let countDownTimerId = setInterval(countDown, 500);
