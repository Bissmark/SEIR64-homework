// For each operation, create an event listener for the button, and when it's clicked, find the value of the appropriate input and show the result of the calculation in the solution div.
// Bonus: respond to key presses so that the user doesn't have to click the button.
$(document).ready(function() {
    $('#square-button').click(function() {
        const num = $('#square-input').val();
        const $square = num * num;

        $('#solution').append('<div>' + $square + '</div>');
    });
});

$(document).ready(function() {
    $('#half-button').click(function() {
        const num = $('#half-input').val();
        const $half = num / 2;

        $('#solution').append('<div>' + $half + '</div>');
    });
});

// fractions, wholes, area and radius are a little too complex 