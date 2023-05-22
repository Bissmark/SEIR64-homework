$(document).ready(function () {

    $('#kanye-refresh').on('submit', function (event) {
        event.preventDefault(); 
        callKanye();
    });

    // Get user location lat, lon
    $.ajax('https://api.techniknews.net/ipgeo/').done(function (response) {
        // Weather
        weatherReport(response.lat, response.lon);
    });

    // Kanye
    callKanye();

    // Background image
    $("body").css("background-image", "url(https://picsum.photos/800/500?&blur=2)");
});

function callKanye() {
    $.ajax('https://api.kanye.rest').done(function (data) {
        $('#kanye-quote').text(data.quote);
    });
}

function weatherReport(lat, lon) {
    $.ajax('https://api.open-meteo.com/v1/forecast?latitude=' + lat +'&longitude=' + lon + '&current_weather=true').done(function (data) {
        $('#temperature').text("Your current temperature: " + data.current_weather.temperature + "°C");
        let weatherCode = data.current_weather.weathercode;
        let weatherString = getWeatherString(weatherCode);
        $('#weatherString').text("Weather: " + weatherString);
    });
}

function getWeatherString(code) {
    let weatherValue = "";

    switch(code) {
        case 0:
            weatherValue = 'Clear sky';
            break;
        case 1:
            weatherValue = 'Mainly clear';
            break;
        case 2:
            weatherValue = 'Partly cloudy';
            break;
        case 3:
            weatherValue = 'Overcast';
            break;
        case 45:
            weatherValue = 'Fog';
            break;
        case 48:
            weatherValue = 'Depositing rime fog';
            break;
        case 51:
            weatherValue = 'Light Drizzle';
            break;
        case 53:
            weatherValue = 'Moderate Drizzle';
            break;
        case 55:
            weatherValue = 'Dense Drizzle';
            break;
        case 56:
            weatherValue = 'Light Freezing Drizzle';
            break;
        case 57:
            weatherValue = 'Dense Freezing Drizzle';
            break;
        case 61:
            weatherValue = 'Slight Rain';
            break;
        case 63:
            weatherValue = 'Moderate Rain';
            break;
        case 65:
            weatherValue = 'Heavy Rain';
            break;
        case 66:
            weatherValue = 'Light Freezing Rain';
            break;
        case 67:
            weatherValue = 'Heavy Freezing Rain';
            break;
        case 71:
            weatherValue = 'Slight Snow Fall';
            break;
        case 73:
            weatherValue = 'Moderate Snow Fall';
            break;
        case 75:
            weatherValue = 'Heavy Snow Fall';
            break;
    }
    
    return weatherValue;
}