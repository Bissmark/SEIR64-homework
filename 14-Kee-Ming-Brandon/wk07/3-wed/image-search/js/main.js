// predefine variable
let pageNumb = 1;
let stoppedLoading = true;
let notLastPage = true;

// Get request for the search
const searchFlickr = function (keywords) {
    const flickrURL = 'https://api.flickr.com/services/rest';

    $.getJSON(flickrURL, {
        method: 'flickr.photos.search', 
        api_key: '2f5ac274ecfac5a455f38745704ad084',
        text: keywords,
        format: 'json',
        nojsoncallback: 1,
        page: pageNumb++,
        per_page: 30
    }).done(showImages).done(function (info) {
        stoppedLoading = true; // indicate the image is done loading
        console.log(info);
        notLastPage = ( pageNumb <= info.photos.pages ); // check if srcolled to last page
    })
};

// show images after search
const showImages = function (results) {
    const urls = _(results.photos.photo).map(generateURL);
    _(urls).each(function (url) {
        const $img = $('<img>', {src: url});
        $img.appendTo('#images');
    });
};

// Generate image Url
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
        '_q.jpg' 
    ].join('');
};

$(document).ready(function () {

    $('#search').on('submit', function (e) {
        e.preventDefault();
        $('#images').empty(); // clear previous search
        pageNumb = 1; // get back to page 1
        
        // get the search terms from the DOM 
        const searchTerms = $('#query').val();
        searchFlickr( searchTerms );
    });

    $(window).on('scroll', function () {
        const scrollBottom = $(document).height() - $(window).height() - $(window).scrollTop();
        if (scrollBottom <= 500 && stoppedLoading && notLastPage ) {
            stoppedLoading = false; // indicate image loading in progress

            // get the search terms from the DOM 
            const searchTerms = $('#query').val();
            searchFlickr( searchTerms );
        };
    });

});