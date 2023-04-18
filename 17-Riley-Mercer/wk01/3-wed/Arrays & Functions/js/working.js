// Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.
const maxOfTwoNumbers = function(a,b){
    if (a > b){
        return a
    }   if (a < b){
            return b
    }   else{
        return "you make a mistake here somewhere"
    }
}
console.log(maxOfTwoNumbers(5,9));


// Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.
const maxOfThree = function(a,b,c){
    if (a >= b && a >= c){
        return a
    }   if (b >= a && b >= c){
        return b
    }   if (c >= a && c >= b){
        return c
    }   else{
        return "you make a mistake here somewhere"
    }
}
console.log(maxOfThree(112,34,22));

// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
const vowelCheck = function (a){
    if (a === "a" || a === "e" || a === "i" || a === "o" || a === "u"){
        return "true"
    } else {
        return "false"
    }
}
console.log(vowelCheck("e"))

// Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.

// const workingArray = [1,2,3,4,5]
// const sumArray = function(){
// const notWorkingArray = [1,2,3,4,5];
// for (let a = 0; a < notWorkingArray.length; a++) {
//     result = result + a;
// return result
// }

// console.log(sumArray)

const sumArray = function() {
    const workingArray = [2, 2, 3, 4];
    let result = 0;
    for (let a = 0; a < workingArray.length; a++) {
      result += workingArray[a];
    }
    return result;
  }
  console.log(sumArray());

  const multiArray = function() {
    const notWorkingArray = [1, 2, 3, 4];
    let resultTwo = 1;                                      //This feels like the incorrect way to do this, but it worked?
    for (let b = 0; b < notWorkingArray.length; b++) {
      resultTwo = resultTwo * notWorkingArray[b];
    }
    return resultTwo;
  }
  console.log(multiArray());