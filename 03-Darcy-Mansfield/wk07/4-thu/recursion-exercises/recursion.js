// Write code inside the functions
// You will have to figure out what parameters to include
// All functions must use recursion

function findMax(arr){
    // This function returns the largest number in a given array.
    if (arr.length == 1) {
        return arr[0];
    };
    if (arr[0] < arr[1]) {
        arr.shift();
        return findMax(arr);
    } else {
        arr[1] = arr[0];
        arr.shift();
        return findMax(arr);
    };
}

function factorial (num, sum=1) {
    // This function returns the factorial of a given number.
    if (num == 1) {
        return(sum);
    };
    sum *= num;
    num -= 1;
    return factorial(num, sum);
}

function fibonacci(index, fibA = 1, fibB = 1) {
    // This function returns the Nth number in the fibonacci sequence.
    // https://en.wikipedia.org/wiki/Fibonacci_number
    // For this function, the first two fibonacci numbers are 1 and 1
    if (index == 1) {return fibA}
    fibB += fibA;
    fibA = fibB - fibA;
    index--;
    return fibonacci(index, fibA, fibB);
}

function coinFlips(numFlips, outcome=[]){
    // This function returns an array of all possible outcomes from flipping a coin N times.
    // Input type: Integer
    // For example, coinFlips(2) would return the following:
    // ["HH", "HT", "TH", "TT"]
    // H stands for Heads and T stands for tails
    // Represent the two outcomes of each flip as "H" or "T"
    console.log(numFlips);
    if (numFlips === 1) {return outcome};
    for (n=0; n<numFlips; n++) {
        if (n % 2 === 0) {
            outcome[n] += 'H';
        } else {
            outcome[n] += 'T';
        }
        numFlips--;
        return coinFlips(numFlips, outcome);
    }
}


function letterCombinations(letters, output=[]){
    // This function returns an array of all combinations of the given letters
    // Input type: Array of single characters
    // For example, letterCombinations(["a","b","c"]) would return the following:
    // ["a","b","c","ab","ac","ba","bc","ca","cb","abc","acb","bac","bca","cab","cba"]
    
    for (i=0; i<letters.length; i++) {
        output.push(letters[i]);
    }
    console.log(output);
}

module.exports = {
    findMax,
    factorial,
    fibonacci,
    coinFlips,
    letterCombinations
}