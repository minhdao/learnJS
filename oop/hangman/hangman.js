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
        if (this.guessedLetters.indexOf(letter) === -1) {
            this.guessedLetters.push(letter);
        }
    };
};

hangman1 = new Hangman('Zipper', 10);
hangman2 = new Hangman('Mountain', 10);

console.log(hangman1.word);
hangman1.makeGuess('z');
hangman1.makeGuess('p');
console.log(hangman1.getPuzzle());