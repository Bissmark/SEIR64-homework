console.log('Dineth')


$(document).ready(function() { //call back
    // event.preventDefault(); // does everything on the same page
    // const temperature = $('#title').val(); // updated 
    //ask  for the data
    $.ajax('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m').done(function (info){
        const latitude = info.latitude
        // console.log(latitude)
        $('#latitude').html(latitude);
        const longitude = info.longitude
        $('#longitude').html(longitude);
    });
    $('#search').on('submit', function (event){
        event.preventDefault();
        const title = $('#title').val();
        //ask google books for the data
        $.ajax('https://animechan.vercel.app/api/random/anime?title=' + title).done(function (info){
            const quote = info.quote
            $('#quote').html(quote);
        });
    });
    $('#search1').on('submit', function (event){
        event.preventDefault();
        const title = $('#title1').val();
        $.ajax('https://api.spacexdata.com/v5/launches/latest?title=' + title)

    }

});  


