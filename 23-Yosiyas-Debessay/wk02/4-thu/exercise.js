// const links = document.querySelectorAll('a');

// for (let i = 0; i < links.length; i++) {
//     const link = links[i];
//     console.log(link);
//     const href = link.getAttribute('href');
//     const thumbnailURL = youtube.generateThumbnailUrl(href);
//     const image = document.createElement("img");
//     image.setAttribute('src', thumbnailURL);
//     link.appendChild('image');
// }

// // Retrieve button element and add click event listener
// const libButton = document.getElementById('lib-button');
// libButton.addEventListener('click', makeMadLib);

// // Function to generate the story and display it in the story div
// function makeMadLib() {
//   // Retrieve input values
//   const nounInput = document.getElementById('noun').value;
//   const adjectiveInput = document.getElementById('adjective').value;
//   const personInput = document.getElementById('person').value;

//   // Create story
//   const story = `${personInput} really likes ${adjectiveInput} ${nounInput}.`;

//   // Display story in story div
//   const storyDiv = document.getElementById('story');
//   storyDiv.innerHTML = story;
// }



$(document).click(function() {
    // Retrieve DOM element and attach click event listener
    $('#lib-button').click(function() {
      makeMadLib();
    });
  });
  
  // Function to generate the story and display it in the story div
  function makeMadLib() {
    // Retrieve input values
    const nounInput = $('#noun').val();
    const adjectiveInput = $('#adjective').val();
    const personInput = $('#person').val();
  
    // Create story
    const story = `${personInput} really likes ${adjectiveInput} ${nounInput}.`;
  
    // Display story in story div
    $('#story').html(story);
  }


const sumArrays = function(array1, array2) {
    sum = 0;
    for (let i = 0; i < array1.length; i++) {
        sum += array1[i]
    }

    for (let i = 0; i < array2.length; i++) {
        sum += array2[i]
    }
    return sum;
}
const array1 = [2, 6.4, 3];
const array2 = [3, 3.6, 2];

console.log(sumArrays(array1, array2));