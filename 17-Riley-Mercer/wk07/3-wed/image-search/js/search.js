let $c = 1; //might not need to be jQuery, just starting this way if it does!
let lock = true
let maxPage = 0

const searchFlickr = function(keywords){
    const flickrURL = 'https://api.flickr.com/services/rest'

    // You will need to arrange the parts of the jquery OBJECT to make the image URL :)
    // HIGHER LEVEL METHODS (SHORT HANDS METHODS)

    $.getJSON(flickrURL, {
        method: 'flickr.photos.search',
        api_key: '2f5ac274ecfac5a455f38745704ad084',
        text: keywords,
        format: 'json',
        nojsoncallback: 1, //not worth looking up
        per_page: 100,
        page: $c
    }).done(showImages).done(function(){
        lock = false
    });
};

const showImages = async function(results){
    maxPage = results.photos.pages
    console.log(maxPage)
    const urls = _(results.photos.photo).map(generateURL);
    _(urls).each(function(url){
        const $img = $('<img>', {src: url});
        $img.appendTo('#images');
    })
};

const generateURL = function(p){
    return [
        'http://farm',
        p.farm,
        '.static.flickr.com/',
        p.server,
        '/',
        p.id,
        '_',
        p.secret,
        '_q.jpg' // q = size modifier  (q is medium(ish))
    ].join('');
};

$(document).ready(function(){
    $('#search').on('submit', function(event){
        event.preventDefault();
        $('#images').empty();
        // get search term
        const searchTerms = $('#query').val();
       searchFlickr(searchTerms)
        // ask Flikr
        // display result
    });

    $(window).on('scroll', function() {
        const scrollBottom = $(document).height() - $(window).height() - $(window).scrollTop();
        if ((scrollBottom <= 700) && lock == false && maxPage != $c) {
            const searchTerms = $('#query').val();
            $c = $c + 1
            searchFlickr(searchTerms, $c)
            lock = true
        };
        if (maxPage = $c) {
            $('#error').html("You have run out of pages!")
        };
    });
});


// we need to update the API query to increase the PAGE number by 1
// limit the AJAX requests