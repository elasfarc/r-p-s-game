import { ACTIONS, dispatch, getState } from "./g_state.js";
import { capitalize, sleep, getRandomInt } from "./helpers.js";
import { SELECTIONS, SYMBOLS, MODES, WIN_CASE } from "./game_const.js";

function getGame() {
  return { init, start };
  /**/
  async function init() {
    const modeInput = +prompt(
      `choose the game mode \n 0: ${MODES[0]} \n 1: ${MODES[1]}"`,
      "0",
    );

    const { isSingle, mode } = dispatch({
      action:
        modeInput === 0
          ? ACTIONS.CHANGE_MODE_SINGLE
          : ACTIONS.CHANGE_MODE_MULTI,
    });

    console.log(`=========\nMODE: ${mode} \n=========\n
        Okay master${!isSingle ? "s" : ""}, Let's start with your name${
          !isSingle ? "s" : ""
        }\n
        `);
    await sleep(1000);
    const p1Name = prompt("What's your name master?");
    dispatch({ action: ACTIONS.CHANGE_NAME_P1, data: p1Name });
    console.log(`Okay master ${p1Name}!`);
    if (!isSingle)
      dispatch({
        action: ACTIONS.CHANGE_NAME_P2,
        data: prompt("What's about the other master?"),
      });
    await sleep(1000);
    console.log(
      `=========\nLet's get Started \n=========\n Rock, Paper, Scissors SHOOOOT `,
    );
  }

  async function start() {
    const { roundCount, currentPlayer, isSingle, names } = getState();
    let i = 0;
    while (i < roundCount) {
      const p1Selection = playerSelection(names[currentPlayer]);
      const p2Selection = isSingle
        ? computerPlay()
        : playerSelection(names[currentPlayer]);
      const { winner, msg } = playRound({
        names,
        selections: { p1Selection, p2Selection },
        round: i,
      });

      dispatch({
        action: ACTIONS.MAKE_MOVE,
        data: { winner, round: i, move: { p1: p1Selection, p2: p2Selection } },
      });

      i++;

      console.log(`
      ==============================
                ${msg}
      ==============================
      `);
    }
  }
}

function playRound({ names, selections: { p1Selection, p2Selection }, round }) {
  return isDraw(p1Selection, p2Selection)
    ? { winner: null, msg: `Round:${round}\n It's a Draw, Let's go again!` }
    : isP1Win(p1Selection, p2Selection)
    ? {
        winner: "p1",
        msg: `Round:${round + 1}\n ${names.p1} won, ${p1Selection} ${
          SYMBOLS[p1Selection]
        } beats ${p2Selection} ${SYMBOLS[p2Selection]}!`,
      }
    : {
        winner: "p2",
        msg: `Round:${round + 1}\n ${names.p2} won, ${p2Selection} ${
          SYMBOLS[p2Selection]
        } beats ${p1Selection} ${SYMBOLS[p1Selection]}!`,
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
    to: 3,
  });

  return randomNum === 0
    ? SELECTIONS[0]
    : randomNum === 1
    ? SELECTIONS[1]
    : SELECTIONS[2];
}

function playerSelection(playerName) {
  const usrInput = prompt(
    `Yo ${playerName}! Rock, Paper or Scissors?!`,
    "Rock",
  );
  return capitalize(usrInput);
}

export { getGame };
