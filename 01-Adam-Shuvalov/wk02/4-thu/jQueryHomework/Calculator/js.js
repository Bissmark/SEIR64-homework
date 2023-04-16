
console.log('Calculator')


// For each operation, create an event listener for the button, and when it's clicked, find the value of the appropriate input and show the result of the calculation in the solution div.
// Bonus: respond to key presses so that the user doesn't have to click the button.

//Square number

$('#square-button').on('click', function (){
    $('#solution').html($('#square-input').val() * $('#square-input').val())
});

//Half number

$('#half-button').on('click', function (){
    $('#solution').html($('#half-input').val() / 2)
})

//Fraction ?



//Whole ?



//Calculate area of circle with radius:

$('#area-button').on('click', function () {
    $('#solution').html(Math.PI * $('#area-input').val() * $('#area-input').val())
})
