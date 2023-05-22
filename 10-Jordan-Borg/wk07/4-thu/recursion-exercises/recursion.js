// Recursive function to find the largest number in an array
function findMax(arr) {
    if (arr.length === 1) {
        return arr[0];
    } else {
        var num = findMax(arr.slice(1));
        if (num > arr[0]) {
            return num;
        } else {
            return arr[0];
        }
    }
}
    
// Recursive function to find the factorial of a number
function factorial(num) {
    if (num === 0) {
        return 1;
    } else {
        return num * factorial(num - 1);
    }
}

// Recursive function to find the Nth number in the fibonacci sequence
function fibonacci(num) {
    if (num < 2) {
        return 1;
    } else {
        return fibonacci(num - 1) + fibonacci(num - 2);
    }
}
    
// Recursive function to generate all possible outcomes from flipping a coin N times
function coinFlips(num) {
    if (num === 1) {
        return ["H", "T"];
    } else {
        var current = coinFlips(num - 1);
        var result = [];
        for (var i = 0; i < current.length; i++) {
            result.push(current[i] + "H");
            result.push(current[i] + "T");
        }
        return result;
    }
}
    
// Recursive function to generate all letter combinations
function letterCombinations(arr) {
    if (arr.length === 0) {
        return [];
    } else if (arr.length === 1) {
        return arr;
    } else {
        var result = [];
        for (var i = 0; i < arr.length; i++) {
            var current = arr[i];
            var remaining = arr.slice(0, i).concat(arr.slice(i + 1));
            var combinations = letterCombinations(remaining);
            for (var j = 0; j < combinations.length; j++) {
                result.push(current + combinations[j]);
            }
        }
        return arr.concat(result);
    }
}
    
module.exports = {
    findMax,
    factorial,
    fibonacci,
    coinFlips,
    letterCombinations,
    };