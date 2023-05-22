// The Word Guesser

const theWord = ['F','O', 'X'];
const guessedLetters = ['_', '_', '_'];

function guessLetter(letter) {
    letter = letter.toUpperCase();
    if (theWord.includes(letter)) {
        letterPosition = theWord.indexOf(letter);
        guessedLetters[letterPosition] = letter;
        console.log("You found " + letter + ", congragulations!");
    } else {
        console.log("Sorry you missed.");
    }

    if (!guessedLetters.includes("_")) {
        console.log("You won the game!");
    }

    console.log(guessedLetters);
}
guessLetter('f');
guessLetter('O');
guessLetter('A');
guessLetter('x');


// Wheel of Fortune
let rewardAmount = 0;


// Hangman
 let allGuessedLetters = [];
 for (j = 0; j  < 7; j++) {
        let result = allGuessedLetters.push(guessedLetters[j]);
}
 return result;


