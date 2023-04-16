
// Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them.
function maxOfTwoNumbers (n1, n2) {
    if (n1 > n2) {
        return n1;
    } else {
        return n2;
    }
};
console.log(`The greater number of 2 and 5 is ${ maxOfTwoNumbers(2, 5)}`);

// Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.
function maxOfThree (n1, n2, n3) {
    if (n1 > n2 && n1 > n3) {
        return n1;
    } else if (n2 > n1 && n2 > n3) {
        return n2;
    } else {
        return n3;
    }
};
console.log(`The greater number of 2, 7 and 5 is ${ maxOfThree(2, 7, 5)} `);

// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
function vowel(char) {
    if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
        return true;
    } else {
        return false;
    }
};
console.log(vowel('a'));
console.log(vowel('u'));
console.log(vowel('t'));

// Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.
const numberOfArray = [1, 5, 9, 24, 12, 8, 14];
function sumArray(array) {
    let sum = 0;
    for (i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
};
console.log(sumArray(numberOfArray));

function multiplyArray(array) {
    let multiply = 1;
    for (j = 0; j < array.length; j++) {
        multiply *= array[j];
    }
    return multiply;
};   
console.log(multiplyArray(numberOfArray));

// Bonus
// Define a function reverseString that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".
function reverseString(str) {
    let splitString = str.split('');
    let reversedString = splitString.reverse();
    let newString = reversedString.join('');
    return newString;
};
console.log(reverseString('pinapple'));

// Write a function findLongestWord that takes an array of words and returns the length of the longest one.
const words = ['apple', 'orange', 'grape', 'watermelon', 'guava'];
function findLongestWord() {
    let longest = 0;
    for (i = 0; i < words.length; i++) {
        if (words[i].length > longest) {
            longest = words[i].length;
        }  
    } 
    return longest;
};
console.log(findLongestWord());

// Write a function filterLongWords that takes an array of words and an number i and returns the array of words that are longer than i.

const arrayOfWords = ['apple', 'orange', 'grape', 'watermelon', 'guava'];
function filterLongWords(arrayOfWords, i) {
    let longerThanI = [];
    for (j = 0; j  < arrayOfWords.length; j++) {
        if (arrayOfWords[j].length > i) {
            longerThanI.push(arrayOfWords[j]);
        }
    }
    return longerThanI;
};
console.log(filterLongWords(arrayOfWords, 5));