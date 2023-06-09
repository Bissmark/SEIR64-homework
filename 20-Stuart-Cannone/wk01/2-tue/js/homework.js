// Write a function called square Number that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."
// Write a function called half Number that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".
// Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."
// Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
// Bonus: Round the result so there are only two digits after the decimal.

const squareNum = function(a) {
    const squareSolution = a ** 2
    return squareSolution
}
console.log("the result of squaring the number 3 is " + squareNum(3)) // Output: 9

// Write a function called half Number that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".
const halfNum = function(a) {
    const halfSolution = a / 2
    return halfSolution
}
console.log("half of the number 5 is " + halfNum(5));

// Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."
const percentOf = function(a, b) {
    const percentSolution = a / b *100
    return percentSolution
}
console.log("2 is " + percentOf(2, 4) + "%" + " of 4 ")

// Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."

const calcArea = function (radius) {
    const area = Math.PI * radius * radius; // pi * r ^ 2
    console.log(`The area is ${ area }`);
};

calcArea(2);

// Bonus: Round the result so there are only two digits after the decimal.


//PART 2
// Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:

// Take half of the number and store the result.
// Square the result of #1 and store that result.
// Calculate the area of a circle with the result of #2 as the radius.
// Calculate what percentage that area is of the squared result (#3).

const finalTask = function (a) {
    const halfSolution = a / 2
    const squareSolution = halfSolution ** 2;
    const circleArea = Math.PI * squareSolution * squareSolution;
    const areaPercentage = circleArea / squareSolution 

    return areaPercentage;
}

console.log(finalTask(4))