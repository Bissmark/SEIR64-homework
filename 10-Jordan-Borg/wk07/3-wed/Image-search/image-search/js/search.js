let currentPage = 1;
let totalPages = 0;
const searchFlickr = function (keywords, page = 1) {
    const flickrURL = 'https://api.flickr.com/services/rest';
    $.getJSON(flickrURL, {
        method: 'flickr.photos.search',
        api_key: '2f5ac274ecfac5a455f38745704ad084',
        text: keywords,
        format: 'json',
        page: page,
        per_page: 20,
        nojsoncallback: 1,
        // add another key
    }).done(showImages);
        // page++;
        console.log(info);
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
        '_q.jpg' // change 'q' to something else for diff sizes (see doc)
    ].join('');
};

$(document).ready(function() {
    $('#search').on('submit', function (event) {
        event.preventDefault();
        // $('#images').empty();
        //Js to handle submitting form
        //get search terms from DOM
        const searchTerms = $('#query').val();
        // console.log(searchTerms);
        //search flickr for search terms
        searchFlickr( searchTerms );
        //display the results
    });
    $(window).on('scroll',_.throttle(function(){
        const scrollBottom = $(document).height() - $(window).scrollTop();
        if (scrollBottom <= 700) {
            const searchTerms = $('#query').val();
            searchFlickr( searchTerms );
        }
    }, 200));
});
