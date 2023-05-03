const nasaApiKey = 'wyXfZMvcLg0uWG7KZf4iICzcnoUbdbdDvt9WdopB'
const omdbApiKey = '8f632e4a&t'


$(document).ready( function () {

    getNasaImage();
    getMovies();

});

const getNasaImage = function () {
    $.ajax('https://api.nasa.gov/planetary/apod?api_key=' + nasaApiKey).done( function (response) {
        const image_url = response.url;
        $('<img>').attr( {
            'src': image_url,
            'class': 'feature',
        }).appendTo('.item-1')
    });
};

const getMovies = function () {
    $.ajax(`http://www.omdbapi.com/?apikey=${ omdbApiKey }&t=Jaws`).done( function (response) {
        const poster_url = response.Poster
        $('<img>').attr( { 
            'src': poster_url,
            'class': 'feature',
        }).appendTo('.item-2')
    });
}
