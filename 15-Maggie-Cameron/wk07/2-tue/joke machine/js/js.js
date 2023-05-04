const tellJoke = function () {
    $.ajax('https://official-joke-api.appspot.com/jokes/random').done(function (data) {
        const setUp = data.setup 
        const punchLine = data.punchline;

        $('#setUp').text(setUp);
        $('#punchLine').text("");
        
        $('#newJoke').on('click', function () {
            tellJoke();
        });        
        
        $('#punch').on('click', function () {
        $('#punchLine').text(punchLine);
        });
    });
};
tellJoke();