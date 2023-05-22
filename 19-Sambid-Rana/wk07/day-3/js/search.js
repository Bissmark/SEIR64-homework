// let currPage = 1
//just defining a funciton doesnt need to be inside .ready
const searchFlickr = function (keywords) {
    
    //store the url
    const flickrURL = 'https://api.flickr.com/services/rest'; //think of this as function

    // $.ajax(flickrURL) - could use this too but getJSON is more readable

    // and thes are the paramaters, what needs to be inside the funciton 
    $.getJSON(flickrURL, {
        method: 'flickr.photos.search', //function inside an object// read documentation
        api_key: '2f5ac274ecfac5a455f38745704ad084',
        text: keywords,
        format: 'json',
        // page: currPage,
        per_page: 100,
        nojsoncallback: 1 //we are not using json padding - the statement is saying
    }).done( showImages ).done(function (info) {
        // console.log(info)
        // add a statemet so the same image isn't loaded again
        // if currPage === page stop
    }); 
    
};

// //function to check array has same string
// function checkArray(arr) {
//     const firstStr = arr[0];
//     for(let i = 1; i < arr.length; i++) {
//         if (arr[i] !== firstStr) {
//             return false;
//         }
//     }
// }

const showImages = function (results) {
        //whatever came back from the 
        console.log(results); //convert from object to dom nodes
        // console.log(results.photos.page)
        


        const urls = _(results.photos.photo).map(generateURL);

        
        const imageIds = results.photos.id;
        console.log(urls)


            _(urls).each(function (url) {
                const $img = $('<img>', {src: url})
                $img.appendTo('#images')
            })


}


const generateURL = function (p) { //p = photo object #converting to string

    return [
        'http://farm',
        p.farm,
        '.static.flickr.com/',
        p.server,
        '/',
        p.id,
        '_',
        p.secret,
        '_q.jpg' //can change '_q' to something else for different sizes (see documentation)
 
    ].join('');
};

$(document).ready(function () {
    $('#search').on('submit', function (event) {

        event.preventDefault(); 
        console.log('submit')
        $('#images').empty()
        // get the search terms from val
        const searchTerms = $('#query').val();
        // $('#query').val('')
        // console.log(searchTerms)
        searchFlickr( searchTerms )

    })



    let scrolling = true    
    $(window).on('scroll', function () {
        let scrollBottom = $(document).height() - $(window).height() - $(window).scrollTop();
        
        console.log($(document).height(), $(window).height(), $(window).scrollTop())
        console.log(scrollBottom)
        
        if ( scrollBottom <= 200 && scrolling ) { //not working properly # doest stop the function from running but gets more than 100 images
            const searchTerms = $('#query').val();
            searchFlickr( searchTerms )
            scrolling = false
            // currPage++
            console.log(currPage)
        } 
    })
})