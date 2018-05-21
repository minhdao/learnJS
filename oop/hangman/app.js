/**
 * Manage hangman game
 * Listen and capture event triggered by the user
 */

let hangman = new Hangman('Doggo', 4);

/**
 * [displayGame display current stage of the same with the word and remeining guess]
 * @param  {[string]} puzzle         [puzzle word]
 * @param  {[number]} remainingGuess [number of guesses remained]
 * @return {[type]}                [description]
 */
let displayGame = (puzzle, remainingGuess) => {
    // run check through the game
    hangman.checkGameEnded();

    // diplay and update UI accordingly
    document.querySelector('#puzzle').innerHTML = puzzle;
    document.querySelector('#remaining').innerHTML = remainingGuess;
    if (hangman.gameDone || hangman.puzzleSolved) {
        if (hangman.win) {
            document.querySelector('#status').innerHTML = 'Win :)';
        } else {
            document.querySelector('#status').innerHTML = 'Lose :(';
        }
    }
};

// Start game - Display the word in *** form and number of guess a user has
displayGame(hangman.getPuzzle(), hangman.guessCount);

// Listen to user keypress
window.addEventListener('keypress', (event) => {
    let guess = String.fromCharCode(event.charCode);
    hangman.makeGuess(guess);
    displayGame(hangman.getPuzzle(), hangman.guessCount);
});