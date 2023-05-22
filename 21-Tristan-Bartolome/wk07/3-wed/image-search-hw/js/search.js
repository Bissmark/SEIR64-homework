// Set the initial values for the variables
let nextPage = 1;
let requestInProgress = false;
let maxPageReached = false;

const searchFlickr = function (keywords) {
    const flickrURL = 'https://api.flickr.com/services/rest';

    // If a request is already in progress or the maximum page limit has been reached, do nothing
    if (requestInProgress || maxPageReached) {
        return;
    }

    // Mark that a request is in progress
    requestInProgress = true;

    $.getJSON(flickrURL, {
        method: 'flickr.photos.search',
        api_key: '2f5ac274ecfac5a455f38745704ad084',
        text: keywords,
        format: 'json',
        nojsoncallback: 1,
        page: nextPage
    }).done(showImages).done(function (results) {
        // When the request is done, mark that the request is not in progress anymore
        requestInProgress = false;

        // If there are more pages of images to get, increment the page number
        
        if (nextPage < results.photos.pages) {
            nextPage++;
        } else {
            maxPageReached = true;
        }
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

// When document is ready, perform search and infinite scroll function
$(document).ready(function () {
    $('#search').on('submit', function (event) {
        event.preventDefault();

        $('#images').empty();
        nextPage = 1;

        const searchTerms = $('#query').val();
        searchFlickr( searchTerms );
    });

    // When the user scrolls close to the bottom of the page perform function
    $(window).on('scroll', function () {
        // If the user has scrolled close to the bottom of the page, search for more images
        const scrollBottom = $(document).height() - $(window).height() - $(window).scrollTop();
        if (scrollBottom <= 700) {
            const searchTerms = $('#query').val();
            searchFlickr( searchTerms );
        }
    });
});


// Support infinite scroll to show all results from Flickr (eventually, after a lot of scrolling).
// Prevent your code from making too many requests: only one at a time, please
// Don't request more images when you reach the last "page" of Flickr results
// Make sure you go back to the first page when searching for a new term!
// Make it beautiful
// Add other features as you see fit
// Bonus: display larger images in an attractive slideshow
// Bonus: add links back to each image's own page on Flickr.com