// constructor function to create objects
// contructor focus on the uniqueness of each object created

let Hangman = function(word, guessCount) {
    this.word = word.toLowerCase().split('');
    this.guessCount = guessCount;
    this.guessedLetters = [];
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