const correctWord = ["W", "A", "T", "E", "R"];
const guessed = [" "," "," "," "," "]
let deadCount = 6;
const wrong = []

 // this was the last thing I did, and I couldn't get it working properly so just split him / her into different lines. Apologies
const hangmanPic1  = " _______________   " 
const hangmanPic2  = "|_______________|  " 
const hangmanPic3  = "   |         ||    " 
const hangmanPic4  = "   0         ||    "
const hangmanPic5  = "  (|)        ||    "
const hangmanPic6  = "   |         ||    "
const hangmanPic7  = "  ( )        ||    "
const hangmanPic8  = "             ||    "
const hangmanPic9  = "_____________||__  "
const hangmanPic10 = "|_______________|  "
const hangmanPic11 = "||             ||  "
const hangmanPic12 = "||             ||  "


const guessLetter = function(guess){
    for (a = 0; a <= correctWord.length; a++){
        if (guess === correctWord[a]){  
            guessed[a] = guess;
            return "that letter is correct";
        } 
    }   if (guess != correctWord[a]){
            wrong.push(guess)
            deadCount = deadCount - 1;
            gameOver();
            return "incorrect"
    }
} 

const gameOver = function(guess) {
if (deadCount === 0) {
    console.log(hangmanPic1)
    console.log(hangmanPic2)
    console.log(hangmanPic3)
    console.log(hangmanPic4)
    console.log(hangmanPic5)
    console.log(hangmanPic6)
    console.log(hangmanPic7)
    console.log(hangmanPic8)
    console.log(hangmanPic9)
    console.log(hangmanPic10)
    console.log(hangmanPic11)
    console.log(hangmanPic12)

    }
}

console.log(guessLetter("W"))
console.log(guessLetter("A"))
console.log(guessLetter("T"))
console.log(guessLetter("T"))
console.log(guessLetter("R"))
console.log(guessLetter("P"))
console.log(guessLetter("P"))
console.log(guessLetter("P"))

console.log(guessed)
if (guessed.includes(" ") === false){
    console.log("Yay! - You did it!!")
}

//left this in to check working
console.log(wrong)
console.log(deadCount)





