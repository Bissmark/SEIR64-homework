console.log('About me')

// (In JS) Change the body tag's style so it has a font-family of "Arial, sans-serif".

// (In JS) Replace each of the spans (nickname, favorites, hometown) with your own information.

// Iterate through each li and change the class to "listitem". Add a style tag that sets a rule for "listitem" to make the color red.

// Create a new img element and set its src attribute to a picture of you. Append that element to the page.

$('body').css('font-family', 'Arial, sans-serif')
$('#nickname').html('Shuvy')
$('#favorites').html('Grapes')
$('#hometown').html('Sydney')
$('li').addClass('listitem').css('color', 'red')
$('body').append($('<img>').attr('src', 'me.jpg').css('width', '200px'));

