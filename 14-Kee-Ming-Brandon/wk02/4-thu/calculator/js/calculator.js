$('#square-button').on( 'click', function () {
    $('#solution').empty();
    const $num = $('#square-input').val();
    $('#solution').append( `Square of ${ $num } is equal to ${ $num ** 2 }.` );
});

$('#half-button').on( 'click', function () {
    $('#solution').empty();
    const $num = $('#half-input').val();
    $('#solution').append( `Half of ${ $num } is ${ $num / 2 }.`);
});


$('#percent-button').on( 'click', function () {
    $('#solution').empty();
    const $fraction = $('#percent1-input').val();
    const $whole = $('#percent2-input').val();
    $('#solution').append( `${ $fraction } is ${ $fraction/$whole*100 }% of ${ $whole }.` );
});

$('#area-button').on( 'click', function () {
    $('#solution').empty();
    const $num = $('#area-input').val();
    $('#solution').append( `A circle with a radius of ${ $num } has a total area of ${ $num * $num * Math.PI }.` );
});
