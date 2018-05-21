/**
 * Manage hangman game
 */

let hangman = new Hangman('Doggo', 4);

window.addEventListener('keypress', (event) => {
    let guess = String.fromCharCode(event.charCode);
    console.log(guess);
});