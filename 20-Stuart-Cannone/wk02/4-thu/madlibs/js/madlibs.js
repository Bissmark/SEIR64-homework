// Add an event listener to the button so that it calls a makeMadLib function when clicked.
// In the makeMadLib function, retrieve the current values of the form input elements, make a story from them, and output that in the story div (like "Pamela really likes pink cucumbers.")
$(document).ready(function() {
    $('#lib-button').click(function() {
        const noun = $('#noun').val();
        const adjective = $('#adjective').val();
        const name = $('#person').val();

        const story = name + ' really likes ' + adjective + ' ' + noun;

        $('#story').html(story);
    });
});



