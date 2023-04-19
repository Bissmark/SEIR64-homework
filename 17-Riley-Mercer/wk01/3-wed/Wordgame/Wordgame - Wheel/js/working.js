const correctWord = ["W", "A", "T", "E", "R"];
const guessed = [" "," "," "," "," "]
let prize = 20;

const guessLetter = function(guess){
    for (a = 0; a <= correctWord.length; a++){
        if (guess === correctWord[a]){  
            guessed[a] = guess;
            prize = prize + Math.floor(Math.random() * 100);
            return "that letter is correct";
        }
    }
}


// THE BELOW IS MY FIRST ATTEMPT THAT I THOUGHT I MIGHT COME BACK TO. I DIDN'T.
// const checker = function(correctWord, guessed){
//     for (b = 0; b <= correctWord.length; b++){
//         if (correctWord[b] !== guessed[b]){
//             return false
//         }   else {
// //             console.log("Yay! - You got it right!")
//         }
//     }
// }

console.log(guessLetter("W"))
console.log(guessLetter("R"))
console.log(guessLetter("A"))
console.log(guessLetter("T"))
console.log(guessLetter("E"))
console.log(guessed)
if (guessed.includes(" ") === false){
    console.log("Yay! - You did it!!")
    console.log(`Congratulations, you have won $${prize}`)
}
