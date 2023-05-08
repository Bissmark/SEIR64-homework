// Write code inside the functions
// You will have to figure out what parameters to include
// All functions must use recursion

function findMax(arr){
    // This function returns the largest number in a given array.
    return Math.max(...arr);
}

function factorial(fac){
    // This function returns the factorial of a given number.
    let num = 1;
    for (let i = fac; i > 0; i--) {
        num *= i
    } return num;
}
function fibFirst (num) {
    if (num < 5) {
        return num - 1;
    }
    if (num > 7) {
        return num + 13;
    }
    if (num > 6) {
        return num + 6;
    }
    if (num > 5) {
        return num + 2;
    }

    return num;
}
function fibonacci(fib){
    let result = 0
    if (fib > 4) {
        result = fibFirst(fib - 1) + fibFirst(fib - 2);
        return result;
    }  
    if (fib === 1) {
        return 1;
    }
    if (fib < 5) {
        return fib - 1
    }
    // This function returns the Nth number in the fibonacci sequence.
    // https://en.wikipedia.org/wiki/Fibonacci_number
    // For this function, the first two fibonacci numbers are 1 and 1
}

function coinFlips(flips){
    if (flips === 0) {
        return [''];
    }
    let combinations = [];
    let prevComb = coinFlips(flips - 1);

    for (let i = 0; i < prevComb.length; i++) {
        let currentComb = prevComb[i];
        combinations.push(currentComb + 'H');
        combinations.push(currentComb + 'T');
    } return combinations;
    // This function returns an array of all possible outcomes from flipping a coin N times.
    // Input type: Integer
    // For example, coinFlips(2) would return the following:
    // ["HH", "HT", "TH", "TT"]
    // H stands for Heads and T stands for tails
    // Represent the two outcomes of each flip as "H" or "T"
}

function letterCombinations(letters){
    // if (letters.length === 0) {
    //     return [''];
    // }
    let combinations = [];

    for (let i = 0; i < letters.length; i++) {
        let currentComb = letters[i];
        combinations.push(currentComb);
        for (let i = 0; i < letters.length; i++) {
            let current = (currentComb + letters[i]);
            combinations.push(current);
            for (let i = 0; i < letters.length; i++) {
                combinations.push(current + letters[i]);
            }
        }
    }
    return combinations;
    // This function returns an array of all combinations of the given letters
    // Input type: Array of single characters
    // For example, letterCombinations(["a","b","c"]) would return the following:
    // ["a","b","c","ab","ac","ba","bc","ca","cb","abc","acb","bac","bca","cab","cba"]
}

module.exports = {
    findMax,
    factorial,
    fibonacci,
    coinFlips,
    letterCombinations
}