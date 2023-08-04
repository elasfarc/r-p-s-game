function computerPlay() {
    const randomNum = getRandomInt({
        from: 1,
        to: 3
    })
    return randomNum === 1 ?
        'Rock' :
        randomNum === 2 ?
            'Paper' :
            'Scissors'
}

function playerSelection(){
    const usrInput =  prompt("Yo! Rock, Paper or Scissors?!", "Rock");
    return capitalize(usrInput);
}

function getRandomInt({
                          from = 0,
                          to = 10
                      } = {}) {
    return Math.floor((Math.random() * to) + from)
}

function capitalize(str){
    return str[0].toUpperCase() + str.slice(1).toLowerCase()
}


export {computerPlay, playerSelection}