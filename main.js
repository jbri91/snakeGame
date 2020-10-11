let canvas;
let canvasContext;
let appleX = 50;
let appleY;
let snakeX = 50;
let snakeY;

window.onload = function () {
  canvas = document.getElementById("gameCanvas");
  canvasContext = canvas.getContext("2d");
  let framesPerSecond = 30;
  setInterval(drawEverything, 1000/framesPerSecond);
};

function drawEverything() {
  canvasContext.fillStyle = "black";
  canvasContext.fillRect(0, 0, canvas.clientWidth, canvas.height);
  drawSnake();
  drawApple();
}

function drawSnake() {
  snakeX = snakeX + 10;
  canvasContext.fillStyle = "green";
  canvasContext.fillRect(snakeX, 300, 200, 20);
}

function drawApple() {
  appleX = appleX + 10;
  canvasContext.fillStyle = "red";
  canvasContext.fillRect(appleX, 350, 10, 10);
}
