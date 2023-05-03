const parent = $('ul')
$('#check').on('click', function() {
    const thumb = $('img');
    if (thumb.length) {
        thumb.remove();
    }
    parent.empty();
});

$('#check').on('click', function () {
  
    $.ajax(`https://dev.whenisthenextmcufilm.com/api?`).done(function (info) {

      const image = info.poster_url;
      const overview = info.overview;
      const title = info.title;
      const release = info.release_date;
      const days = info.days_until;
  
      const img = $('<img>').attr('src', image);
      $('.api').after(img);

      const addFact = function(text, dataType) {
        const span = $('<span>').text(text);
        const list = $('<li>').text(dataType).prepend(span);
        $('ul').append(list);
      };

      addFact('Title: ', title);
      addFact('Overview: ', overview);
      addFact('Release date: ', release);
      addFact('Days until release: ', days);

    });
});