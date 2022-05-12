let offset = 1;

function drawHead() {
    ctx.fillStyle = color["head"];

    let thisX = (gridSize + padding) * snakePos[0] + padding;
    let thisY = (gridSize + padding) * snakePos[1] + padding;
    ctx.fillRect(thisX, thisY, gridSize, gridSize);

    ctx.fillStyle = color["eye"];
    ctx.fillRect(thisX + (vector[0] > 0 ? gridSize * 3 / 5 : 0), 
                 thisY + (vector[1] > 0 ? gridSize * 3 / 5 : 0), 
                 gridSize * 2 / 5, gridSize * 2 / 5);
    ctx.fillRect(thisX + (vector[0] >= 0 ? gridSize * 3 / 5 : 0), 
                 thisY + (vector[1] >= 0 ? gridSize * 3 / 5 : 0), 
                 gridSize * 2 / 5, gridSize * 2 / 5);

    ctx.fillStyle = color["pupil"];
    ctx.fillRect(thisX + (vector[1] ? gridSize / 5 : (vector[0] > 0 ? gridSize * 4 / 5 : 0)), 
                 thisY + (vector[0] ? gridSize / 5 : (vector[1] > 0 ? gridSize * 4 / 5 : 0)), 
                 gridSize / 5, gridSize / 5);
    ctx.fillRect(thisX + (vector[1] ? gridSize * 3 / 5 : (vector[0] > 0 ? gridSize * 4 / 5 : 0)), 
                 thisY + (vector[0] ? gridSize * 3 / 5 : (vector[1] > 0 ? gridSize * 4 / 5 : 0)), 
                 gridSize / 5, gridSize / 5);

    ctx.strokeRect(thisX + offset, thisY + offset, 
                   gridSize - offset * 2, gridSize - offset * 2);
}

function drawBody() {
    for (let i in bodyPos) {
        index = bodyPos.length - 1 - i;
        if (i == bodyPos.length - 1) 
            bodyPos[index] = [snakePos[0], snakePos[1]];
        else {
            ctx.fillStyle = (spLen ? index % spLen : true) ? color["bodyNormal"] : color["bodySpecial"];
            bodyPos[index] = [bodyPos[index - 1][0], bodyPos[index - 1][1]];
            let thisX = (gridSize + padding) * bodyPos[index][0] + padding;
            let thisY = (gridSize + padding) * bodyPos[index][1] + padding;
            ctx.fillRect(thisX, thisY, gridSize, gridSize);
            ctx.strokeRect(thisX + offset, thisY + offset, 
                           gridSize - offset * 2, gridSize - offset * 2);
        }
    }
}

function drawApple() {
    ctx.fillStyle = "red";
    let thisX = (gridSize + padding) * applePos[0] + padding;
    let thisY = (gridSize + padding) * applePos[1] + padding;
    ctx.fillRect(thisX, thisY, gridSize, gridSize);
    ctx.strokeRect(thisX + offset, thisY + offset, 
                   gridSize - offset * 2, gridSize - offset * 2);
}