// Write code inside the functions
// You will have to figure out what parameters to include
// All functions must use recursion

function findMax(){
    const numbers = [1, 3, 2, 4, -2];
    return Math.max(...numbers);
}

console.log(findMax());


function factorial(num){
        let result = 1;
        for(let i = 1; i <= num; i++){
            result *= i;
        }
        return result;
    }
    console.log(factorial(5)); 

    function fibonacci(n) {
        if (n <= 2) {
          return 1;
        }
        let previous = 1;
        let current = 1;
    
        for (let i = 3; i <= n; i++) {
          let next = previous + current;
          previous = current;
          current = next;
        }
        return current;
      }
      
    

    function coinFlips(n) {
        const outcomes = [];
        const coin = ["H", "T"];

        function backtrack(str, flips) {
          if (flips === n) {
            outcomes.push(str);
            return;
          }
          for (let i = 0; i < coin.length; i++) {
            backtrack(str + coin[i], flips + 1);
          }
        }
        backtrack("", 0);
        return outcomes;
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