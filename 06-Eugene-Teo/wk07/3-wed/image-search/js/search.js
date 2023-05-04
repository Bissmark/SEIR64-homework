let searchRequesting = false; // true/false state to limit request

const searchFlickr = function (keywords) {
    if (searchRequesting) {  //if it is searching, return null and do not keep sending requests 
        return;
    }
    searchRequesting = true; //else continue search

    const flickrURL = 'https://api.flickr.com/services/rest';

    $.getJSON(flickrURL, {
        method: 'flickr.photos.search',
        api_key: '2f5ac274ecfac5a455f38745704ad084',
        text: keywords,
        format: 'json',
        nojsoncallback: 1
    }).done(showImages).done(function (info) {
        console.log(info);
        showImages(info);
        searchRequesting = false; // this makes it such that it only does one request at the time, based on true/false state 
    })
    // }).done(function (results) {
        // console.log(results);
};

const displayedImages = []; // keep track of displayed images on page

const showImages = function (results) {
    // console.log(results);
    const urls = _(results.photos.photo).map(generateURL);
    // console.log(urls);
    _(urls).each(function (url) {
        const photoId = url.split('_')[0].split('/').pop();  // splits url string into array; separating based on _ and /; pop extracts the photoId
        if (!displayedImages.includes(photoId)) {
            displayedImages.push(photoId);
            const $img = $('<img>', {src: url});
            $img.appendTo('#images');
        }
    });
};

console.log(displayedImages);   // this is working as intended

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
        $('#images').empty();  //clears images on current page on new search without leaving or refreshing page

        const searchTerms = $('#query').val();
        searchFlickr(searchTerms);
    });
});

    $(window).on('scroll', function () {
        const scrollBottom = $(document).height() - $(window).height() - $(window).scrollTop();
        if (scrollBottom <= 700) {
            const searchTerms = $('#query').val();
            searchFlickr(searchTerms);
        }
});



// Task: get infinte scroll to work, 100 pics at a time, stop repeating images
// GA: Intro to Comp Sci, Algorithms