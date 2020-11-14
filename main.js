window.onload = () => setInterval(() => init(), 50);
let GRID_SIZE = 10;
let points = 0;
let highPoints = 0;

const canvas = document.getElementById("gameCanvas");
const canvasContext = canvas.getContext("2d");

const score = document.getElementById("score");
const highScore = document.getElementById("highScore");

let apple = {
  x: Math.floor(Math.random() * (800 / 10) * 10),
  y: Math.floor(Math.random() * (600 / 10) * 10),
  radius: 6,
};

let snake = {
  body: [
    { x: 400, y: 300 },
    { x: 390, y: 300 },
    { x: 380, y: 300 },
    { x: 370, y: 300 },
    { x: 360, y: 300 },
  ],
  direction: undefined,
};

function init() {
  drawCanvas();
  moveSnake();
  drawSnake();
  if (eatApple()) {
    points++;
    if (points > highPoints) {
      highPoints++;
    }
    score.innerText = `Score: ${points}`;
    highScore.innerText = `High Score: ${highPoints}`;
    saveHighScore();
  }
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
  if (snake.direction === "right") {
    snakeHead = { x: snake.body[0].x + GRID_SIZE, y: snake.body[0].y };
    snake.body.unshift(snakeHead);
    snake.body.pop();
  }
  if (snake.direction === "left") {
    snakeHead = { x: snake.body[0].x - GRID_SIZE, y: snake.body[0].y };
    snake.body.unshift(snakeHead);
    snake.body.pop();
  }
  if (snake.direction === "up") {
    snakeHead = { x: snake.body[0].x, y: snake.body[0].y - GRID_SIZE };
    snake.body.unshift(snakeHead);
    snake.body.pop();
  }
  if (snake.direction === "down") {
    snakeHead = { x: snake.body[0].x, y: snake.body[0].y + GRID_SIZE };
    snake.body.unshift(snakeHead);
    snake.body.pop();
  }
}

function drawSnake() {
  for (let i = 0; i < snake.body.length; i++) {
    canvasContext.fillStyle = "green";
    canvasContext.fillRect(
      snake.body[i].x,
      snake.body[i].y,
      GRID_SIZE,
      GRID_SIZE
    );
  }
}

function eatApple() {
  return (
    snake.body[0].x < apple.x &&
    snake.body[0].x > apple.x - 15 &&
    snake.body[0].y < apple.y &&
    snake.body[0].y > apple.y - 15
  );
}

function drawApple() {
  canvasContext.fillStyle = "red";
  canvasContext.beginPath();
  canvasContext.arc(
    apple.x - 5,
    apple.y - 5,
    apple.radius,
    0,
    Math.PI * 2,
    true
  );
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
    newApple();
  }
}

function newApple() {
  apple.x = Math.floor(Math.random() * (800 / 10) * 10);
  apple.y = Math.floor(Math.random() * (600 / 10) * 10);
}

function collision() {
  if (
    snake.body[0].x == canvas.width ||
    snake.body[0].x < 0 ||
    snake.body[0].y == canvas.height ||
    snake.body[0].y < 0
  ) {
    gameOver();
  }
  for (i = 1; i < snake.body.length; i++) {
    if (
      snake.body[0].x == snake.body[i].x &&
      snake.body[0].y == snake.body[i].y
    ) {
      gameOver();
    }
  }
}

document.addEventListener("keydown", (e) => {
  switch (e.code) {
    case "ArrowLeft":
      snake.direction = "left";
      break;
    case "ArrowUp":
      snake.direction = "up";
      e.preventDefault();
      break;
    case "ArrowRight":
      snake.direction = "right";
      break;
    case "ArrowDown":
      snake.direction = "down";
      e.preventDefault();
      break;
  }
});

function gameOver() {
  alert("You Crashed! YOU LOSE!");
  snake.direction = undefined;
  points = 0;
  snake.body = [
    { x: 400, y: 300 },
    { x: 390, y: 300 },
    { x: 380, y: 300 },
    { x: 370, y: 300 },
    { x: 360, y: 300 },
  ];
  drawSnake();
  newApple();
  score.innerText = `Score: ${points}`;
}

function saveHighScore() {
  localStorage.setItem("HighScore", highPoints);
}

function retrieveHighScore() {
  return localStorage.getItem("HighScore");
}

highPoints = localStorage.getItem("HighScore");
if (!highPoints) {
  highPoints = 0;
}
highScore.innerText = `High Score: ${highPoints}`;
