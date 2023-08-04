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

function getRandomInt({
                          from = 0,
                          to = 10
                      } = {}) {
    return Math.floor((Math.random() * to) + from)
}


export {computerPlay}