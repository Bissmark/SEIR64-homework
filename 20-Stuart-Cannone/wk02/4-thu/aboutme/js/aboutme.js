// (In JS) Change the body tag's style so it has a font-family of "Arial, sans-serif".
$('body').css("font-family", "Arial")

// (In JS) Replace each of the spans (nickname, favorites, hometown) with your own information.
$("#nickname").text("Stu")
$("#favorites").text("Chocolate, JQuery")
$('#hometown').text("Sydney")
// Iterate through each li and change the class to "listitem". Add a style tag that sets a rule for "listitem" to make the color red.
$("li").css("color","red"); // didnt see a need to add a class with jQuery
// Create a new img element and set its src attribute to a picture of you. Append that element to the page.
const img = $('<img>');
img.attr('src', 'http://www.placekitten.com/250/250')
$("body").append(img)