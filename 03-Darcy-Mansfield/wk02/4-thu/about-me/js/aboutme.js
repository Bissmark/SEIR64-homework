

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


