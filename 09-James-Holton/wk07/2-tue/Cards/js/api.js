const parent = $('ul');
$('#check').on('click', function() {
    const thumb = $('img');
    if (thumb.length) {
        thumb.remove();
    }
    parent.empty();
});

$('#check').on('click', function () {
    const num = $('#cards').val();
    const int = Number(num) - 1;
  
    $.ajax(`https://deckofcardsapi.com/api/deck/new/draw/?count=${num}`).done(function (info) {


      for (i = 0; i <= int; i++) {
        let image = info.cards[i].image;
  
        let img = $('<img>').attr('src', image);
        $('.api').after(img);
      }
    });
});