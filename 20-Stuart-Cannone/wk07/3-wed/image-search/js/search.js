const searchFlickr = function (keywords, page = 1) {
    const flickrURL = 'https://api.flickr.com/services/rest'

    $.getJSON(flickrURL, {
    method: 'flickr.photos.search',
    api_key: '2f5ac274ecfac5a455f38745704ad084',
    text: keywords,
    format: 'json',
    page: page,
    per_page: 100,
    nojsoncallback: 1
    }).done(showImages);
};

let currentPage = 1;
let totalPages = 0;

const showImages = function (results) {
    const urls = _(results.photos.photo).map(generateURL);

    _(urls).each(function (url) {
    const $img = $('<img>', { src: url });
    $img.appendTo('#images');
    });

    // update totalPages if it hasn't been set yet
    if (totalPages === 0) {
    totalPages = results.photos.pages;
    }

    // increment current page if not reached total pages yet
    if (currentPage < totalPages) {
    currentPage++;
    } 
};

const generateURL = function (p) {
    return [
    'http://farm',
    p.farm,
    '.static.flickr.com/',
    p.server,
    '/',
    p.id,
    '_',
    p.secret,
      '_q.jpg' // change 'q' to something else for different sizes (see documentation)
    ].join('');
};

$(document).ready(function () {
    $('#search').on('submit', function (event) {
    event.preventDefault();
    currentPage = 1;
    totalPages = 0;
      // clear the existing images
    $('#images').empty();

      // get the search terms
    const searchTerms = $('#query').val();
    searchFlickr(searchTerms);
    })

    $(window).on('scroll', _.throttle(function () {
    const scrollBottom = $(document).height() - $(window).height() - $(window).scrollTop();
    if (scrollBottom <= 500) {
        // only trigger next page load if not already loading and not reached total pages
        if (!$('#loading').is(':visible') && currentPage < totalPages) {
          // show the loading indicator
        $('#loading').show();
        const searchTerms = $('#query').val();
        searchFlickr(searchTerms, currentPage + 1);
        }
    }
    }, 3000)); // set the time interval to 200 milliseconds
});
