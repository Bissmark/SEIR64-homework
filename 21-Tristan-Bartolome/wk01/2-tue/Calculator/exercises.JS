// The Calculator
// Part 1
// Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."
console.log("Test");
const squareNumber = function (num) {
    const num2 = num * num;
    console.log(`The result of squaring the number ${num} is ${num2}`);
    return num2;
}
squareNumber(3);

// Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".
const halfNumber = function (num) {
    const num2 = num / 2;
    console.log(`Half of ${num} is ${num2}`);
    return num2;
}
halfNumber(4);

// Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."
const percentOf = function (num1, num2) { 
    const percentage = (num2 / 100) * num1;
    console.log(`${percentage} is ${num1}% of ${num2}`);
    return percentage;
}
percentOf(50, 400);

// Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
const areaOfCircle = function (radius) {
    const area = Math.round(Math.PI * (radius * radius));
    console.log(`The area for a circle with a radius ${radius} is ${area}`);
    return area;
}
areaOfCircle(2);
// Bonus: Round the result so there are only two digits after the decimal.


// Part 2



// Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:
const calculator = function (num) {
    const num2 = percentOf(areaOfCircle(squareNumber(halfNumber(num))));
    console.log();
    return num2;
}
calculator(100);
// Take half of the number and store the result.
// Square the result of #1 and store that result.
// Calculate the area of a circle with the result of #2 as the radius.
// Calculate what percentage that area is of the squared result (#3).