// https://gist.github.com/wofockham/894b9a5e05a971e0208b
// Exercise Question found above

$('body').css('font-family', 'Arial, sans-serif');

$('#nickname').html('natural');

$('#favorites').html('chocolate');

$('#hometown').html('Sydney');

const $listItems = $('li');
$listItems.each(function () {
    let $this = $( this );
    $this.addClass('listitem').css('color', 'red');
})

const $kitty = $('<img>');
$kitty.attr('href', 'https://loremflickr.com/640/360');
$('body').append($kitty);
