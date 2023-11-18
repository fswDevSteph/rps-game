// Initialize scores and choices outside the loop
var choices = ['R', 'P', 'S'];
var userScore, computerScore;

// Add an outer loop for playing the game multiple times
do {
  // Initialize scores at the beginning of each game
  userScore = 0;
  computerScore = 0;

  // Ask user if they want to play RPS to initiate the game - confirm()
  var userWantsToPlay = confirm('Do you want to play Rock, Paper, Scissors?');

  if (userWantsToPlay) {
    alert(
      "I do too! It's simple, here's what you do: Press 'R' for Rock, Press 'P' for Paper, and press 'S' for scissors. Then I'll let you know who won that round. Let's start!"
    );

    // Play 3 rounds
    for (var round = 1; round <= 3; round++) {
      alert('Round ' + round);

      // Get user's choice
      var userChoice = prompt(
        "You're up! Press 'R', 'P', or 'S' to make your choice!"
      );

      // Validate user input
      while (!userChoice || !choices.includes(userChoice.toUpperCase())) {
        alert('Invalid choice! Please choose from "R", "P", or "S".');
        userChoice = prompt(
          "You're up! Press 'R', 'P', or 'S' to make your choice!"
        );
      }

      // Generate random computer choice and display
      var computerChoice = choices[Math.floor(Math.random() * choices.length)];
      alert('Computer chose ' + computerChoice);

      // Compare choices and display winner
      if (userChoice.toUpperCase() === computerChoice) {
        alert("It's a tie!");
      } else if (
        (userChoice === 'R' && computerChoice === 'S') ||
        (userChoice === 'P' && computerChoice === 'R') ||
        (userChoice === 'S' && computerChoice === 'P')
      ) {
        alert('You win this round!');
        userScore++;
      } else {
        alert('You lose this round!');
        computerScore++;
      }
    }

    // Display final scores
    alert(
      'Game over! Your score: ' +
        userScore +
        ' | Computer score: ' +
        computerScore
    );

    // Determine the overall winner or handle ties
    if (userScore > computerScore) {
      alert('Congratulations! You are the overall winner!');
    } else if (userScore < computerScore) {
      alert('Sorry, you lost the overall game. Better luck next time!');
    } else {
      alert("It's a tie in the overall game!");
    }

    // Ask if the user wants to play again - confirm()
    var playAgain = confirm('Do you want to play again?');
  } else {
    alert('Maybe next time!');
    var playAgain = false; // If the user doesn't want to play, set playAgain to false
  }
} while (playAgain);

alert('Thanks for playing!');
