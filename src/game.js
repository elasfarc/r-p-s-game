import { capitalize, sleep, getRandomInt } from "./helpers.js";
import { SELECTIONS, SYMBOLS, MODES, WIN_CASE } from "./game_const.js";

function getGame() {
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
      isSingle,
      roundCount: 5,
      names: { p1Name, p2Name },
    };
  }

  async function start() {
    const { roundCount, names, score, isSingle } = {
      ...(await init()),
      score: { p1: 0, p2: 0 },
    };
    let i = 0;
    while (i < roundCount) {
      const p1Selection = playerSelection();
      const p2Selection = isSingle ? computerPlay() : playerSelection();
      const { winner, msg } = playRound({
        names,
        selections: { p1Selection, p2Selection },
        round: i + 1,
      });
      winner && score[winner]++;
      i++;
      // winner && i++;
      console.log(`
      ==============================
                ${msg}
      ==============================
      `);
    }
    return score;
  }
}

function playRound({ names, selections: { p1Selection, p2Selection }, round }) {
  return isDraw(p1Selection, p2Selection)
    ? { winner: null, msg: `Round:${round}\n It's a Draw, Let's go again!` }
    : isP1Win(p1Selection, p2Selection)
    ? {
        winner: "p1",
        msg: `Round:${round}\n ${names.p1Name} won, ${p1Selection} ${SYMBOLS[p1Selection]} beats ${p2Selection} ${SYMBOLS[p2Selection]}!`,
      }
    : {
        winner: "p2",
        msg: `Round:${round}\n ${names.p2Name} won, ${p2Selection} ${SYMBOLS[p2Selection]} beats ${p1Selection} ${SYMBOLS[p1Selection]}!`,
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
    from: 0,
    to: 2,
  });

  return randomNum === 0
    ? SELECTIONS[0]
    : randomNum === 1
    ? SELECTIONS[1]
    : SELECTIONS[2];
}

function playerSelection() {
  const usrInput = prompt("Yo! Rock, Paper or Scissors?!", "Rock");
  return capitalize(usrInput);
}

export { getGame };
