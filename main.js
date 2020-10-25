let canvas;
let canvasContext;
let randomCordinatesX = Math.floor(Math.random() * (800 - 20) + 20);
let randomCordinatesY = Math.floor(Math.random() * (500 - 20) + 20);
let appleX = randomCordinatesX;
let appleY = randomCordinatesY;
let appleRadius = 10;
let showingLoseScreen = false;
let snake = [
    { x: 400, y: 300}, 
    { x: 380, y: 300},
    { x: 360, y: 300},
];

  let snakeCopy = [
    { x: 400, y: 300},
    { x: 380, y: 300},
    { x: 360, y: 300}, 
  ]


  let snakeLength = 20;
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

function drawEverything() {
  canvasContext.fillStyle = "black";
  canvasContext.fillRect(0, 0, canvas.width, canvas.height);
  moveSnake();

  if (
    snake[0].x == canvas.width ||
    snake[0].x < 0 ||
    snake[0].y == canvas.height ||
    snake[0].y < 0
  ) {
    alert("You hit the wall. YOU LOSE!");
  }
  drawSnake();
  eatApple();
  drawApple();
}

document.onkeydown = function() {
  switch (window.event.keyCode) {
      case 37:
       console.log('Left was pressed')
       snake[0].x -= snakeSpeed;
       snake[1].y = snake[0].y
       snake[1].x = snake[0].x - 10
       snake[2].y = snake[1].y
       snake[2].x = snake[1].x - 10
       break;
      case 38:
        console.log('up was pressed');
        snake[0].y -= snakeSpeed;
        snake[1].y = snake[0].y + 10
        snake[1].x = snake[0].x
        snake[2].y = snake[1].y + 10
        snake[2].x = snake[1].x
    
       break;
      case 39:
  console.log('right was pressed');
  snake[0].x += snakeSpeed;
  snake[1].y = snake[0].y
  snake[1].x = snake[0].x - 10
  snake[2].y = snake[1].y
  snake[2].x = snake[1].x - 10
       break;
      case 40:
  console.log('down was pressed');
  snake[0].y += snakeSpeed;
  snake[1].y = snake[0].y - 10
  snake[1].x = snake[0].x
  snake[2].y = snake[1].y - 10
  snake[2].x = snake[1].x
      break;
}};

function moveSnake() {
  // let snakeHead = {x: snake[0].x + snakeSpeed, y: snake[0].y};
  // snake.unshift(snakeHead);
  // snake.pop();
    
  // for (let i = 0; i < snake.length; i++) {
  // }


}



function drawSnake() {

  for (let i = 0; i < snake.length; i++) {
  const snakePart = snake[i];
  canvasContext.fillStyle = 'green';
  canvasContext.fillRect(snakePart.x, snakePart.y, snakeLength, snakeWidth);
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