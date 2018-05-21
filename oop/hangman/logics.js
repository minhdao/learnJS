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
    this.gameDone = false;
    this.puzzleSolved = false;
    this.win = false;

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

        // only when game is not done and puzzle not solved
        if (!this.gameDone || !this.puzzleSolved) {
            if (!alreadyGuessed) {
                this.guessedLetters.push(letter);
            }
            if (!alreadyGuessed && !correctGuess) {
                this.guessCount--;
            }
        }
        this.checkGameEnded();
    };

    // Check if game already ended
    this.checkGameEnded = () => {
        // check if all letters guessed correctly
        if (!this.getPuzzle().includes('*')) {
            this.puzzleSolved = true;
        }
        // when puzzle solved
        if (this.puzzleSolved) {
            this.gameDone = true;
        }

        // check if more guesses allowed
        if (this.guessCount === 0) {
            this.gameDone = true;
        }
        // when no more guesses allowed
        if (this.gameDone) {
            this.puzzleSolved ? this.win = true : this.win = false;
        }
    };
};