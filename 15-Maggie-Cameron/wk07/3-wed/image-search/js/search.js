let currentPage = 1;
let totalPages = 0;

const searchFlickr = function (keywords){
    const flickrURL = 'https://api.flickr.com/services/rest'; 

    $.getJSON(flickrURL, {
        method: 'flickr.photos.search',
        api_key: '2f5ac274ecfac5a455f38745704ad084',
        text: keywords,
        format: 'json',
        nojsoncallback: 1,
        page: currentPage,
    }).done(showImages).done(function (info) {
        console.log(info);
        totalPages = info.photos.pages;
        currentPage++;
    });
    console.log(currentPage);
    console.log(totalPages);
};

const showImages = function (results) {
    const urls = _(results.photos.photo).map(generateURL);
    _(urls).each(function (url) {
        const $img = $('<img>', {src: url})
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
        event.preventDefault();

        const searchTerms = $('#query').val();
        searchFlickr(searchTerms);
        
        $('#images').empty();
    });
    
    const throttled = _.throttle(function() {
        const searchTerms = $('#query').val();
        searchFlickr(searchTerms);
    }, 1000);

    $(window).on('scroll', function () {
        const scrollBottom = $(document).height() - $(window).height() - $(window).scrollTop();
        if (scrollBottom <= 700 && currentPage < totalPages) {
            throttled();
        }
    });
});

