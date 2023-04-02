
// Mad-libs

// const button = document.getElementById('lib-button');
// const makeMadLib = function() {
//     const noun = document.getElementById('noun').value;
//     const adjective = document.getElementById('adjective').value;
//     const someoneName = document.getElementById("person").value; 
//     const story = (`${someoneName} really likes ${adjective} ${noun}`);   
//     document.getElementById('story').innerHTML = story;
// }
// button.addEventListener('click', makeMadLib);

const $button = $('#lib-button');
$('button').on('click', function() {
    const $noun = $('#noun').val();
    const $adjective = $('#adjective').val();
    const $someoneName = $('#person').val();
    const $story = (`${$someoneName} really likes ${$adjective} ${$noun}`);
    $('#story').html = $story;
})
$('button').click();


