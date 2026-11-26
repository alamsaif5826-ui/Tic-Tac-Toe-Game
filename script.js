let boxes = document.querySelectorAll(".box");

let statusText = document.querySelector("#status");

let resetBtn = document.querySelector("#reset");

let turnO = false;

let count = 0;

let winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],

    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],

    [0, 4, 8],
    [2, 4, 6]
];

// Box click event
boxes.forEach((box) => {

    box.addEventListener("click", () => {

        if (box.innerText !== "") return;

        if (turnO === false) {
            box.innerText = "X";
            turnO = true;
            statusText.innerText = "Player O's Turn";
        } 
        else {
            box.innerText = "O";
            turnO = false;
            statusText.innerText = "Player X's Turn";
        }

        box.disabled = true;

        count++;

        checkWinner();
    });
});

// Check Winner
function checkWinner() {

    for (let pattern of winPatterns) {

        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if (pos1 !== "" && pos2 !== "" && pos3 !== "") {

            if (pos1 === pos2 && pos2 === pos3) {

                statusText.innerText = `🎉 Player ${pos1} Wins!`;

                disableBoxes();

                return;
            }
        }
    }

    if (count === 9) {
        statusText.innerText = "Game Draw!";
    }
}

// Disable all boxes
function disableBoxes() {

    boxes.forEach((box) => {
        box.disabled = true;
    });

}

// Reset Game
resetBtn.addEventListener("click", resetGame);

function resetGame() {

    turnO = false;
    count = 0;

    statusText.innerText = "Player X's Turn";

    boxes.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
    });

}