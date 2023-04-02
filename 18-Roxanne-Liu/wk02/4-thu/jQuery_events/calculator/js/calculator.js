//
const square = function() {
  let answer = $('#square-input').val() ** 2;
  $('#solution').html(answer);
};

$('#square-button').on('click', square);


//
const half = function() {
  let answer = $('#half-input').val() / 2;
  $('#solution').html(answer);
};

$('#half-button').on('click', half);


//
const percent = function() {
  let answer = $('#percent1-input').val() / $('#percent2-input').val() * 100 + '%';
  $('#solution').html(answer);
};

$('#percent-button').on('click', percent);


//
const area = function() {
  let answer = Math.PI * $('#area-input').val() * $('#area-input').val();
  $('#solution').html(answer);
};

$('#area-button').on('click', area);