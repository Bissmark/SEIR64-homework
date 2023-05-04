// Write code inside the functions
// You will have to figure out what parameters to include
// All functions must use recursion

function findMax(arr, index = 0, largest = undefined){
    // This function returns the largest number in a given array.
    if (index === arr.length) return largest;
    if (arr[index] > largest || largest === undefined) largest = arr[index];
    return findMax(arr, ++index, largest);
}

function factorial(number, count = 1, total = 1){
    // This function returns the factorial of a given number.
    if (count > number) return total;
    total *= count;
    return factorial(number, ++count, total);
}

function fibonacci(number, inc = 3, num1 = 1, num2 = 1){
    // This function returns the Nth number in the fibonacci sequence.
    // For this function, the first two fibonacci numbers are 1 and 1
    if (number === 1 || number === 2) return 1;
    if (inc === number) return num1 + num2;
    num1 += num2;
    return fibonacci(number, ++inc, num2, num1);

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