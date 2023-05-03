const tellJoke = function () {
    $.ajax('https://official-joke-api.appspot.com/jokes/random').done(function (data) {
        $('body').append('<p>' + data.setup + '</p>');

        const clickPunchline = function () {
            $('#punch').on('click', function() {
                $('body').append('<p>' + data.punchline + '</p>'); 
            });
        };
        clickPunchline();
     });
};
tellJoke();
