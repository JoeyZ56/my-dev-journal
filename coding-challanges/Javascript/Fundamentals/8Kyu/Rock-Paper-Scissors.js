/*
You have to return which player won! In case of a draw return Draw!.

Examples(Input1, Input2 --> Output):

"scissors", "paper" --> "Player 1 won!"
"scissors", "rock" --> "Player 2 won!"
"paper", "paper" --> "Draw!"
*/

const rps = (p1, p2) => {
  if (p1 === p2) {
    return "Draw!";
  } else if (
    (p1 === "rock" && p2 === "scissors") ||
    (p1 === "scissors" && p2 === "paper") ||
    (p1 === "paper" && p2 === "rock")
  ) {
    return "Player 1 won!";
  } else {
    return "Player 2 won!";
  }
};

/*
    Approach:
    1. Check if the two inputs are the same. Write an if statement to return "Draw!" if they are.
    2. Check if player 1 won. Write an else if statement to check if player 1 won.
    3. Write an else statement to return "Player 2 won!" if player 1 did not win.
    
*/
