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

function getGame() {
  const MODES = ["Single", "Multiplayer"];

  return { start };
  /**/
  async function init() {
    const mode = +prompt(
      `choose the game mode \n 0: ${MODES[0]} \n 1: ${MODES[1]}"`,
      "0",
    );
    const isSingle = mode === 0;

    console.log(`=========\nMODE: ${
      isSingle ? MODES[0] : MODES[1]
    } \n=========\n
        Okay master${!isSingle ? "s" : ""}, Let's start with your name${
          !isSingle ? "s" : ""
        }\n
        `);
    await sleep(1000);
    const p1Name = prompt("What's your name master?");
    console.log(`Okay master ${p1Name}!`);
    const p2Name = isSingle
      ? "Computer"
      : prompt("What's about the other master?");
    await sleep(1000);
    console.log(
      `=========\nLet's get Started \n=========\n Rock, Paper, Scissors SHOOOOT `,
    );
    return {
      mode,
      roundCount: 5,
      names: { p1Name, p2Name },
    };
  }

  async function start() {
    const gameState = { ...(await init()), score: { p1: 0, p2: 0 } };
    let i = 0;
    while (i < gameState.roundCount) {
      const p1Selection = computerPlay();
      const p2Selection = playerSelection();
      const { winner, msg } = playRound(p1Selection, p2Selection);
      winner && gameState.score[winner]++;
      winner && i++;
      console.log(msg);
    }
    return gameState;
  }
}

const MESSAGES = {};
function playRound(computerSelection, playerSelection) {
  const p1 = "Computer";
  const p2 = "fooo";

  return isDraw(computerSelection, playerSelection)
    ? { winner: null, msg: "It's a Draw, Let's go again!" }
    : isP1Win(computerSelection, playerSelection)
    ? {
        winner: "p1",
        msg: `${p1} won, ${computerSelection} beats ${playerSelection}!`,
      }
    : {
        winner: "p2",
        msg: `${p2} won, ${playerSelection} beats ${computerSelection}!`,
      };
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

function sleep(delay) {
  return new Promise((res) => setTimeout(res, delay));
}

export { playRound, computerPlay, playerSelection, getGame };
