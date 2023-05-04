
// Support infinite scroll to show all results from Flickr (eventually, after a lot of scrolling).
// Prevent your code from making too many requests: only one at a time, please
// Don't request more images when you reach the last "page" of Flickr results
// Make sure you go back to the first page when searching for a new term!
// Make it beautiful
// Add other features as you see fit
// Bonus: display larger images in an attractive slideshow
// Bonus: add links back to each image's own page on Flickr.com


const searchFlickr = function(keywords, page) {

    const flickrUrl = 'https://api.flickr.com/services/rest';

    $.getJSON(flickrUrl, {
        method: 'flickr.photos.search',
        api_key: '2f5ac274ecfac5a455f38745704ad084',
        text: keywords,
        format: 'json',
        page: page,
        per_page: 100,
        nojsoncallback: 1
    }).done(function(results) {
        const totalPages = _(results.photos.pages);
        if (page >= totalPages) {return}
    }).done(showImages)
};

const showImages = function(results) {

    const urls = _(results.photos.photo).map(generateUrl);
    _(urls).each(function (url) {
        const $img = $('<img>', {src: url});
        $img.appendTo('#images');
    })
    console.log(urls);

}

const generateUrl = function(p) {

    return [
        'http://farm',
        p.farm,
        '.static.flickr.com/',
        p.server,
        '/',
        p.id,
        '_',
        p.secret,
        '_q.jpg' // can change the q to something else for different sizes (see documentation)
    ].join('');

};

$(document).ready(function() {

    let page = 1;

    $('#search').on('submit', function(event) {

        event.preventDefault();

        $('#images').empty('');

        page = 1;

        // getting the search terms from the DOM
        const searchTerms = $('#query').val();

        // search Flickr for the search terms
        searchFlickr(searchTerms);

    });

    $(window).on('scroll', _.throttle(function() {
        const scrollBottom = $(document).height() - $(window).height() - $(window).scrollTop();
        let minHeight = 500;

        if (scrollBottom <= minHeight) {
            const searchTerms = $('#query').val();
            page++; // add to page number so calling next page when running searchFlickr
            searchFlickr(searchTerms, page);
        }
    }, 2000));

})