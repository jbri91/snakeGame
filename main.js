let canvas;
let canvasContext;
let randomCordinates = Math.floor((Math.random()*(500-0)) + 0);
let appleX = randomCordinates;
let appleY = randomCordinates;
let snakeX = 50;
let snakeY;
let snakeSpeed = 5;

window.onload = function () {
  canvas = document.getElementById("gameCanvas");
  canvasContext = canvas.getContext("2d");
  let framesPerSecond = 30;
  setInterval(function () {
    moveSnake();
    moveApple();
    drawEverything();
  }, 1000 / framesPerSecond);
};

function drawEverything() {
  canvasContext.fillStyle = "black";
  canvasContext.fillRect(0, 0, canvas.width, canvas.height);
  drawSnake();
  drawApple();
}

function moveSnake() {
  snakeX = snakeX + snakeSpeed;
  if (snakeX > canvas.width - 200) {
    snakeSpeed = -snakeSpeed;
  } else if (snakeX < 0) {
    snakeSpeed = 5;
  }
}

function moveApple() {
    
}

function drawSnake() {
  canvasContext.fillStyle = "green";
  canvasContext.fillRect(snakeX, 300, 200, 20);
}

function drawApple() {
  canvasContext.fillStyle = "red";
  canvasContext.beginPath();
  canvasContext.arc(appleX, appleY, 10, 0, Math.PI*2, true);
  canvasContext.fill();

}
