// (In JS) Change the body tag's style so it has a font-family of "Arial, sans-serif".


// let bodyFont = document.body;
// bodyFont.style.fontFamily ='Arial, sans-serif';

$('body').css('font-family', 'Arial, sans-serif')

// ------------------------------------------------

// (In JS) Replace each of the spans (nickname, favorites, hometown) with your own information.

$('#nickname').text('Karen')
$('#favorites').text('Pho')
$('#hometown').text('Sydney, Australia')


// ------------------------------------------------



// Iterate through each li and change the class to "listitem". Add a style tag that sets a rule for "listitem" to make the color red.
$('li').attr('class', 'listitem');


// ------------------------------------------------

// Create a new img element and set its src attribute to a picture of you. A∂ppend that element to the page.\

let newText = $("<p>");
newText.text('hello!!!! test');
$('body').append(newText);

let newImage = $("<img>");
newImage.attr("src", "https://placekitten.com/150/160");
$('body').append(newImage)
