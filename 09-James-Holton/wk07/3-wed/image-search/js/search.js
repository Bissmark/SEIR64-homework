const searchFlickr = function (keywords) {
    const flickrURL = 'https://api.flickr.com/services/rest';

    $.getJSON(flickrURL, {
        method: 'flickr.photos.search',
        api_key: '2f5ac274ecfac5a455f38745704ad084',
        text: keywords,
        format: 'json',
        page: 1,
        per_page: 180,
        nojsoncallback: 1
    }).done(showImages);
};

const imgShow = function (url) {
    const $img = $('<img>', {src: url});
    $img.appendTo('#images');
};

let n = 0;

// let currentPage = 1;
// let totalPages = 0;

const container = $('.container');

// const showImages = function (results) {
//     const urls = _(results.photos.photo).map(generateURL);
//     console.log(urls);
//     _(urls).each(function (url) {
//         const $img = $('<img>', {src: url});
//         $img.appendTo('#images');
//     });
// };
const showImages = function (results) {
    const urls = _(results.photos.photo).map(generateURL);
    console.log(urls);
    let arr = [];
    _(urls).each(function (url) {
        if (urls.indexOf(url) >= n && urls.indexOf(url) < (n + 20)) {
            const $img = $('<img>', {src: url});
            $img.appendTo('#images');
            arr.push(url);
        }
        
    });
    console.log(arr);
    n += 20;

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
        '_q.jpg' // change q to smtg else for different sizes
    ].join('');
};

$(document).ready(function () {
    $('#search').on('submit', function (event) {
        event.preventDefault(); // Don't load a new page by submitting the form (JS will do it).
        $('#images').empty();
        n = 0;

        const searchTerms = $('#query').val();
        searchFlickr(searchTerms);
    });

    $('#page1').on('click', function (event) {
        event.preventDefault();
        $('#images').empty();
        n = 0;

        const searchTerms = $('#query').val();
        searchFlickr(searchTerms);
    })

    $('#page2').on('click', function (event) {
        event.preventDefault();
        $('#images').empty();
        n = 61;
        
        const searchTerms = $('#query').val();
        searchFlickr(searchTerms);
    })

    $('#page3').on('click', function (event) {
        event.preventDefault();
        $('#images').empty();
        n = 122;
        
        const searchTerms = $('#query').val();
        searchFlickr(searchTerms);
    })

    // $(window).on('scroll', function () {
    //     const scrollBottom = $(document).height() - $(window).height() - $(window).scrollTop();
    //     if (scrollBottom <= 700) {
    //         const searchTerms = $('#query').val();
    //         searchFlickr( searchTerms );
    //     };
    // });
    $(window).scroll(_.throttle(function() {
        if($(window).scrollTop() + $(window).height() == $(document).height() && n !== 60 && n!== 121) {
            const searchTerms = $('#query').val();
            searchFlickr( searchTerms );
        }
     }, 500));
});
