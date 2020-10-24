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

document.addEventListener("keydown", function (e) {
  if (e.key === '38') {
    console.log('up');
    // snake[i].y -= snakeSpeed;
    //Up
  }
  if (e.key === '40') {
    console.log('down')
    // snake[i].y += snakeSpeed;
    
    //down
  }
  if (e.key === '37' ) {
    console.log('left');
    // snake[i].x -= snakeSpeed;
    //left
  }
  if(e.key === '39' ) {
    console.log('right');
    // snake[i].x += snakeSpeed;
    //right
  }
})


// document.addEventListener("keydown", keyDownHandler, false);

// function keyDownHandler(e) {
//   if (e.key == "Right" || e.key == "ArrowRight") {
//     rightPressed = true;
//     leftPressed = false;
//     lowerPressed = false;
//     upperPressed = false;
//   } else if (e.key == "Left" || e.key == "ArrowLeft") {
//     leftPressed = true;
//     rightPressed = false;
//     lowerPressed = false;
//     upperPressed = false;
//   }
//   if (e.key == "Up" || e.key == "ArrowUp") {
//     upperPressed = true;
//     lowerPressed = false;
//     leftPressed = false;
//     rightPressed = false;
//   } else if (e.key == "Down" || e.key == "ArrowDown") {
//     lowerPressed = true;
//     upperPressed = false;
//     leftPressed = false;
//     rightPressed = false;
//   }
// }

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

function moveSnake() {
  let snakeHead = {x: snake[0].x + snakeSpeed, y: snake[0].y};
  snake.unshift(snakeHead);
  snake.pop();
    
  // document.addEventListener('keydown', function (e) {
  //   if (e.key === '38') {
  //     snake[i].y -= snakeSpeed;
  //     //Up
  //   }
  //   if (e.key === '40') {
  //     snake[i].y += snakeSpeed;
  //     console.log('down')
  //     //down
  //   }
  //   if (e.key === '37' ) {
  //     snake[i].x -= snakeSpeed;
  //     //left
  //   }
  //   if(e.key === '39' ) {
  //     snake[i].x += snakeSpeed;
  //     //right
  //   }
}

//   for (let i = 0; i < snake.length; i++) {
  
  
//   if (rightPressed) {
//     snake[i].x += snakeSpeed;
//   } else if (leftPressed) {
//     snake[i].x -= snakeSpeed;
//   }
//   if (upperPressed) {
//     snake[i].y -= snakeSpeed;
//   } else if (lowerPressed) {
//     snake[i].y += snakeSpeed;
//   }
// } 



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