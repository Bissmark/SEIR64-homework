

const state = {
    nextPage: 1,
    lastPageReached: false,
    requestInProgress: false
};   


const searchFlickr = function (keywords) {
    if (state.lastPageReached || state.requestInProgress) return;


    const flickrURL = 'https://api.flickr.com/services/rest';

    state.requestInProgress = true;
    
    $.getJSON(flickrURL, {
        method: 'flickr.photos.search',
        api_key: '2f5ac274ecfac5a455f38745704ad084',
        text: keywords,
        format: 'json',
        nojsoncallback: 1, 
        page: state.nextPage++
        // add another key
    }).done(showImages).done(function (info){
        // page++;
        console.log(info);
        if (info.photos.page >= info.photos.pages) {
            state.lastPageReached = true;
        }
        state.requestInProgress = false;
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
        '_q.jpg' // change 'q' to something else for diff sizes (see doc)
    ].join('');
};


$(document).ready(function() {
    $('#search').on('submit', function (event) {
        event.preventDefault();

        state.nextPage = 1;
        $('#images').empty();
        //Js to handle submitting form
        //get search terms from DOM
        const searchTerms = $('#query').val();
        // console.log(searchTerms);
        //search flickr for search terms
        searchFlickr( searchTerms );
        
        //display the results
    });

    $(window).on('scroll', function(){
        const scrollBottom = $(document).height() - $(window).scrollTop();
        if (scrollBottom <= 700) {
            const searchTerms = $('#query').val();
            searchFlickr( searchTerms );
        
        } 
    });
});