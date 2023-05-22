$(document).ready(function() {
    $('#search').on('submit', function(event) {
      event.preventDefault(); // stay on this page
      const title = $('#title').val();
      $.ajax('https://images-api.nasa.gov/search?q=' + title).done(function(info) {
        const cover = info.collection.items[0].links[0].href;
        $('#cover').attr('src', cover);
      });
    });
});