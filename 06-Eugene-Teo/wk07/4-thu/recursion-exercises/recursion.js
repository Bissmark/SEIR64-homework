// Write code inside the functions
// You will have to figure out what parameters to include
// All functions must use recursion

// 1. This function returns the largest number in a given array.
function findMax(arr, index = 0, num = 0) {
    if(index === arr.length){
        return num;
    };
    if (index === 0) {
        num = arr[index];
        return findMax(arr, index + 1, num); // forces num = array[0], so that it works when the numbers are negative 
    };
    if (arr[index] > num ) {
        num = arr[index];
    };
    return findMax(arr, index + 1, num);
}

// console.log(findMax([-5, -1, -2, -3, -4, -5])); // => -1  method works
//-------------------------------------------------------------------------------

// 2. This function returns the factorial of a given number.
function factorial(n){
    if (n === 1) {
        return 1;
    };
    return factorial(n - 1) * n;
}

// console.log(factorial(4)); => 24
// factorial(4)
// factorial(3) * 4
// factorial(2) * 3
// factorial(1) * 2 = 1, => n = 1 and returns 1
// computer evaluates upstream
// factorial(2) = factorial(1) * 2 = (1 * 2) = 2 
// factorial(3) = factorial(2) * 3 = (2 * 3) = 6 
// factorial(4) = factorial(3) * 4 = (6 * 4) = 24 




//-----------------------------------------------------------------------
// 2. This function returns the Nth number in the fibonacci sequence.
//For this function, the first 2 fibonacci numbers start with 0 and 1
// function fibonacci1(n){
//     if (n === 1) {
//         return 0                           // return 1 if fibonacci numbers start with 1 and 1
//     } else if (n === 2) {
//         return 1
//     };    
//     return fibonacci1(n-1) + fibonacci1(n-2);     
// }

// For this function, the first two fibonacci numbers are 1 and 1
function fibonacci(n){
    if ((n === 1) || (n === 2)) {
        return 1;
    };    
    return fibonacci(n-1) + fibonacci(n-2);
}    
// 1, 2, 3, 4, 5, 6, 7, 8th number.....
// 1, 1, 2, 3, 5, 8, 13, 21.....


//---------------------------------------------------------------------------------------------
// 4. This function returns an array of all possible outcomes from flipping a coin N times.
// Input type: Integer
// For example, coinFlips(2) would return the following:
// ["HH", "HT", "TH", "TT"]
// H stands for Heads and T stands for tails
// Represent the two outcomes of each flip as "H" or "T"
function coinFlips(n) {
     if (n === 1) {
        return ["H", "T"];
    };
    return coinFlips(n-1).map(x => x + 'H').concat(coinFlips(n-1).map(x => x + 'T')); //map is similar to forEach(but returns a new array, unlike forEach), adds a H or T to end of string; concat joins 2 arrays resulting in [ 'HH', 'TH', 'HT', 'TT' ], else using + instead of concat between both arrays will return this string [HH,THHT,TT] which is not correct
}

// console.log(coinFlips(3)); // => 'HHH', 'THH','HTH', 'TTH','HHT', 'THT','HTT', 'TTT'

//----------------------------------------------------------------------------------------
function letterCombinations(){
    // This function returns an array of all combinations of the given letters
    // Input type: Array of single characters
    // For example, letterCombinations(["a","b","c"]) would return the following:
    // ["a","b","c","ab","ac","ba","bc","ca","cb","abc","acb","bac","bca","cab","cba"]
}
//base case....array.length??? Not sure how to solve


module.exports = {
    findMax,
    factorial,
    fibonacci,
    coinFlips,
    letterCombinations
}
















// From GA recursion topic + extra reverseString recursion question just for self learning
// function countDown(num){
//     if(num < 0){
//       return;
//     }
//     console.log(num)
//     return countDown(num - 1)
//   }

//   countDown(3);

// function sumArrayOfNums(arr, index = 0, sum = 0){
//     if(index === arr.length){
//         return sum;
//     };
//     sum += arr[index];
//     return sumArrayOfNums(arr, index + 1, sum);
// }

// console.log(sumArrayOfNums([2, 4, 5, 8]));

// function sumOfArray(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     };
//     return sum;
// }

// console.log(sumOfArray([1, 2, 3]));


// function reverseString(string) {
//     if (string.length === 1) {
//         return string;
//     };
//     return reverseString(string.slice(1, string.length)) + string.charAt(0);
// }
// console.log(reverseString("abcd")); // => "dcba"



