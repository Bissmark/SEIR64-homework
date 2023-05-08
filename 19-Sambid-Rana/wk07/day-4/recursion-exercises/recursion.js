// Write code inside the functions
// You will have to figure out what parameters to include
// All functions must use recursion

//get the first index value in maxNoInArray
//add index +1 and check if the value in the maxNoInArray is greater or smaller
// if it is smaller add the present index value to maxNo, else if it is greater ignore and continue rMax

//Find Max
function findMax(arr) {
  // This function returns the largest number in a given array.

  let maxNoInArray = arr[0];
  let index = 0;

  function rMax() {
    if (index >= arr.length) {
      console.log(maxNoInArray);
      return maxNoInArray;
    }

    if (arr[index] >= maxNoInArray) {
      //the statement stops after finding the first largest no. Not sure how to loop after that

      maxNoInArray = arr[index];
      index++;
      console.log(index, maxNoInArray);
      return rMax();
    }
  }
  return rMax();
}

findMax([1, 2, 7, 4, 15]);

// Factorial
function factorial(num) {
  // This function returns the factorial of a given number.
  if (num === 0) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
}
factorial([5]);



function fibonacci() {
  // This function returns the Nth number in the fibonacci sequence.
  // https://en.wikipedia.org/wiki/Fibonacci_number
  // For this function, the first two fibonacci numbers are 1 and 1
}

function coinFlips() {
  // This function returns an array of all possible outcomes from flipping a coin N times.
  // Input type: Integer
  // For example, coinFlips(2) would return the following:
  // ["HH", "HT", "TH", "TT"]
  // H stands for Heads and T stands for tails
  // Represent the two outcomes of each flip as "H" or "T"
}

function letterCombinations() {
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
  letterCombinations,
};
