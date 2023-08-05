import {playRound, computerPlay, playerSelection, getGame} from './game.js'

// console.log(computerPlay())
// console.log(playerSelection())
const game = getGame()
game.init().then(() => {
    const p1 = computerPlay();
    const p2 = playerSelection();
    console.log(`p1 => ${p1} \n p2 => ${p2} \n`)
    console.log(playRound(p1, p2))
})
