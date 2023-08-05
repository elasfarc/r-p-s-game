const GAME_SELECTIONS = {
    0: "Rock",
    1: "Paper",
    2: "scissors",
};

const WIN_CASE = {
    [GAME_SELECTIONS[0]]: GAME_SELECTIONS[2],
    [GAME_SELECTIONS[1]]: GAME_SELECTIONS[0],
    [GAME_SELECTIONS[2]]: GAME_SELECTIONS[1],
};

const MESSAGES = {};
function playRound( computerSelection, playerSelection ) {
    const p1 = "Computer";
    const p2 = "fooo";

    return isDraw(computerSelection, playerSelection)
        ? "Draw"
        : isP1Win(computerSelection, playerSelection)
            ? `${p1} won, ${computerSelection} beats ${playerSelection}!`
            : `${p2} won, ${playerSelection} beats ${computerSelection}!`;
}

function isP1Win(p1, p2) {
    return WIN_CASE[p1] === p2;
}

function isDraw(p1, p2) {
    return p1 === p2;
}
function computerPlay() {
    const randomNum = getRandomInt({
        from: 1,
        to: 3,
    });
    return randomNum === 1 ? "Rock" : randomNum === 2 ? "Paper" : "Scissors";
}

function playerSelection() {
    const usrInput = prompt("Yo! Rock, Paper or Scissors?!", "Rock");
    return capitalize(usrInput);
}

function getRandomInt({ from = 0, to = 10 } = {}) {
    return Math.floor(Math.random() * to + from);
}

function capitalize(str) {
    return str[0].toUpperCase() + str.slice(1).toLowerCase();
}

export { playRound, computerPlay, playerSelection};
