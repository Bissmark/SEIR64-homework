const fetchFact = function () {
    $.ajax('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=fhaz&api_key=DEMO_KEY').done(function (data) {
        $('body').append('<p>' + data.text + '</p>');
    });
};

$('#fetch').on('click', fetchFact);
fetchFact(); // First fact for free

