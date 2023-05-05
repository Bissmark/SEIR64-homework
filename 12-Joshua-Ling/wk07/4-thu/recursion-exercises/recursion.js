// Write code inside the functions
// You will have to figure out what parameters to include
// All functions must use recursion

function findMax(arr, largest = undefined){
    // This function returns the largest number in a given array.
    if (arr.length === 0) return largest;
    const value = arr.pop();
    if (value > largest || largest === undefined) largest = value;
    return findMax(arr, largest);
}

function factorial(number){
    // This function returns the factorial of a given number.
    if (number <= 1) {
        return 1;
    }
    return  number * factorial(number - 1);
}

function fibonacci(n){
    // This function returns the Nth number in the fibonacci sequence.
    // For this function, the first two fibonacci numbers are 1 and 1
    if (n === 1 || n === 2) return 1;
    return fibonacci(n-1) + fibonacci(n-2);
}

function coinFlips(number, count = 0, arr = []){
    // This function returns an array of all possible outcomes from flipping a coin N times.
    // Input type: Integer
    // For example, coinFlips(2) would return the following:
    // ["HH", "HT", "TH", "TT"]
    // H stands for Heads and T stands for tails
    // Represent the two outcomes of each flip as "H" or "T"
    let newArr = [];
    if (count > number) return arr;
    if (count === 1) {
        newArr = ["H", "T"]
    }
    else {
        arr.forEach(e => {
            newArr.push(e+"H");
            newArr.push(e+"T");
        });
    }
    return coinFlips(number, ++count, newArr);
}

function letterCombinations(arr, inc = 1, comboArr = arr){
    // This function returns an array of all combinations of the given letters
    // Input type: Array of single characters
    // For example, letterCombinations(["a","b","c"]) would return the following:
    // ["a","b","c","ab","ac","ba","bc","ca","cb","abc","acb","bac","bca","cab","cba"]
    newArr = [];
    if (inc === arr.length) return comboArr;
    arr.forEach(e => {
      comboArr.forEach(f => {
        if (f.length === inc) newArr.push(e+f);
      });    
    });
  
    newArr = comboArr.concat(newArr);
    return letterCombinations(arr, ++inc, newArr);
  }

module.exports = {
    findMax,
    factorial,
    fibonacci,
    coinFlips,
    letterCombinations
}