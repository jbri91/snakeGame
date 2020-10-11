let canvas;
let canvasContext;
let appleX = 50;
let appleY;

window.onload = function () {
  canvas = document.getElementById("gameCanvas");
  canvasContext = canvas.getContext("2d");
  drawEverything();
};

function drawEverything() {
  canvasContext.fillStyle = "black";
  canvasContext.fillRect(0, 0, canvas.clientWidth, canvas.height);
  drawSnake();
  drawApple();
}

function drawSnake() {
  canvasContext.fillStyle = "green";
  canvasContext.fillRect(200, 300, 200, 20);
}

function drawApple() {
  canvasContext.fillStyle = "red";
  canvasContext.fillRect(appleX, 350, 10, 10);
}
