// (In JS) Change the body tag's style so it has a font-family of "Arial, sans-serif".
$('body').css({'font-family': 'Arial, sans-serif'});

// (In JS) Replace each of the spans (nickname, favorites, hometown) with your own information.
$('#nickname').html('Marshall McLuhan');
$('#favorites').html('3');
$('#hometown').html('Edmonton');

// Iterate through each li and change the class to "listitem". Add a style tag that sets a rule for "listitem" to make the color red.

$('li').addClass('listitem').css({'color': 'red'});

// Create a new img element and set its src attribute to a picture of you. Append that element to the page.

$('body').append('<img src="http://placekitten.com/150/160">');