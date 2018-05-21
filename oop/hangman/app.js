/**
 * Manage hangman game
 * Listen and capture event triggered by the user
 */

let hangman = new Hangman('Doggo', 4);

// Start game - Display the word in *** form and number of guess a user has
console.log(hangman.getPuzzle());
console.log(hangman.guessCount);

// Listen to user keypress
window.addEventListener('keypress', (event) => {
    let guess = String.fromCharCode(event.charCode);
    hangman.makeGuess(guess);
    console.log(hangman.getPuzzle());
    console.log(hangman.guessCount);
});