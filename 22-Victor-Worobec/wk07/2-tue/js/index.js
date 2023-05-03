const getWeather = function () {
    
    // Object will compile query with attached data like so (note the ? and & characters):
    // https://api.openweathermap.org/data/2.5/weather?q=city_name&appid=083a2a9397ecbfea2392f361e4214b8b&units=metric
    $.ajax({
        url: 'https://api.openweathermap.org/data/2.5/weather',
        data: {
            q: $('#weather-location').val(),
            appid: '083a2a9397ecbfea2392f361e4214b8b',
            units: 'metric'
        }
    })

    .done( function (data) {
        $('#weather-info').empty();
        $('#weather-info').append($('<p>').text(`Weather information for ${ data.name }:`));
        $('#weather-info').append($('<ul>').attr('id', 'weather-info-list'));
        $('#weather-info-list').append($('<li>').text(`Temp: ${ data.main.temp }\u00b0C`));
        $('#weather-info-list').append($('<li>').text(`Feels like: ${ data.main.feels_like }\u00b0C`));
        $('#weather-info-list').append($('<li>').text(`Humidity: ${ data.main.humidity }%`));
        $('#weather-info-list').append($('<li>').text(`Condition: ${ data.weather[0].description }`));
        $('#weather-info-list').append($('<li>').text(`Wind speed: ${ data.wind.speed } metres/second`));
    });
};

const getRecipe = function () {
    $.ajax(`https://www.themealdb.com/api/json/v1/1/search.php?s=${ $('#recipe-search').val() }`)
    
    .done( function (data) {
        meal = data.meals[0];

        $('#recipe-section').empty();
        $('#recipe-section').append($('<h3>').text(`${ meal.strMeal}:`));

        $('#recipe-section').append($('<p>').text('Ingredients and their measurements:'));

        // Loop through 20 because the api works with 20 ingredients and their respective measurements at most  
        for (let i = 1; i <= 20; i++) {

            // Get current ingredient/measurement
            const ingredient = meal[`strIngredient${i}`];
            const measurement = meal[`strMeasure${i}`];

            // Some recipes do not take up all 20 ingredient slots, so check if all items exist
            if (ingredient && ingredient !== '') {

                // Print ingredient with respective measurement
                $('#recipe-section').append($('<p>').text(`${ ingredient } - ${ measurement}`));
            }
        }

        $('#recipe-section').append($('<p>').text(`Instructions: ${ meal.strInstructions }`));
    });
};

const showQuestions = function () {
    // Note ? and & characters
    $.ajax("https://quizapi.io/api/v1/questions?apiKey=wyBPGgtHL6WFinUlivpAj2BgDqzkRz56bsNTv2MO&limit=5")
    
    .done(function (data) {
        $('#quiz-section').empty();
        $('#quiz-section').append($('<ol>').attr('id', 'quiz-section-list'));

        // Loop through all the questions returned from the query
        data.forEach( function (questionData, index) {

            // Make list item with it's appropriate HTML id
            $('#quiz-section-list').append($('<li>').attr('id', `quiz-item-${ index }`));

            // Give list item its own ordered list, with the question as its text
            $(`#quiz-item-${ index }`).append($('<ol>').attr('id', `quiz-item-${ index }-question`).text( questionData.question ));

            // Append all answers to the question's ordered list - answers is an object with keys:values
            for (const key in questionData.answers) {

                // Get value of key
                const answer = questionData.answers[key];

                // Check if null and print if not
                if (answer !== null) {
                    $(`#quiz-item-${ index }-question`).append($('<li>').text( answer ));
                }
              }
        });
    });
};

$(document).ready(function () {
    
    $('#weather-form').on('submit', function (event) {
        event.preventDefault();
        getWeather()
    });

    $('#recipe-form').on('submit', function (event) {
        event.preventDefault();
        getRecipe();
    });

    showQuestions();
});