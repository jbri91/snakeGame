let canvas;
let canvasContext;

window.onload = function () {
    canvas = document.getElementById('gameCanvas');
    canvasContext = canvas.getContext('2d');
    canvasContext.fillStyle = 'black';
    canvasContext.fillRect(0,0,canvas.clientWidth,canvas.height);

    canvasContext.fillStyle = 'green';
    canvasContext.fillRect(200,300,200,20);

    canvasContext.fillStyle = 'red';
    canvasContext.fillRect(250,350,10,10);
}

