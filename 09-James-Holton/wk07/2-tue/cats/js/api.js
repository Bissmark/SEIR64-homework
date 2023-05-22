const parent = $('ul');
$('#check').on('click', function() {
    const thumb = $('img');
    if (thumb.length) {
        thumb.remove();
    }
    parent.empty();
});

$('#check').on('click', function () {
  
    $.ajax(`https://cataas.com/cat?json=true`).done(function (info) {

      const image = 'https://cataas.com/cat';
      const cat = info.tags[0];
  
      const img = $('<img>').attr('src', image);
      $('.cats').after(img);
  
      const span = $('<span>').text('Cat is: ');
      const list = $('<li>').text(cat).prepend(span);
      $('ul').append(list);
    });
});