const currentPage = 1;
const totalPages = 100;

const searchFlickr = function (keywords) {
    if (totalPages !== 100 && currentPage > totalPages) {
        return;
    }

    const flickrURL = 'https://api.flickr.com/services/rest';

    $.getJSON(flickrURL, {
        method: 'flickr.photos.search',
        api_key: '2f5ac274ecfac5a455f38745704ad084',
        text: keywords,
        format: 'json',
        nojsoncallback: 1 // don't bother looking this up: JSONP

    }).done(function (results) {
        showImages(results); 
        currentPage = results.photos.page + 1;
        totalPages = results.photos.pages;
    }).done(showImages).done(function (info) {
        console.log(info);
    });
};

const showImages = function (results) {
    const urls = _(results.photos.photo).map(generateURL);
    _(urls).each(function (url) {
        const $img = $('<img>', {src: url});
        $img.appendTo('#images');
    });
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
        event.preventDefault(); // Don't really submit the form, JS can handle that.

        const searchTerms = $('#query').val();
        searchFlickr( searchTerms );
    });

    $(window).on('scroll', function () {
        const scrollBottom  = $(document).height() - $(window).height() - $(window).scrollTop();
        if (scrollBottom <= 700) {
            const searchTerms = $('#query').val();
            searchFlickr( searchTerms );
        }
    });
});