// Write code inside the functions
// You will have to figure out what parameters to include
// All functions must use recursion

function findMax(array){
    if (array.length === 1) { // base case
        return array[0];
    } if (array[0] > array[1]) {
        return findMax(array.slice(1));
    }
    return array[1];
    // This function returns the largest number in a given array.
};

console.log(findMax([1, 2, 3]));



function factorial(num){
    // This function returns the factorial of a given number.
    if (num === 1) return 1; // base case - where to stop the code. 
    return num * factorial(num - 1); // recursive call 
    
};

// 5 * factorial(4) = 5 * 4 => 5 * 24
// 4 * factorial(3) = 4 * 3 => 4 * 6  
// 3 * factorial(2) = 3 * 2 => 3 * 2
// 2 * factorial(1) = 2 * 1 => 2 * 1
// 1 = 1

console.log(factorial(5))


function fibonacci(n){
    if (n <= 2) {
        return 1;
    } else {
        fibonacci(n-1) + fibonacci(n-2);
    };
    // This function returns the Nth number in the fibonacci sequence.
    // https://en.wikipedia.org/wiki/Fibonacci_number
    // For this function, the first two fibonacci numbers are 1 and 1
};

console.log(fibonacci(3));


function coinFlips(n, sequence = '') {
    if (n <= 0) {
     return sequence;
    } else {
        const results = [];
        results.push(coinFlips(n - 1, sequence + 'H'));
        results.push(coinFlips(n - 1, sequence + 'T'));
        return results;
    };
    // This function returns an array of all possible outcomes from flipping a coin N times.
    // Input type: Integer
    // For example, coinFlips(2) would return the following:
    // ["HH", "HT", "TH", "TT"]
    // H stands for Heads and T stands for tails
    // Represent the two outcomes of each flip as "H" or "T"
}

console.log(coinFlips(2));




function letterCombinations(array){
    if (array.length === 0) {
        return ['']
    } // get the first letter
    // get remaining ketters

    // get all combincations

    // create an empty array to store results 
    // combine first letter with each combo 
    // loop here

    // push the results 
    
    // This function returns an array of all combinations of the given letters
    // Input type: Array of single characters
    // For example, letterCombinations(["a","b","c"]) would return the following:
    // ["a","b","c","ab","ac","ba","bc","ca","cb","abc","acb","bac","bca","cab","cba"]
}

console.log(letterCombinations(["a","b","c"]));

module.exports = {
    findMax,
    factorial,
    fibonacci,
    coinFlips,
    letterCombinations
}