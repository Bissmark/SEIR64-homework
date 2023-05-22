// Defining the maximum number of pages to load
const MAX_PAGES = 10;

// Initialised new variables 
let currentPage = 1;
let totalPages = 1;

// Keeping track of whether the image search is in progress
let isLoading = false;

// Added a function to search for images via the Flickr API
const searchFlickr = function (keywords, page) {
    // Added the flickr API url
    const flickrURL = 'https://api.flickr.com/services/rest';

    // Prevent multiple image searches from occurring at the same time
    isLoading = true;

    // Making a request to the API
    $.getJSON(flickrURL, {
        method: 'flickr.photos.search', 
        api_key: '2f5ac274ecfac5a455f38745704ad084',
        text: keywords,
        format: 'json',
        nojsoncallback: 1,
        page: page
    }).done(function (data) {
        // When the request is complete, pass the photo data to the function
        showImages(data.photos);

        // Update the total number of pages and the current page based on the returned data.
        totalPages = data.photos.pages;
        currentPage = data.photos.page;

        // Switching it to flase to now allow additional image searches to be performed. 
        isLoading = false;
    });
};

// Adding a function to display the images from Flickr
const showImages = function (photos) {
    // Creating image URLs for each photo and storing into into an array
    const urls = _(photos.photo).map(generateURL);

    // For each URL in the array, create an image element and append it on the page. 
    _(urls).each(function (url) {
        const $img = $('<img>', {src: url});
        $img.appendTo('#images');
    });
};

// Adding a function to generate the URL for an individual photo
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
        '_q.jpg' // change 'q' to something else for different sizes
    ].join('');
};

// Adding an event listener for the form submit event
$(document).ready(function () {
    $('#search').on('submit', function (event) {
        event.preventDefault();
        const searchTerms = $('#query').val();
        currentPage = 1;
        totalPages = 1;
        isLoading = false;
        if ($('#images img').length > 0) {
            $('#images').append($('<hr>'));
        }
        searchFlickr(searchTerms, currentPage);
    });

    // Adding an event listener for the window scroll event
    $(window).on('scroll', function () {
        // Return blank if an image search is in progress
        if (isLoading) return;

        // Calculating how far the user has scrolled from the bottom of the page 
        const scrollBottom = $(document).height() - $(window).height() - $(window).scrollTop();
        // If the user has scrolled to within 700 pixels of the bottom and there are more pages to load, perform another image search
        if (scrollBottom <= 700 && currentPage < totalPages && currentPage < MAX_PAGES) {
            const searchTerms = $('#query').val();
            searchFlickr(searchTerms, currentPage + 1);
        };
    });
});
