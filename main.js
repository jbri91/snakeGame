let canvas;
let canvasContext;
let appleX = Math.floor(Math.random() * (800 - 20) + 20);
let appleY = Math.floor(Math.random() * (500 - 20) + 20);
let appleRadius = 6;
let snake = [
  { x: 400, y: 300 },
  { x: 390, y: 300 },
  { x: 380, y: 300 },
  { x: 370, y: 300 },
  { x: 360, y: 300 },
];

let snakeLength = 10;
let snakeWidth = 10;
let snakeSpeed = 10;

const score = document.getElementById("score");
const highScore = document.getElementById("highScore");

window.onload = function () {
  canvas = document.getElementById("gameCanvas");
  canvasContext = canvas.getContext("2d");
  let framesPerSecond = 30;
  setInterval(function () {
    drawEverything();
  }, 1000 / framesPerSecond);
};

function addSnakeBody() {
  if (
    snake[0].x < appleX &&
    snake[0].x > appleX - 15 &&
    snake[0].y < appleY &&
    snake[0].y > appleY - 15
  ) {
    snake.push(10);
  }
}

function drawEverything() {
  canvasContext.fillStyle = "black";
  canvasContext.fillRect(0, 0, canvas.width, canvas.height);
  moveSnake();
  drawSnake();
  eatApple();
  drawApple();
  addSnakeBody();
  appleReset();
  collision();
}

function collision() {
  if (
    snake[0].x == canvas.width ||
    snake[0].x < 0 ||
    snake[0].y == canvas.height ||
    snake[0].y < 0
  ) {
    resetSnake();
  }
  for (i = 1; i < snake.length; i++) {
    if (snake[0].x == snake[i].x && snake[0].y == snake[i].y) {
    resetSnake();
    }
  }
}

let direction = 'right';
function moveSnake() {
  document.onkeydown = function () {
    switch (window.event.keyCode) {
      case 37:
        snakeHead = { x: snake[0].x - snakeSpeed, y: snake[0].y };
        snake.unshift(snakeHead);
        snake.pop();
        break;
      case 38:
        direction = 'up';
        snakeHead = { x: snake[0].x, y: snake[0].y - snakeSpeed };
        snake.unshift(snakeHead);
        snake.pop();
        break;
      case 39:
        direction = 'right'; 
        snakeHead = { x: snake[0].x + snakeSpeed, y: snake[0].y };
        snake.unshift(snakeHead);
        snake.pop();
        break;
      case 40:
        direction = 'down';
        snakeHead = {x: snake[0].x, y: snake[0].y + snakeSpeed};
        snake.unshift(snakeHead);
        snake.pop();
        break;
    } 
  };
}


function drawSnake() {
  for (let i = 0; i < snake.length; i++) {
    const snakePart = snake[i];
    canvasContext.fillStyle = "green";
    canvasContext.fillRect(snakePart.x, snakePart.y, snakeLength, snakeWidth);
  }
}

function resetSnake() {
  alert("You Crashed! YOU LOSE!");
  points = 0;
  snake = [
    { x: 400, y: 300 },
    { x: 390, y: 300 },
    { x: 380, y: 300 },
    { x: 370, y: 300 },
    { x: 360, y: 300 },
  ];
  drawSnake();
  appleX = Math.floor(Math.random() * (800 - 20) + 20);
  appleY = Math.floor(Math.random() * (500 - 20) + 20);
  score.innerText = "Score: " + points;
}

function drawApple() {
  canvasContext.fillStyle = "red";
  canvasContext.beginPath();
  canvasContext.arc(appleX, appleY, appleRadius, 0, Math.PI * 2, true);
  canvasContext.fill();
}

function appleReset() {
  if (
    snake[0].x < appleX &&
    snake[0].x > appleX - 15 &&
    snake[0].y < appleY &&
    snake[0].y > appleY - 15
  ) {
    appleX = Math.floor(Math.random() * (800 - 20) + 20);
    appleY = Math.floor(Math.random() * (500 - 20) + 20);
  }
}

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
    if(points > highPoints) {
    highPoints++;
    }
    score.innerText = "Score: " + points;
    highScore.innerText = "High Score: " + highPoints;
    saveHighScore();
  }
}

function saveHighScore() {
  localStorage.setItem('HighScore',highPoints);
}

function retrieveHighScore() {
 return localStorage.getItem('HighScore')
}


highPoints = localStorage.getItem('HighScore')
if (highPoints == null) {
  highPoints = 0;
}
highScore.innerText = 'High Score: ' + highPoints;

