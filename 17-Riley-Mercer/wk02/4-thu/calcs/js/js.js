$('#square-button').on('click', function(){
const square = $('#square-input').val();
const squared = square * square;
alert(squared)
})

$('#half-button').on('click', function(){
const half = $('#half-input').val();
const halfed = half / 2;
alert(halfed)

})

$('#percent-button').on('click', function(){ //I'm still not sure how this one was supposed to work
const percent1 = $('#percent1-input').val();
const percent2 = $('#percent2-input').val();
const percented = percent1 * percent2;
alert(percented)

})

$('#area-button').on('click', function(){
const area = $('#area-input').val();
const aread = area * area * Math.PI;
alert(aread)

})
