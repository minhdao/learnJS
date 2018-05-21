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
    document.querySelector('#puzzle').innerHTML = puzzle;
    document.querySelector('#remaining').innerHTML = remainingGuess;
};

// Start game - Display the word in *** form and number of guess a user has
displayGame(hangman.getPuzzle(), hangman.guessCount);

// Listen to user keypress
window.addEventListener('keypress', (event) => {
    let guess = String.fromCharCode(event.charCode);
    hangman.makeGuess(guess);
    displayGame(hangman.getPuzzle(), hangman.guessCount);
});