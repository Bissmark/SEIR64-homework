$('body').css( 'font-family', "Arial, sans-serif" );

$('#nickname').html("Brandon");

$('#favorites').html("Red, Monstera and Badminton");

$('#hometown').html("Selangor, Malaysia");

// Dumb
// $('li').each( function () {
//     $(this).addClass('listitem')
//             .css('color', 'darkblue');   
// });
$('li').addClass('listItem').css('color', 'darkblue');


// $('<img>').attr('src', ../images/my-PushSubscriptionOptions.png).html();
const $image = $('<img>');
$image.attr({'src': 'images/my-photo.png', 'width': '200px'});
$('ul').before($image);