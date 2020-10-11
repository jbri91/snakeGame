let canvas;
let canvasContext;
let appleX = 50;
let appleY;
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
  canvasContext.fillRect(0, 0, canvas.clientWidth, canvas.height);
  drawSnake();
  drawApple();
}

function moveSnake() {
  snakeX = snakeX + snakeSpeed;
  if (snakeX > 600) {
    snakeSpeed = -5;
  } else if (snakeX < 0) {
    snakeSpeed = 5;
  }
}

function moveApple() {
    appleX = appleX + 5;
}

function drawSnake() {
  canvasContext.fillStyle = "green";
  canvasContext.fillRect(snakeX, 300, 200, 20);
}

function drawApple() {
  canvasContext.fillStyle = "red";
  canvasContext.fillRect(appleX, 350, 10, 10);
}
