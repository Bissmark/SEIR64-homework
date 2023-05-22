let currentPage = 1;
let totalPage = null;

const searchFlickr = function (keywords, pageCount = 1) {
    const flickrURL = 'https://api.flickr.com/services/rest';

    $.getJSON(flickrURL, {
        method: 'flickr.photos.search',
        api_key: '2f5ac274ecfac5a455f38745704ad084',
        text: keywords,
        format: 'json',
        nojsoncallback: 1,
        page: pageCount
    }).done(showImages).done(function (response) {
        totalPage = response.photos.pages;
        console.log(response);
    });
};

const showImages = function (results) {
    const urls = _(results.photos.photo).map(generateURL);
    _(urls).each(function (url) {
        const $img = $('<img>', {src: url});
        $img.appendTo('#images');
    });
};

const generateURL = function (photo) {
    return [
        'http://farm',
        photo.farm,
        '.static.flickr.com/',
        photo.server,
        '/',
        photo.id,
        '_',
        photo.secret,
        '_q.jpg' // change 'q' to something else for different sizes (see documentation)
    ].join('');
};

const loadMore = function () {
    if (currentPage < totalPage) {
        const scrollBottom  = $(document).height() - $(window).height() - $(window).scrollTop();
        if (scrollBottom <= 700) {
            const searchTerms = $('#query').val();
            currentPage++;
            searchFlickr( searchTerms, currentPage );
        }
    }
}

$(document).ready(function () {
    $('#search').on('submit', function (event) {
        event.preventDefault(); // Don't really submit the form, JS can handle that.
        $('#images').empty();
        currentPage = 1;
        
        const searchTerms = $('#query').val();
        searchFlickr( searchTerms );
    });

    let throttled = _.throttle(loadMore, 1000);
    $(window).scroll(throttled);
});