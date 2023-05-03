$(document).ready(function() {
    $('#search').on('submit', function(event) {
      event.preventDefault(); // stay on this page
      const title = $('#title').val();
      $.ajax('https://exoplanetarchive.ipac.caltech.edu/cgi-bin/nstedAPI/nph-nstedAPI?&table=exoplanets&format=ipac&where=pl_kepflag=1' + title).done(function(info) {
        const cover = info.collection.items[0].links[0].href;
        $('#cover').attr('src', cover);
      });
    });
});