let canvas;
let canvasContext;
let randomCordinatesX = Math.floor(Math.random() * (800 - 20) + 20);
let randomCordinatesY = Math.floor(Math.random() * (500 - 20) + 20);
let appleX = randomCordinatesX;
let appleY = randomCordinatesY;
let appleRadius = 10;
let showingLoseScreen = false;
let rightPressed = false;
let leftPressed = false;
let upperPressed = false;
let lowerPressed = false;
let snake = [
    { x: 400, y: 300},
    { x: 370, y: 300},
    { x: 340, y: 300},

  ];


  let snakeLength = 30;
  let snakeWidth = 20;
  let snakeSpeed = 10;

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
  drawSnake();
  drawApple();
  eatApple();
}

function moveSnake() {
  //   if (rightPressed) {
  //   snake[0].x += snakeSpeed;
  // } else if (leftPressed) {
  //   snake[0].x -= snakeSpeed;
  // }

  // if (upperPressed) {
  //   snake[0].y -= snakeSpeed;
  // } else if (lowerPressed) {
  //   snake[0].y += snakeSpeed;
    
  // }

  if (
    snake[0].x == canvas.width - snakeWidth / 2 ||
    snake[0].x < 0 ||
    snake[0].y == canvas.height - snakeWidth / 2 ||
    snake[0].y < 0
  ) {
    alert("You hit the wall. YOU LOSE!");
  }
}

console.log(snake[0].y)


function drawSnake() {

  for (let i = 0; i < snake.length; i++) {
  const snakePart = snake[i];
  canvasContext.fillStyle = 'green';
  canvasContext.fillRect(snakePart.x, snakePart.y, snakeLength, snakeWidth);
  
  if (rightPressed) {
    snake[i].x += snakeSpeed;
  } else if (leftPressed) {
    snake[i].x -= snakeSpeed;
  }
  if (upperPressed) {
    snake[i].y -= snakeSpeed;
    snake[0].y += 20;
  } else if (lowerPressed) {
    snake[i].y += snakeSpeed;
  }
}
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
    snake[0].x < appleX &&
    snake[0].x > appleX - 15 &&
    snake[0].y < appleY &&
    snake[0].y > appleY - 15
  ) {
    console.log("The snake ate the apple");
    points++;
    highPoints++;
    score.innerText = "Score: " + points;
    highScore.innerText = "High Score: " + highPoints;
      
  }
}

// console.log(snake[0].x)
// console.log(snake[0].y)
const snakePart = snake[0];
console.log(snakePart.x)