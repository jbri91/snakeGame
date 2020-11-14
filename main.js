window.onload = () => setInterval(() => init(), 50);
let GRID_SIZE = 10;

const canvas = document.getElementById("gameCanvas");
const canvasContext = canvas.getContext("2d");

const score = document.getElementById("score");
const highScore = document.getElementById("highScore");

let apple = {
  x: Math.floor(Math.random() * (800/10) * 10),
  y: Math.floor(Math.random() * (600/10) * 10),
  radius: 6
}

let snake = {
  body: [
    { x: 400, y: 300 },
    { x: 390, y: 300 },
    { x: 380, y: 300 },
    { x: 370, y: 300 },
    { x: 360, y: 300 },
  ],
  direction: undefined
}

function init() {
  drawCanvas();
  moveSnake();
  drawSnake();
  eatApple();
  drawApple();
  addSnakeBody();
  appleReset();
  collision();
}
function drawCanvas() {
  canvasContext.fillStyle = "black";
  canvasContext.fillRect(0, 0, canvas.width, canvas.height);
}

function moveSnake() {
  if (snake.direction == "right") {
    snakeHead = { x: snake.body[0].x + GRID_SIZE, y: snake.body[0].y };
    snake.body.unshift(snakeHead);
    snake.body.pop();
    if(snake.direction == 'left') {
      snake.direction = null;
    }
  }
  if (snake.direction == "left") {
    snakeHead = { x: snake.body[0].x - GRID_SIZE, y: snake.body[0].y };
    snake.body.unshift(snakeHead);
    snake.body.pop();
  }
  if (snake.direction == "up") {
    snakeHead = { x: snake.body[0].x, y: snake.body[0].y - GRID_SIZE };
    snake.body.unshift(snakeHead);
    snake.body.pop();
  }
  if (snake.direction == "down") {
    snakeHead = { x: snake.body[0].x, y: snake.body[0].y + GRID_SIZE };
    snake.body.unshift(snakeHead);
    snake.body.pop();
  }
}

function drawSnake() {
  for (let i = 0; i < snake.body.length; i++) {
    const snakePart = snake.body[i];
    canvasContext.fillStyle = "green";
    canvasContext.fillRect(snakePart.x, snakePart.y, GRID_SIZE, GRID_SIZE);
  }
}

function eatApple() {
  if (
    snake.body[0].x < apple.x &&
    snake.body[0].x > apple.x - 15 &&
    snake.body[0].y < apple.y &&
    snake.body[0].y > apple.y - 15
  ) {
    console.log("The snake ate the apple");
    points++;
    if (points > highPoints) {
      highPoints++;
    }
    score.innerText = "Score: " + points;
    highScore.innerText = "High Score: " + highPoints;
    saveHighScore();
  }
}

function drawApple() {
  canvasContext.fillStyle = "red";
  canvasContext.beginPath();
  canvasContext.arc(apple.x, apple.y, apple.radius, 0, Math.PI * 2, true);
  canvasContext.fill();
}

function addSnakeBody() {
  if (
    snake.body[0].x < apple.x &&
    snake.body[0].x > apple.x - 15 &&
    snake.body[0].y < apple.y &&
    snake.body[0].y > apple.y - 15
  ) {
    snake.body.push(10);
  }
}

function appleReset() {
  if (
    snake.body[0].x < apple.x &&
    snake.body[0].x > apple.x - 15 &&
    snake.body[0].y < apple.y &&
    snake.body[0].y > apple.y - 15
  ) {
    apple.x = Math.floor(Math.random() * (800 - 20) + 20);
    apple.y = Math.floor(Math.random() * (500 - 20) + 20);
  }
}

function collision() {
  if (
    snake.body[0].x == canvas.width ||
    snake.body[0].x < 0 ||
    snake.body[0].y == canvas.height ||
    snake.body[0].y < 0
  ) {
    resetSnake();
  }
  for (i = 1; i < snake.body.length; i++) {
    if (snake.body[0].x == snake.body[i].x && snake.body[0].y == snake.body[i].y) {
      resetSnake();
    }
  }
}

document.onkeydown = function (e) {
  switch (window.event.keyCode) {
    case 37:
      snake.direction = "left";
      break;
    case 38:
      snake.direction = "up";
      e.preventDefault();
      break;
    case 39:
      snake.direction = "right";
      break;
    case 40:
      snake.direction = "down";
      e.preventDefault();
      break;
  }
};



function resetSnake() {
  alert("You Crashed! YOU LOSE!");
  snake.direction = null;
  points = 0;
  snake.body = [
    { x: 400, y: 300 },
    { x: 390, y: 300 },
    { x: 380, y: 300 },
    { x: 370, y: 300 },
    { x: 360, y: 300 },
  ];
  drawSnake();
  apple.x = Math.floor(Math.random() * (800 - 20) + 20);
  apple.y = Math.floor(Math.random() * (500 - 20) + 20);
  score.innerText = "Score: " + points;
}

let points = 0;
let highPoints = 0;


function saveHighScore() {
  localStorage.setItem("HighScore", highPoints);
}

function retrieveHighScore() {
  return localStorage.getItem("HighScore");
}

highPoints = localStorage.getItem("HighScore");
if (highPoints == null) {
  highPoints = 0;
}
highScore.innerText = "High Score: " + highPoints;
