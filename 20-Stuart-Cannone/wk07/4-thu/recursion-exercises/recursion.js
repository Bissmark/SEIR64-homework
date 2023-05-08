// Write code inside the functions
// You will have to figure out what parameters to include
// All functions must use recursion

function findMax(nums){
    // This function returns the largest number in a given array.
    if (nums.length === 1) {
        return nums[0];  //  base case
    }
    const maxRest = findMax(nums.slice(1));
    return nums[0] > maxRest ? nums[0] : maxRest;
}
    

function factorial(n){
    // This function returns the factorial of a given number.
    
        if (n === 0) {
            return 1;   // base case
        } 
        else {
            return n * factorial(n - 1);
        }

}

function fibonacci(n){
    // This function returns the Nth number in the fibonacci sequence.
    // https://en.wikipedia.org/wiki/Fibonacci_number
    // For this function, the first two fibonacci numbers are 1 and 1
    if (n === 0) {
        return 0; // base case for 0
    } 
    else if (n === 1) {
        return 1; // base case: for 1
    } 
    else {
        return fibonacci(n - 1) + fibonacci(n - 2); // recursive case: F(n) = F(n-1) + F(n-2)
    }
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