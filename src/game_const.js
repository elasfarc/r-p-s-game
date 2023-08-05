const MODES = ["Single", "Multiplayer"];

const SELECTIONS = {
  0: "Rock",
  1: "Paper",
  2: "scissors",
};

const SYMBOLS = {
  [SELECTIONS[0]]: "✊🏻",
  [SELECTIONS[1]]: "🫴🏻📄",
  [SELECTIONS[2]]: "✂️",
};

const WIN_CASE = {
  [SELECTIONS[0]]: SELECTIONS[2],
  [SELECTIONS[1]]: SELECTIONS[0],
  [SELECTIONS[2]]: SELECTIONS[1],
};

const MESSAGES = {};

export { MODES, SELECTIONS, SYMBOLS, WIN_CASE };
