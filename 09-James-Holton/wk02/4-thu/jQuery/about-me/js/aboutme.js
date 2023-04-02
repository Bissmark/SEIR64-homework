document.body.style.fontFamily = 'Arial, sans-serif';
$('body').css('font-family { Arial, sans-serif }');

$('li').each(function () {
    $(this).addClass('listitem')
});

$('#nickname').html('<p>mez</p>');
$('#favorites').html('<p>idk</p>');
$('#hometown').html('<p>Amsterdaam</p>');

img = $('<img>').attr('src', 'https://i.imgur.com/Vu14AJw.jpg');
$('body').append(img);