// ## Calculator

// Start with this webpage, which has inputs and buttons for things to calculate: 
// ```html
// <!DOCTYPE html>
// <html>
// <head>
// <meta charset=utf-8 />
// <title>Calculator</title>
// </head>
// <body>

//   <label>Square this number:
//     <input type="number" id="square-input" size="2">
//   </label>
//   <button id="square-button">Calculate</button>
//   <br><br>
  
//   <label>Half this number:
//     <input type="number" id="half-input" size="2">
//   </label>
//   <button id="half-button">Calculate</button>
//   <br><br>
  
//   <label>
//     Fraction:
//     <input type="number" id="percent1-input" size="2">
//   </label>
//   <label>
//     Whole:
//     <input type="number" id="percent2-input" size="2">
//   </label>
//   <button id="percent-button">Calculate</button>
//   <br><br>
  
//   <label>Calculate area of circle with radius:
//     <input type="number" id="area-input" size="2">
//   </label>
//   <button id="area-button">Calculate</button> 
//   <br><br>
//   <div id="solution"></div>

  
// </body>
// </html>
// ```
// - Create a new Javascript file and link to it with a script tag at the bottom.
// - For each operation, create an event listener for the button, and when it's clicked, find the value of the appropriate input and show the result of the calculation in the solution div.
// - Bonus: respond to key presses so that the user doesn't have to click the button.

// Square
const squareNumber = function () {
    const number = $('#square-input').val();
    $('#solution').html(`${ number } squared is ${ number * number }!`);
}

$('#square-button').on('click', squareNumber);

// Half
const halfNumber = function () {
    const number = $('#half-input').val();
    $('#solution').html(`Half of ${ number } is ${ number / 2 }!`);
}

$('#half-button').on('click', halfNumber);

//Fraction
const fractionOfNumber = function () {
    const fraction = $('#percent1-input').val();
    const number = $('#percent2-input').val();
    $('#solution').html(`${ fraction } is ${ (fraction / number) * 100 }% of ${ number }`);
}

$('#percent-button').on('click', fractionOfNumber);

//Area
const areaOfCircle = function () {
    const radius = $('#area-input').val();
    $('#solution').html(`The area of a circle with a radius of ${ radius } is ${ Math.PI * (radius * radius) }!`);
}

$('#area-button').on('click', areaOfCircle);