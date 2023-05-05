// Write code inside the functions
// You will have to figure out what parameters to include
// All functions must use recursion

function findMax(array){
    if (array.length === 0) { // base case
        return array[0];
    } if (array[0] > array[1]) {
        let newArray =  findMax(array.slice(1));
        return newArray;
    }
    // This function returns the largest number in a given array.
}

// code does not work - still a WIP
console.log(findMax([1, 2, 3]));

function factorial(num){
    // This function returns the factorial of a given number.
    if (num === 1) return 1; // base case - where to stop the code. 
    return num * factorial(num - 1); // recursive call 
    
}


// 5 * factorial(4) = 5 * 4 => 5 * 24
// 4 * factorial(3) = 4 * 3 => 4 * 6  
// 3 * factorial(2) = 3 * 2 => 3 * 2
// 2 * factorial(1) = 2 * 1 => 2 * 1
// 1 = 1

console.log(factorial(5))


function fibonacci(){
    // This function returns the Nth number in the fibonacci sequence.
    // https://en.wikipedia.org/wiki/Fibonacci_number
    // For this function, the first two fibonacci numbers are 1 and 1
}

function coinFlips(){
    // This function returns an array of all possible outcomes from flipping a coin N times.
    // Input type: Integer
    // For example, coinFlips(2) would return the following:
    // ["HH", "HT", "TH", "TT"]
    // H stands for Heads and T stands for tails
    // Represent the two outcomes of each flip as "H" or "T"
}

function letterCombinations(){
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