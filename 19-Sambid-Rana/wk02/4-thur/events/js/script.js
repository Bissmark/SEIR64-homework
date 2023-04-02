// Mad Libs
// Start with this webpage, which has several input elements and a button:



// const makeMadLib = function () {
//     const noun = document.getElementById('noun').value;
//     const adjective = document.getElementById('adjective').value;
//     const name = document.getElementById('person').value;
//     const story =`${name} really likes ${adjective} ${noun}`;
    
//     console.log(noun, adjective, name, story)
// document.getElementById('story').innerHTML = story;

// }


// const libit = document.getElementById("lib-button");
// libit.addEventListener('click', makeMadLib)



/////////////////////////////               Using jQuery                /////////////////////////////
// Create a new Javascript file and link to it with a script tag at the bottom.
// Add an event listener to the button so that it calls a makeMadLib function when clicked.
// In the makeMadLib function, retrieve the current values of the form input elements, make a story from them,
//  and output that in the story div (like "Pamela really likes pink cucumbers.")



const makeMadLib = function () {
    const $nounValue = $('#noun').val();
    const $adjectiveValue = $('#adjective').val();
    const $nameValue = $('#person').val()
    const $story = (`${$nameValue} really likes ${$adjectiveValue} ${$nounValue}`)

    $('#story').append($story)

}

const $button = $('#lib-button');
$button.on('click', makeMadLib)