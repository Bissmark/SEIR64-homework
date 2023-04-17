console.log("is this thing on?");


//The Calculator 
//sqaure number
const squareNumber = function (number) {
    const squareNumber = number ** 2;
    console.log(`The result of squaring the number ${number} is ${squareNumber}.`)
}
squareNumber(3)

//half number
const halfNumber = function (number) {
    const halfNumber = number / 2; 
    console.log(`Half of ${number} is ${halfNumber}.`)
}
halfNumber(5)

//percent of
const percentOf = function (num1, num2) {
        const percentOf = num1/ 100 *num2; 
console.log(`${percentOf} is ${num2}% of ${num1}.`)
}
percentOf(50,30);

//artic circle 
const areaOfCircle = function (radius) {
    const areaOfCircle = Math.PI * (radius ** 2)
console.log(`The area for a circle with radius ${radius} is ${areaOfCircle}.`)
}
areaOfCircle(20);

//calculator PART 2
//half number
const calculatorII = function(startNum){
    const result = startNum / 2;
    const resultOne = result * result;
    const resultTwo = Math.PI * resultOne * resultOne;
    const resultThree = resultTwo / resultOne * 100;
    console.log(resultThree);
}
calculatorII(3);


/*
Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:

    Take half of the number and store the result.
    Square the result of #1 and store that result.
    Calculate the area of a circle with the result of #2 as the radius.
    Calculate what percentage that area is of the squared result (#3).

    */
   