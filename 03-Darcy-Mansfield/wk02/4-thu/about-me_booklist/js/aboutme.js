
// Create a new Javascript file and link to it with a script tag at the bottom.
// (In JS) Change the body tag's style so it has a font-family of "Arial, sans-serif".
// (In JS) Replace each of the spans (nickname, favorites, hometown) with your own information.
// Iterate through each li and change the class to "listitem". Add a style tag that sets a rule for "listitem" to make the color red.
// Create a new img element and set its src attribute to a picture of you. Append that element to the page.

// const body = document.querySelector('body');
// body.style.fontFamily = "Arial, sans-serif";

// const nickname = document.getElementById('nickname');
// nickname.innerHTML = "Magic"
// const favorites = document.getElementById('favorites');
// favorites.innerHTML = "Taking names"
// const hometown = document.getElementById('hometown');
// hometown.innerHTML = "The Moon"

// const list = document.querySelectorAll('li');
// console.log(list);

// for (li in list) {
//     li.className = 'listitem';
// }

// document.getElementsByClassName('listitem').style.color = 'red'


$('body').css('font-family', 'Arial, sans-serif');
$('#nickname').html('Magic');
$('#favorites').html('Taking names');
$('#hometown').html('The Moon');

$('li').addClass('listitem');

$('.listitem').css('color', 'red');

$('<img src="http://placekitten.com/150/160" alt="kittens">').appendTo('body');


 