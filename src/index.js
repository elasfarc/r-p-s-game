import { getGame } from "./game.js";
import { getState } from "./g_state.js";

// console.log(computerPlay())
// console.log(playerSelection())
const game = getGame();
game
  .init()
  .then(game.start)
  .then(game.getState)
  .then((state) => {
    console.log(getState());
  });
