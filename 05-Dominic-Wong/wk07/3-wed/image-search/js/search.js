const searchFlickr = function (keywords, page_num) {
    const flickrURL = 'https://api.flickr.com/services/rest';
    const parameters = {
        method: 'flickr.photos.search',
        api_key: '2f5ac274ecfac5a455f38745704ad084',
        text: keywords,
        format: 'json',
        nojsoncallback: 1,
        page: page_num,
    }

    $.getJSON( flickrURL, parameters ).done(function( results ){
        const total_pages = results.photos.pages;

        if (page_num > total_pages) {
            return;
        }

        showImages(results);
    });

};

const showImages = function ( results ) {
    console.log(results);
    const urls = _(results.photos.photo).map(generateURL);
    _(urls).each(function(url){
        const $img = $('<img>', {src: url});
        $img.appendTo('#images');
    })
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
        '_q.jpg',  // change 'q' to osomething else for diff sizes ( see documentation)
    ].join('');
};

$(document).ready(function (){
    
    // page counter 
    let page_num = 1;

    const scrollThrottled = _.throttle(function(){
        const searchTerm = $('#query').val();
        searchFlickr(searchTerm, page_num);
        page_num ++; // increment page
    }, 3000);
    
    $('#search').on('submit', function(event){
        page_num = 1; // on new search, sets page to 1
        event.preventDefault();
        $('#images').html("");
        const searchTerm = $('#query').val();
        searchFlickr( searchTerm, page_num );
        page_num ++; // increment page
    });

    $(window).on('scroll', function(){
        const scrollBottom = $(document).height() - $(window).height() - $(window).scrollTop();
        if (scrollBottom <= 200) {
            scrollThrottled();
        }
    });

});