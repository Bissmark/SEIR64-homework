// When button in #waifu is clicked perform event function
$('#waifu').on('click', function (event) {
    event.preventDefault();

    // Clear kawaii waifu
    $('#cover').empty();

    $.ajax('https://api.waifu.im/search').done(function (data) {
         // If the request is successful, create an image element and set its source to the generated image
        $("#cover").attr("src", data.images[0].url);  
    });
});

// When button in #jokesGenerate is clicked perform event function
$('#jokesGenerate').on('click', function (event) {
    event.preventDefault();
    
    // Clears jokeQuestion and jokeResult after
    $('#jokeQuestion').empty();
    $('#jokeResult').empty();

    $.ajax('https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit').done(function (data) {
        let setup = data.setup;
        let delivery = data.delivery;
        
        // Check if the joke has a setup
        if (setup) {
            // Create a new <p> element for the setup
            let jokeSetup = $('<p>').text(setup);
            // Append the setup element to the HTML element with id="jokeQuestion"
            $('#jokeQuestion').append(jokeSetup);
        }
        
        // Create a new <p> element for the delivery
        let jokeDelivery = $('<p>').text(delivery);
        // Append the delivery element to the HTML element with id="jokeResult"
        $('#jokeResult').append(jokeDelivery);
    });
});

// When form is submitted perform event function
$('#translate').on('submit', function (event) {
    event.preventDefault();
    
    // Clears contents within id
    $('#translateResult').empty();
    
    // Gets inputBox value in a new variable
    const input = $('#inputBox').val();
    // Gets the api's given text and adds it into input variable
    $.ajax('https://api.funtranslations.com/translate/minion?text=' + input).done(function (data) {
        $('#translateResult').append(data.contents.translated); // Appends translated text into #translateResult (<p>)
    });
});
  

