//Create a new Javascript file and link to it with a script tag at the bottom.
//For each operation, create an event listener for the button, and when it's clicked, find the value of the appropriate input and show the result of the calculation in the solution div.
//Bonus: respond to key presses so that the user doesn't have to click the button.

$('#square-button').on('click', function(){
    const number = $('#square-input').val();
    const square = number * number;
    $('#solution').append(square);
});

$('#half-button').on('click',function(){
    const number = $('#half-input').val();
    const half = number / 2;
    $('#solution').append(half);
});

//how to get franctin???

$('#area-button').on('click', function(){
    const radius = $('#area-input').val();
    const area = Math.PI * (radius + radius);
    $('#solution').append(area); 
})