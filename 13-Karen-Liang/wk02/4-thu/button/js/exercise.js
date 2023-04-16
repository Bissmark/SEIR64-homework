


$('button').on('click', function () {
    if ($('body').hasClass('lightMode')) {
    $('body').removeClass('lightMode');
    $('body').addClass('darkMode');
    $('body').css('background-color', 'black');
    $('body').css('transition-duration', '2s');
    $('h1').css('color', 'white');
    } else {
        $('body').removeClass('darkMode');
        $('body').addClass('lightMode');
        $('body').css('background-color', 'white');
        $('body').css('transition-duration', '2s');
        $('h1').css('color', 'rgb(162, 176, 216)');
    };  
});

