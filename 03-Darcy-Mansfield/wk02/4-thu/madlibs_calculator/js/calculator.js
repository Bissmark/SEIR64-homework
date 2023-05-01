// Create a new Javascript file and link to it with a script tag at the bottom.
// For each operation, create an event listener for the button, and when it's clicked, find the value of the appropriate input and show the result of the calculation in the solution div.
// Bonus: respond to key presses so that the user doesn't have to click the button.
 

$('#square-button').on('click', function() {
    let input = + $('#square-input').val();
    $('#solution').text(`The solution is ${ input * input }.`);
})

$('#half-button').on('click', function() {
    let input = + $('#half-input').val();
    $('#solution').text(`The solution is ${ input / 2 }.`);
})

$('#percent-button').on('click', function() {
    let pc1 = + $('#percent1-input').val();
    let pc2 = + $('#percent2-input').val();
    $('#solution').text(`The solution is ${ pc1 * pc2 }.`);
})

$('#area-button').on('click', function() {
    let input = + $('#area-input').val();
    $('#solution').text(`The area of the circle is ${ Math.PI * input * input }.`);
})