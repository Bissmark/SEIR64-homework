
// const button = $('#lib-button');

// const makeMadLib = function() {

//     const noun = document.getElementById('noun').value;
//     const adjective = document.getElementById('adjective').value;
//     const person = document.getElementById('person').value;

//     const story = `${person} really likes ${adjective} ${noun}s`;

//     document.getElementById('story').innerHTML = story;

// }

// button.addEventListener('click', makeMadLib);

$('#lib-button').on('click', function() {
    // const person = $('#person').val();
    // const noun = $('#noun').val();
    // const adjective = $('#adjective').val();

    console.log(`${$('#person').val()} really likes ${$('#adjective').val()} ${$('#noun').val()}.`);
});