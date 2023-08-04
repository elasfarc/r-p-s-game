// Function to generate a randomly returns Rock, paper or scissors.
function computerPlay() {
    const plays = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * plays.length)
    return plays[randomIndex];
}
console.log(computerPlay())


  function playRound(playerSelection, computerSelection) {
    // Make playerSelection case-insensitive
    playerSelection = playerSelection.toLowerCase();
  
    // Check for a tie
    if (playerSelection === computerSelection.toLowerCase()) {
      return "It's a tie!";
    }
  
    // Determine the winner based on playerSelection and computerSelection
    if (
      (playerSelection === 'rock' && computerSelection.toLowerCase() === 'scissors') ||
      (playerSelection === 'paper' && computerSelection.toLowerCase() === 'rock') ||
      (playerSelection === 'scissors' && computerSelection.toLowerCase() === 'paper')
    ) {
      return 'You Win! ' + playerSelection + ' beats ' + computerSelection;
    } else if (
      (playerSelection === 'rock' && computerSelection.toLowerCase() === 'paper') ||
      (playerSelection === 'paper' && computerSelection.toLowerCase() === 'scissors') ||
      (playerSelection === 'scissors' && computerSelection.toLowerCase() === 'rock')
    ) {
      return 'You Lose! ' + computerSelection + ' beats ' + playerSelection;
    } else {
      return 'Invalid selection. Please choose Rock, Paper, or Scissors.';
    }
  }

    // Testing the functions
    const playerSelection = 'rock';
    const computerSelection = computerPlay();
    console.log('Computer plays: ' + computerSelection);
    console.log(playRound(playerSelection, computerSelection));
  
    function game() {
        let playerScore = 0;
        let computerScore = 0;
      
        for (let round = 1; round <= 5; round++) {
          const playerSelection = prompt('Round ' + round + ': Choose Rock, Paper, or Scissors');
          const computerSelection = computerPlay();
          
          console.log('Computer plays: ' + computerSelection);
          const result = playRound(playerSelection, computerSelection);
          console.log(result);
      
          if (result.includes('Win')) {
            playerScore++;
          } else if (result.includes('Lose')) {
            computerScore++;
          }
        }
      
        // Report the final scores and determine the winner
        console.log('Final Scores:');
        console.log('Player: ' + playerScore);
        console.log('Computer: ' + computerScore);
        
        if (playerScore > computerScore) {
          console.log('Congratulations! You win the game!');
        } else if (playerScore < computerScore) {
          console.log('Sorry, you lose the game.');
        } else {
          console.log("It's a tie game!");
        }
      }
      
      // Call the game function to start the game
      game();
      