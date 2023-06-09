let pageNo = 0
let totalPages = 0


const searchFlickr = function(keywords){
    
    const flickrURL = 'https://api.flickr.com/services/rest';
    pageNo ++ 
    $.getJSON(flickrURL,{
        method: 'flickr.photos.search',
        api_key:'2f5ac274ecfac5a455f38745704ad084',
        text: keywords,
        format: 'json',
        page: pageNo,
        nojsoncallback: 1,
    }).done(showImages).done(function(info){
        totalPages = info.photos.pages;
        
    })
    
}
const showImages = function(results){
    const urls = _(results.photos.photo).map(generateURL);
    _(urls).each(function(url){
        const $img = $('<img>', {src: url})
        $img.appendTo('#images')
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
        '_q.jpg'
    ].join('')
}


$(document).ready(function(){
    $('#search').on('submit', function(event){
        event.preventDefault()
        $('#images').text('')
        pageNo = 0
        const searchTerms = $('#query').val()
        searchFlickr(searchTerms)
    })
    const relaxedSearchFlickr = _.debounce(searchFlickr,4000,true)
    $(window).on('scroll',function(){
        const scrollBottom = $(document).height() - $(window).height() - $(window).scrollTop();
        if (scrollBottom <= 700 && pageNo < totalPages){
            const searchTerms = $('#query').val()
            relaxedSearchFlickr(searchTerms)
        }
    })
})