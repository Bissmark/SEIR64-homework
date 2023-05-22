$(document).ready(function() {
  $('#search-form').submit(function(event) {
    event.preventDefault(); // prevent the form from submitting normally
    let searchQuery = $('#search-input').val();
    $.ajax({
      url: 'https://api.disneyapi.dev/characters?name=',
      dataType: 'json',
      contentType: "application/json;charset=utf-8",
      success: function(data) {
        $('#character-container').empty();  //clear previous results
        // if (data.data.length > 0) {
          $.each(data.data, function(index, character) {
            let characterName = character.name;
            let characterImage = character.imageUrl;
            let characterDetails = "Films: " + character.films.join(", ") + "<br>" + // concats all films together with a comma, does a line break at the end
                                   "Short Films: " + character.shortFilms.join(", ") + "<br>" +
                                   "TV Shows: " + character.tvShows.join(", ") + "<br>" +
                                   "Video Games: " + character.videoGames.join(", ") + "<br>" +
                                   "Park Attractions: " + character.parkAttractions.join(", ") + "<br>";
            $('#character-container').append('<div class="character">' + 
                                              '<h2>' + characterName + '</h2>' +
                                              '<img src="' + characterImage + '">' +
                                              '<p>' + characterDetails + '</p>' +
                                            '</div>');
          });
        // } 
      },      
    });
  });
});