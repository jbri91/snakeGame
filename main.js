let canvas;
let canvasContext;
let randomCordinatesX = Math.floor(Math.random() * (550 - 10) + 10);
let randomCordinatesY = Math.floor(Math.random() * (250 - 10) + 10);
let appleX = randomCordinatesX;
let appleY = randomCordinatesY;
let appleRadius = 10;
let snakeX = 400;
let snakeY = 300;
let snakeLength = 20;
let snakeWidth = 20;
let snakeSpeed = 5;
let showingLoseScreen = false;
let rightPressed = false;
let leftPressed = false;
let upperPressed = false;
let lowerPressed = false;
score = document.getElementById("score");
highScore = document.getElementById("highScore");

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
  if (e.key == "Right" || e.key == "ArrowRight") {
    rightPressed = true;
  } else if (e.key == "Left" || e.key == "ArrowLeft") {
    leftPressed = true;
  }

  if (e.key == "Up" || e.key == "ArrowUp") {
    upperPressed = true;
  } else if (e.key == "Down" || e.key == "ArrowDown") {
    lowerPressed = true;
  }
}

function keyUpHandler(e) {
  if (e.key == "Right" || e.key == "ArrowRight") {
    rightPressed = false;
  } else if (e.key == "Left" || e.key == "ArrowLeft") {
    leftPressed = false;
  }
  if (e.key == "Up" || e.key == "ArrowUp") {
    upperPressed = false;
  } else if (e.key == "Down" || e.key == "ArrowDown") {
    lowerPressed = false;
  }
}

window.onload = function () {
  canvas = document.getElementById("gameCanvas");
  canvasContext = canvas.getContext("2d");
  let framesPerSecond = 30;
  setInterval(function () {
    drawEverything();
  }, 1000 / framesPerSecond);
};

function drawEverything() {
  canvasContext.fillStyle = "black";
  canvasContext.fillRect(0, 0, canvas.width, canvas.height);
  moveSnake();
  moveApple();
  drawSnake();
  drawApple();
  eatApple();
}

function moveSnake() {
  if (rightPressed) {
    snakeX += 10;
  } else if (leftPressed) {
    snakeX -= 10;
  }

  if (upperPressed) {
    snakeY -= 10;
  } else if (lowerPressed) {
    snakeY += 10;
  }

  if (
    snakeX == canvas.width - snakeWidth / 2 ||
    snakeX < 0 ||
    snakeY == canvas.height - snakeLength / 2 ||
    snakeY < 0
  ) {
    alert("You hit the wall. YOU LOSE!");
  }
}

function moveApple() {}

let snakeBody = [
  { x: 400, y: 300 },
  { x: 380, y: 300 },
  { x: 360, y: 300 },
];

function drawSnake() {
  canvasContext.fillStyle = "white";
  canvasContext.fillRect(snakeX, snakeY, snakeLength, snakeWidth);
  canvasContext.fillStyle = "green";
  canvasContext.fillRect(380, 300, snakeLength, snakeWidth);
  canvasContext.fillStyle = "blue";
  canvasContext.fillRect(360, 300, snakeLength, snakeWidth);
}

function drawApple() {
  canvasContext.fillStyle = "red";
  canvasContext.beginPath();
  canvasContext.arc(appleX, appleY, appleRadius, 0, Math.PI * 2, true);
  canvasContext.fill();
}

function appleReset() {}

let points = 0;
let highPoints = 0;
function eatApple() {
  if (
    snakeX < appleX &&
    snakeX > appleX - 15 &&
    snakeY < appleY &&
    snakeY > appleY - 15
  ) {
    console.log("The snake ate the apple");
    points++;
    highPoints++;
    score.innerText = "Score: " + points;
    highScore.innerText = "High Score: " + highPoints;
  }
}

console.log(appleX, appleY);
console.log(snakeX, snakeY);
