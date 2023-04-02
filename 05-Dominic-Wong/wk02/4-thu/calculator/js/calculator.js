
$('#square-button').on('click', function() {
    const number = $('#square-input').val()  // get number from input
    const output = number ** 2; // do math
    $('#solution').html(output); // return output
    // $('#solution').html($('#square-input').val()**2) // works too 
    
})

$('#half-button').on('click', function() {
    const number = $('#half-input').val() 
    const output = number / 2;
    $('#solution').html(output);
})

$('#percent-button').on('click', function() {
    const percent1 = $('#percent1-input').val(); // input is e.g 0.5
    const percent2 = $('#percent2-input').val(); // input is e.g 100
    const output =  percent1 * percent2
    $('#solution').html(output);
})

$('#area-button').on('click', function() {
    const radius = $('#area-input').val();
    const output = Math.PI * radius ** 2;
    $('#solution').html(output.toFixed(2)); // round to 2 decimal places
})
