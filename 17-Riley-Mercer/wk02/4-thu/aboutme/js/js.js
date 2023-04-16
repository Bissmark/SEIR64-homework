$('body').css({'font-family': 'Arial, sans-serif'});

$('#nickname').html("Riles");
$('#favorites').html("CJ");
$('#hometown').html("Perth");

$('li').addClass('listitem');
$('.listitem').css({'color': 'red'})
// $('li').css({'color': 'red'})

$('<img>').attr('src', "https://ga-core.s3.amazonaws.com/production/uploads/instructor/image/1051/thumb_joel.jpg").appendTo('ul')