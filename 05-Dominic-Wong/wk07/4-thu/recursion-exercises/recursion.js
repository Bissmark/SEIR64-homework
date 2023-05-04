// Write code inside the functions
// You will have to figure out what parameters to include
// All functions must use recursion

function findMax(arr){
    // This function returns the largest number in a given array.
    let index = 1; // start at 1 because first number is defaulted to max
    let max = arr[0]; // takes first number as the largest number

    const rMax = function() {
        if ( index === arr.length ) {
            return max;
        };
        //
        if ( max < arr[index] ) {
            max = arr[index];
        }

        index++;
        return rMax();
    };

    return rMax();
};

function factorial(num){
    // This function returns the factorial of a given number.
    let next_num = num - 1; // 
    
    if ( num === 1 ) {
        return num;
    };

    return num * factorial(next_num); // feedback next_num to the function so it decreases again
}



function fibonacci(n){
    // This function returns the Nth number in the fibonacci sequence.
    // https://en.wikipedia.org/wiki/Fibonacci_number
    // For this function, the first two fibonacci numbers are 1 and 1
    
    if ( n <= 1 ) {
        return n;
    }

    return fibonacci(n-1) + fibonacci(n-2);

}

function coinFlips( n ){
    // This function returns an array of all possible outcomes from flipping a coin N times.
    // Input type: Integer
    // For example, coinFlips(2) would return the following:
    // ["HH", "HT", "TH", "TT"]
    // H stands for Heads and T stands for tails
    // Represent the two outcomes of each flip as "H" or "T"
    let results = []; // empty array to store results
    l

    if ( n === 0 ) {
        return results;
    }


    coinFlips(n - 1);

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