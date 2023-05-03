const parent = $('ul');
$('#check').on('click', function() {
    const thumb = $('img');
    if (thumb.length) {
        thumb.remove();
    }
    parent.empty();
});

$('#check').on('click', function () {
    const name = $('#book').val();
  
    $.ajax(`https://www.googleapis.com/books/v1/volumes?q=title:${name}`).done(function (info) {

      const image = info.items[0].volumeInfo.imageLinks.thumbnail;
      const author = info.items[0].volumeInfo.authors[0];
      const publisher = info.items[0].volumeInfo.publisher;
      const publishDate = info.items[0].volumeInfo.publishedDate;
      const description = info.items[0].volumeInfo.description;
      const pages = info.items[0].volumeInfo.pageCount;
      const ratings = info.items[0].volumeInfo.averageRating;
  
      const img = $('<img>').attr('src', image);
      $('.books').after(img);
  
      const addFact = function(text, dataType) {
        const span = $('<span>').text(text);
        const list = $('<li>').text(dataType).prepend(span);
        $('ul').append(list);
      };
      
      addFact('Author: ', author);
      addFact('Published: ', (`by ${publisher} in ${publishDate}`));
      addFact('Brief Description: ', description);
      addFact('Total Pages: ', pages);
      addFact('Average User Ratings: ', (`${ratings}/5`));
    });
});