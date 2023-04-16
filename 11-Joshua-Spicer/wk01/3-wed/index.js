
function maxOfTwoNumbers(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}

// maxOfTwoNumbers
console.log(maxOfTwoNumbers(10, 5));
console.log(maxOfTwoNumbers(-3, 0));


function maxOfThree(num1, num2, num3) {
  if (num1 >= num2 && num1 >= num3) {
    return num1;
  } else if (num2 >= num1 && num2 >= num3) {
    return num2;
  } else {
    return num3;
  }
}

// maxOfThree
console.log(maxOfThree(10, 5, 8)); 
console.log(maxOfThree(-3, 0, 5)); 

function isVowel(char) {
  return ['a', 'e', 'i', 'o', 'u'].includes(char.toLowerCase());
}

// isVowel
console.log(isVowel('a')); 
console.log(isVowel('E')); 
console.log(isVowel('z')); 


function sumArray(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}


// sumArray
console.log(sumArray([1, 2, 3, 4, 5])); 
console.log(sumArray([-1, 0, 1])); 

function multiplyArray(numbers) {
  let product = 1;
  for (let i = 0; i < numbers.length; i++) {
    product *= numbers[i];
  }
  return product;
}


// multiplyArray
console.log(multiplyArray([1, 2, 3, 4, 5])); 
console.log(multiplyArray([-1, 2, 3]));













// Variables
const word = ['F', 'O', 'X'];
let guessedLetters = ['_', '_', '_'];

// Function to chek the letters in the above word
function guessLetter(letter) {
  let foundLetter = false;
  for (let i = 0; i < word.length; i++) {
    if (letter.toUpperCase() === word[i]) {
      guessedLetters[i] = letter.toUpperCase();
      foundLetter = true;
    }
  }
  console.log(`Current guessed letters: ${guessedLetters.join(' ')}`);
  if (foundLetter) {
    console.log(`Congratulations! You found the letter ${letter.toUpperCase()}!`);
  } else {
    console.log(`Sorry, the letter ${letter.toUpperCase()} is not in the word. Try again and see if you can crack the code!!`);
  }
  if (!guessedLetters.includes('_')) {
    console.log(`Congratulations! You are a word wizard! The word was ${word.join('')}.`);
  }
}

// Testing the function
guessLetter('F');
guessLetter('O');
guessLetter('A');
guessLetter('X');
guessLetter('Z');
