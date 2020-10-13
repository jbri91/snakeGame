let canvas;
let canvasContext;
let randomCordinatesX = Math.floor(Math.random() * (550 - 10) + 10);
let randomCordinatesY = Math.floor(Math.random() * (250 - 10) + 10);
let appleX = randomCordinatesX;
let appleY = randomCordinatesY;
let appleRadius = 10;
let snakeX = 400;
let snakeY = 300;
let showingLoseScreen = false;
let rightPressed = false;
let leftPressed = false;
let upperPressed = false;
let lowerPressed = false;
let snake = {
  body: [
    { x: 400, y: 300},
    { x: 380, y: 300},
    { x: 360, y: 300},
  ],
  length: 20,
  width: 20,
  speed: 10
}
const score = document.getElementById("score");
const highScore = document.getElementById("highScore");

document.addEventListener("keydown", keyDownHandler, false);

function keyDownHandler(e) {
  if (e.key == "Right" || e.key == "ArrowRight") {
    rightPressed = true;
    leftPressed = false;
    lowerPressed = false;
    upperPressed = false;
  } else if (e.key == "Left" || e.key == "ArrowLeft") {
    leftPressed = true;
    rightPressed = false;
    lowerPressed = false;
    upperPressed = false;
  }
  if (e.key == "Up" || e.key == "ArrowUp") {
    upperPressed = true;
    lowerPressed = false;
    leftPressed = false;
    rightPressed = false;
  } else if (e.key == "Down" || e.key == "ArrowDown") {
    lowerPressed = true;
    upperPressed = false;
    leftPressed = false;
    rightPressed = false;
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
    snakeX += snake.speed;
  } else if (leftPressed) {
      snakeX -= snake.speed;
  }

  if (upperPressed) {
    snakeY -= snake.speed;
  } else if (lowerPressed) {
    snakeY += snake.speed;
    
  }

  if (
    snakeX == canvas.width - snake.width / 2 ||
    snakeX < 0 ||
    snakeY == canvas.height - snake.length / 2 ||
    snakeY < 0
  ) {
    alert("You hit the wall. YOU LOSE!");
  }
}

function moveApple() {}


function drawSnake() {
  canvasContext.fillStyle = "white";
  canvasContext.fillRect(snake.body[0].x, snake.body[0].y, snake.length, snake.width);
  canvasContext.fillStyle = "green";
  canvasContext.fillRect(380, 300, snake.length, snake.width);
  canvasContext.fillStyle = "blue";
  canvasContext.fillRect(360, 300, snake.length, snake.width);
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
