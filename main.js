let canvas;
let canvasContext;
let randomCordinatesX = Math.floor(Math.random() * (550 - 10) + 10);
let randomCordinatesY = Math.floor(Math.random() * (250 - 10) + 10);
let appleX = randomCordinatesX;
let appleY = randomCordinatesY;
let snakeX = 50;
let snakeY = 50;
let snakeLength = 20;
let snakeSpeed = 5;
let showingWinScreen = true;
let rightPressed = false;
let leftPressed = false;
let upperPressed = false;
let lowerPressed = false;

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
    moveApple();
    drawEverything();
  }, 1000 / framesPerSecond);
};

function drawEverything() {
  canvasContext.fillStyle = "black";
  canvasContext.fillRect(0, 0, canvas.width, canvas.height);
  drawSnake();
  drawApple();
  moveSnake();
}

function moveSnake() {
  if (rightPressed) {
    snakeX += 10;
    console.log(snakeX);
  } else if (leftPressed) {
    snakeX -= 10;
    console.log(snakeX);
  }

  if (upperPressed) {
    snakeY -= 10;
    console.log(snakeY);
  } else if (lowerPressed) {
    snakeY += 10;
    console.log(snakeY);
  }
}

function moveApple() {}

function drawSnake() {
  canvasContext.fillStyle = "green";
  canvasContext.fillRect(snakeX, snakeY, snakeLength, 20);
}

function drawApple() {
  canvasContext.fillStyle = "red";
  canvasContext.beginPath();
  canvasContext.arc(appleX, appleY, 10, 0, Math.PI * 2, true);
  canvasContext.fill();
}

function appleReset() {}
