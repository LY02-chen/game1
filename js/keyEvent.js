document.body.addEventListener("keydown", keyDown, false);

function keyDown(event) {    
    const keyID = event.code;
    
    if (isGameOver) {
        if (keyID === "Space")     
            newGame();
        return;
    }

    if (keyID === "ArrowUp" && vector[1] != 1) {
        if (!isGameStart) {
            isGameStart = true;
            setStatusText();
            move();
        }
        vector = [0, -1];
        drawHead();
    }

    if (keyID === "ArrowDown" && vector[1] != -1) {
        if (!isGameStart) {
            isGameStart = true;
            setStatusText();
            move();
        }
        vector = [0, 1];
        drawHead();
    }

    if (keyID === "ArrowLeft" && vector[0] != 1) {
        if (!isGameStart) {
            isGameStart = true;
            setStatusText();
            move();
        }
        vector = [-1, 0];
        drawHead();
    }

    if (keyID === "ArrowRight" && vector[0] != -1) {
        if (!isGameStart) {
            isGameStart = true;
            setStatusText();
            move();
        }
        vector = [1, 0];
        drawHead();
    }
}