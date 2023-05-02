$(document).ready(function () {
    $('#search').on('submit', function (event) {
        event.preventDefault();
        
        const a = $('#a').val();
        const b = $('#b').val();

        $.ajax('https://picsum.photos/' + a + '/' + b).done(function (info) {

            const code = 'https://picsum.photos/' + a + '/' + b;
            // const main = info.meals[0].strMeal;
            $('#cover').attr('src', code);
        });
    });
})
