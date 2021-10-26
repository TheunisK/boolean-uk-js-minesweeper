let board = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let boardLength = board.length;
let dangerousBoard = placeMine(board, mineGen());
let guessedBoard = dangerousBoard;

function mineGen() {
    let minePosition = Math.floor(Math.random() * boardLength);
    return minePosition;
}

function placeMine(newBoard, mineLocation) {
    newBoard[mineLocation] = 1;
    return newBoard;
}

function testPosition(guess) {
    if (dangerousBoard[guess - 1] == 1) {
        guessedBoard[guess-1] = 1;
    } else if (dangerousBoard[guess - 1] == 0) {
        guessedBoard[guess - 1] = 2;
    }
}

console.log(dangerousBoard);

while (true) {

    const guess = prompt("Which square do you think is safe? (1-10).");
    testPosition(guess);
    if (guessedBoard[guess-1] == 1) {
        alert("BOOM! You're dead. Better luck next time!")
        break;
    } else {
        alert("Congrats!");
    }
}




console.log(dangerousBoard);

console.log(guessedBoard);




