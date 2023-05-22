// Write code inside the functions
// You will have to figure out what parameters to include
// All functions must use recursion
let maxNum = 0;
function findMax(nums) {
  if (nums.length === 1) {
    return nums[0];
  }

  const firstElement = nums[0];
  const tailOfNums = nums.slice(1);
  const maxOfTail = findMax(tailOfNums);

  return max(firstElement, maxOfTail);
}

function max(a, b) {
  if (b > a) {
    return b;
  } else {
    return a;
  }
}

findMax([22, 44, 66, 8]);

function factorial(num) {
  // factorial(3) === 3! = 3 x 2 x 1 , 5! = 5 * (4 * 3 * 2 * 1) = 5 * 4! = 5 * 4 * 3! = 5 * 4 * 3 * 2!
  if (num === 1) {
    return 1;
  } else {
    let next = num - 1;
    return num * factorial(next);
  }
}

function fibonacci(n) {

  

    }

  //   if (n <= 1) {
  //     return n;
  //   }
  // This function returns the Nth number in the fibonacci sequence.
  // https://en.wikipedia.org/wiki/Fibonacci_number
  // For this function, the first two fibonacci numbers are 1 and 1


function coinFlips(n) {
  //   // This function returns an array of all possible outcomes from flipping a coin N times.
  //   // Input type: Integer
  //   // For example, coinFlips(2) would return the following:
  //   // ["HH", "HT", "TH", "TT"]
  //   // H stands for Heads and T stands for tails
  //   // Represent the two outcomes of each flip as "H" or "T"
}


function letterCombinations(charsArray) {
  if ((chars.length = 1)) {
    return chars[0];
  } else {
    let next = charsArray[1];
    // const combinedChars = charsArray[0] 
  }
}
//   console.log(letterCombinations(["a", "b", "c"]));
// This function returns an array of all combinations of the given letters
// Input type: Array of single characters
// For example, letterCombinations(["a","b","c"]) would return the following:
// ["a","b","c","ab","ac","ba","bc","ca","cb","abc","acb","bac","bca","cab","cba"]
// }

module.exports = {
  findMax,
  factorial,
  fibonacci,
  coinFlips,
  letterCombinations,
};
