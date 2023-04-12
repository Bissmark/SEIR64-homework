$('#lib-button').on('click', function(event){
const noun = $('#noun').val();
const adjective = $('#adjective').val();
const person = $('#person').val();

$('#StoryTime').html(`${noun} and ${adjective} and ${person}`)

})
