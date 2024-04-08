let player1Score = 0;
let player2Score = 0;
let finalAnswer;

// Function to handle final answer submission
document.getElementById('submitFinalAnswer').addEventListener('click', function() {
    // Get the wager amount and final answer from input fields
    let finalBet = parseInt(document.getElementById('finalBet').value);
    finalAnswer = document.getElementById('finalAnswer').value.toLowerCase().trim();

    // Determine the winner based on the final scores
    determineWinner(finalBet);
});

// Function to determine the winner based on the final scores
function determineWinner(finalBet) {
    // Compare final answer with the correct answer (e.g., "7")
    if (finalAnswer === "7") {
        player1Score += finalBet;
    } else {
        player1Score -= finalBet;
    }

    // Example logic for player 2, replace with your actual logic
    // For simplicity, player 2's score is set to the opposite of player 1's score
    player2Score = -player1Score;

    // Notify the users who won based on the final score
    let winner;
    if (player1Score > player2Score) {
        winner = "Player 1";
    } else if (player1Score < player2Score) {
        winner = "Player 2";
    } else {
        winner = "It's a tie!";
    }
    alert("The winner is: " + winner);
}