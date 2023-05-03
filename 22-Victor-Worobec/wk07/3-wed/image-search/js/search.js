// Global variables for API query and variable resetting
let nextPage = 1;
let requestInProgress = false;
let maxPageReached = false;

const searchFlickr = function (keywords) {
    const flickrURL = 'https://api.flickr.com/services/rest';

    // Don't process request if one is in progress or last page has been reached 
    if (requestInProgress || maxPageReached) {
        return;
    }  

    // Set to true to stop query if one is already running (as above)
    requestInProgress = true;

    // Make query with extra parameters
    $.getJSON(flickrURL, {
        method: 'flickr.photos.search',
        api_key: '2f5ac274ecfac5a455f38745704ad084',
        text: keywords,
        format: 'json',
        nojsoncallback: 1,
        page: nextPage
    })
    
    // Parse results through showImages
    .done(showImages)
    
    // Handle page number and request status (bool)
    .done(function (results) {
        requestInProgress = false;

        // Increment page if not on last page, else set maxPageReached to true
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
}

$(document).ready(function () {
    // Query API on submit
    $('#search').on('submit', function (event) {
        event.preventDefault(); 
        $('#images').empty();

        const searchTerms = $('#query').val();

        // Reset variables for new search
        nextPage = 1;
        maxPageReached = false;

        searchFlickr(searchTerms);
    });

    // Infinite load
    $(window).on('scroll', function () {
        const scrollBottom = $(document).height() - $(window).height() - $(window).scrollTop();
        if (scrollBottom <= 700) {
            const searchTerms = $('#query').val();
                
            searchFlickr(searchTerms);
        }
    });
});