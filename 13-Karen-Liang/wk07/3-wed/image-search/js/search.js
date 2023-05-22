let requestNext = false; 

// does not the DOM to be ready 
const searchFlickr = function (keywords, page) {
    const flickrURL = 'https://api.flickr.com/services/rest';


    $.getJSON(flickrURL, {
        method: 'flickr.photos.search',
        api_key: '2f5ac274ecfac5a455f38745704ad084',
        page: page, // defaults to 1
        text: keywords,
        per_page: 100,
        format: 'json',
        nojsoncallback: 1 
    }).done(showImages).done(function (info) {
        console.log(info);
        requestNext = false;
    })
};

const showImages = function (results) {
    const urls = _(results.photos.photo).map(generateURL);
    // console.log(urls);
    // TODO: display the URLs
    _(urls).each(function (url){
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

let currentPage = 1;
const nextPage = function () {
    currentPage += 1; // increment the current page by 1
    return currentPage;
};

$(document).ready(function() {
    $('#search').on('submit', function(event){
        event.preventDefault(); // Don't submit the form, JS can handle that 
        // console.log('submit'); // debug
        
        // // clear previous images 
        $('#images').empty();

        // get the search items from the DOM
        const searchTerms = $('#query').val();
        // console.log(searchTerms); // debug

        // search Flickr for the search results 
        searchFlickr( searchTerms );
        

        $(window).on('scroll', function () {
            const scrollBottom = $(document).height() - $(window).height() - $(window).scrollTop();
            if (scrollBottom <= 700 && !requestNext) {
                requestNext = true;
                const searchTerms = $('#query').val();
                searchFlickr( searchTerms, nextPage );
            }
        });
        
    });
});

// removes all searches
// $('#images').removeAttr() = ""; 