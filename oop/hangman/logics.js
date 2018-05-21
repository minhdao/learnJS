/**
 * [Hangman constuctor function with info and methods needed the game]
 * @param  {[string]} word          [a word to be guessed]
 * @param  {[number]} guessCount    [number of guesses left]
 * @return {[type]}                 [no return]
 */
let Hangman = function(word, guessCount) {
    this.word = word.toLowerCase().split('');
    this.guessCount = guessCount;
    this.guessedLetters = [];

    // Get the current stage of the puzzle word
    this.getPuzzle = () => {
        let puzzle = '';
        this.word.forEach((letter) => {
            if (this.guessedLetters.indexOf(letter) !== -1) {
                puzzle += letter;
            } else {
                puzzle += '*';
            }
        });
        return puzzle;
    };

    // Call when user make a guess  
    this.makeGuess = (letter) => {
        letter = letter.toLowerCase();
        let alreadyGuessed = this.guessedLetters.includes(letter);
        let correctGuess = this.word.includes(letter);
        if (!alreadyGuessed) {
            this.guessedLetters.push(letter);
        }
        if (!alreadyGuessed && !correctGuess) {
            this.guessCount--;
        }
    };
};