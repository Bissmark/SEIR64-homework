const searchFlickr = function (keywords) {
    const flickrURL = 'https://api.flickr.com/services/rest';

    $.getJSON(flickrURL, {
        method: 'flickr.photos.search',
        api_key: '2f5ac274ecfac5a455f38745704ad084',
        text: keywords,
        format: 'json',
        per_page: 100, //100 img per page
        page: 1,
        nojsoncallback: 1 // don't bother looking this up: JSONP
    }).done(showImages).done(function (info) {
        console.log(info);
    });
};

const showImages = function (results) {
    const urls = _(results.photos.photo).map(generateURL);
    $('#images').empty();
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

// let perpage = 100;
// let currentpage = 1;
$(document).ready(function(){
    let page = 1;
    $('#search').on('submit', function(event){
        event.preventDefault();
        //clear gallery div
        $('#gallery').empty();
       page = 1 //page 1 when a new search starts
        const searchTerms = $('#query').val();
        searchFlickr( searchTerms );
    });

    $(window).on('scroll', function () {
        const scrollBottom  = $(document).height() - $(window).height() - $(window).scrollTop();
        if (scrollBottom <= 0) {
            const searchTerms = $('#query').val();
            searchFlickr( searchTerms, page )
            page ++;
        }
    });
});