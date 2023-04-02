/////////////////////////////////////////////////////////////////////

const square = function() {
  alert(Math.pow($('#square-input').val(), 2));
};

$('#square-button').on('click', square);

/////////////////////////////////////////////////////////////////////

const half = function() {
  alert($('#half-input').val() / 2);
};

$('#half-button').on('click', half);

/////////////////////////////////////////////////////////////////////

const percentA = function() {
  alert($('#percent1-input').val() / $('#percent2-input').val() * 100 + '%');
};

$('#percent-button').on('click', percentA);

/////////////////////////////////////////////////////////////////////

const area = function() {
  alert(Math.pow($('#area-input').val(), 2) * Math.PI);
};

$('#area-button').on('click', area);

/////////////////////////////////////////////////////////////////////