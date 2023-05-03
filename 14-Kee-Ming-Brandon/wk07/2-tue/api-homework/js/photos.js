// Ramdom words API from https://api-ninjas.com/
randomWordApi = $.ajax({
    method: 'GET',
    url: 'https://api.api-ninjas.com/v1/randomword',
    headers: { 'X-Api-Key': 'GWF79ekCKVh5Fuh9lfzJ+w==LW2ARMkfEHBVeB7b'},
    contentType: 'application/json',
    success: function(result) {
        console.log(result);
    },
    error: function ajaxError(jqXHR) {
        console.error('Error: ', jqXHR.responseText);
    }
});
    
// Run a random photo search once entering the page
randomWordApi.done(function (randomWord) {
    // Run search
    noSearchResult = getSearchGrid( randomWord.word );
    // Display placeholder with predefined search term
    $('#search-name').attr('placeholder', 'Search for images: '+ randomWord.word);
});

// function to display search result
const getSearchGrid = ( input ) => {
    // Define Api url for clarity
    const pixabayApi = $.ajax(`https://pixabay.com/api/?key=35967022-f519c2489427fe1b0827b3191&q=${ input }&image_type=photo&per_page=100&order=popular`);
    
    // Get Api data
    pixabayApi.done(function (info) {

        // Message for no search result
        if ( info.total === 0 ) {
            $('#error-message').show().text( `Unfortunately, there is no result for '${ input }', enter a new search.` )
            return
        } else {
            $('#error-message').hide();
        };

        // Clear previous search and view
        $('#grid').empty();
    

        // Display each photo from search data
        info.hits.forEach((item, i) => {
            $('#grid').append( `<div class="photo-frame"><img class='thumbnail' id=${ i } src=${ item.previewURL }></div>`);
        });

        // mouseover effect
        $('.thumbnail').hover( function() {
            $(this).css('box-shadow', '0px 0px 20px');
        }, function() {
            $(this).css('box-shadow', 'none');
        });

        // Display thumbnail in large image
        $('.thumbnail').on('click', function() {
            // Callback data
            const image = info.hits[ $(this).attr('id') ].largeImageURL;
            // Assign photo to HTML
            $('#image').attr({'src': image, 'alt': 'car photo'} );
            $('#image').show();
        });
    });

};

//@@@@@@@@@@@@  DOCUMENT READY  @@@@@@@@@@@@//
$(document).ready(function () {

    $('#search').on('submit', function(event) {
        event.preventDefault();
        $('#image').hide();
        // run search
        getSearchGrid( $('#search-name').val() );
        
    });

});
