const canvas = document.getElementById("gamecanvas"),
      ctx = canvas.getContext("2d"),
      statusbar = document.getElementById("statusbarhold");;

ctx.strokeStyle = "black";

const rand = (n) => Math.floor(Math.random() * n)

let gridCol = 15,
    gridRow = 15,
    snakePos = [],
    bodyPos = [],
    spLen = 5,
    applePos = [],
    vector = [],
    baseSpeed = 8,
    addSpeed = 5;
    speed = baseSpeed,
    isGameStart = false,
    isGameOver = false;

function setStatusText() {
    statusbar.innerText = `Column : ${gridCol}\nRow : ${gridRow}\n`;
    statusbar.innerText += `Initial speed : ${baseSpeed}\n`;
    statusbar.innerText += `Add speed per ${addSpeed} length\n`;
    statusbar.innerText += `Speed : ${speed}\n`;
    statusbar.innerText += `Tail lenght : ${bodyPos.length - 1}\n`;
    if (isGameOver) 
        statusbar.innerText += `Game Over! press space to restart game`;
    else if (!isGameStart) 
        statusbar.innerText += `Press arrow kyes to start game`;
}

function canMove(pos) {
    if (pos[0] < 0 || pos[0] >= gridCol || pos[1] < 0 || pos[1] >= gridRow) 
        return false;
    for (let i in bodyPos) {
        if (i == 0)
            continue;
        if (snakePos[0] == bodyPos[i][0] && snakePos[1] == bodyPos[i][1])
            return false;
    }
    return true;
}

function eatApple() {
    if (snakePos[0] != applePos[0] || snakePos[1] != applePos[1]) 
        return;

    applePos = [rand(gridCol), rand(gridRow)];
    bodyPos.push(snakePos);
    speed = baseSpeed + (addSpeed ? Math.floor((bodyPos.length - 1) / addSpeed) : 0);
    setStatusText();
}

function move() {
    snakePos = [snakePos[0] + vector[0], snakePos[1] + vector[1]];
    if (!canMove(snakePos)) {
        snakePos = [snakePos[0] - vector[0], snakePos[1] - vector[1]];
        gameOver();
        return;
    }
    
    ctx.fillStyle = color["BG"];
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    drawApple();
    drawBody();
    drawHead();

    eatApple();
    setTimeout(move, 1000 / speed);
}

function gameOver() {
    isGameStart = false;
    isGameOver = true;
    setStatusText();
}

function newGame() {
    canvas.width = (gridSize + padding) * gridCol + padding;
    canvas.height = (gridSize + padding) * gridRow + padding;
    statusbar.style.width = canvas.width + "px";

    snakePos = [Math.floor(gridCol / 2), Math.floor(gridRow / 2)];
    bodyPos = [[snakePos]];
    speed = baseSpeed;
    isGameOver = false;
    
    ctx.fillStyle = color["BG"];
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    applePos = [rand(gridCol), rand(gridRow)];
    drawApple();
    vector = [0, -1];
    drawHead();
    vector = [0, 0];
    setStatusText();
}

newGame();