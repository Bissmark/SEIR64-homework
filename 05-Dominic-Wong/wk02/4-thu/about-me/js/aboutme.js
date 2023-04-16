// Create a new Javascript file and link to it with a script tag at the bottom.
// (In JS) Change the body tag's style so it has a font-family of "Arial, sans-serif".

// (In JS) Replace each of the spans (nickname, favorites, hometown) with your own information.

// Iterate through each li and change the class to "listitem". Add a style tag that sets a rule for "listitem" to make the color red.
// const items = document.getElementsByTagName('li');

// Create a new img element and set its src attribute to a picture of you. Append that element to the page.

$('body').css('fontFamily','Arial, sans-serif');
$('#nickname').html('Dom');
$('#favorites').html('Baloney Sando');
$('#hometown').html('Auckland');

$('li').attr('class', 'listitem')

$('<img>').attr('src', 'https://placekitten.com/200/300').appendTo('body')