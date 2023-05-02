console.log('Jordy')

$(document).ready(function () { // callback
    // event.preventDefault(); // stay on this page
    // const temperature = $('#temperature').val();
    $.ajax('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m' ).done(function (info) {
        const latitude = info.latitude
        console.log(latitude)
        $('#latitude').html(latitude).done;
        const longitude = info.longitude
        console.log(longitude)
        $('#longitude').html(longitude).done;
    });

    $('#search1').on('submit', function (event) {
        event.preventDefault(); // stay on this page
        const title = $('#title1').val();
        $.ajax('https://animechan.vercel.app/api/random/anime?title='+title).done(function (info) {
        // console.log(info);
            const quote = info.quote
            $('#quote').html(quote);
        });
    });

    $('#search2').on('submit', function (event) {
        event.preventDefault(); // stay on this page
        const title = $('#title2').val();
        $.ajax('https://api.spacexdata.com/v5/launches/latest?title='+title).done(function (info) {
            const cover = info.cover[0].volumeInfo.imageLinks.thumbnail;
            $('#cover').html(cover);
        });
    });
});