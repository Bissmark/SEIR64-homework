$(document).ready(function () {
    $('#random').on('submit', function (event) {
        
        event.preventDefault();
        
        $.ajax('https://www.themealdb.com/api/json/v1/1/random.php').done(function (info) {
            const code = info.meals[0]
            // const main = info.meals[0].strMeal;
            $('#title').text(code.strMeal);
            $('#link').text(code.strSource);
            $('#picture').attr('src', code.strMealThumb);
            $('#instructions').text(code.strInstructions);
        });
    });
})
