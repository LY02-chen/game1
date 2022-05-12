document.getElementById("applysetting").onclick = function(event) {
    if (isGameStart) {
        alert("Stop the game.");
        return;
    }

    let inputCol = parseInt(document.getElementById("col").value);
    let inputRow = parseInt(document.getElementById("row").value);
    let inputSpLen = parseInt(document.getElementById("splen").value);
    let inputInitSpeed = parseInt(document.getElementById("initspeed").value);
    let inputAddSpeed = parseInt(document.getElementById("addspeed").value);

    if (!inputCol || !inputRow) {
        alert("Column and row must both be greater than zero.");
        return;
    }
    if (!inputInitSpeed) {
        alert("Initial speed must be greater than zero.");
        return;
    }

    gridCol = inputCol,
    gridRow = inputRow,
    spLen = inputSpLen,
    baseSpeed = inputInitSpeed,
    addSpeed = inputAddSpeed;

    newGame();
}

document.getElementById("applycolor").onclick = function(event) {
    if (isGameStart) {
        alert("Stop the game.");
        return;
    }

    color["BG"] = document.getElementById("background").value;
    color["eye"] = document.getElementById("eye").value;
    color["pupil"] = document.getElementById("pupil").value;
    color["head"] = document.getElementById("head").value;
    color["bodyNormal"] = document.getElementById("bodynormal").value;
    color["bodySpecial"] = document.getElementById("bodyspecial").value;

    newGame();
}