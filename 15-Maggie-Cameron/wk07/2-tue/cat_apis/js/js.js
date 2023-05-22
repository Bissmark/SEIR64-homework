const fetchFact = function () {
    $.ajax('https://meowfacts.herokuapp.com/').done(function (info) {
        // console.log(data);
        const fact = info.data[0];
        // console.log(fact);
        $('#catFact').text(fact);

})};
$('#fetch').on('click', fetchFact);
fetchFact();

const fetchImage = function () {
    $.ajax('https://api.thecatapi.com/v1/images/search').done(function (info) {
        const catImage = info[0].url;
        // console.log(catImage);
        $('#catImage').attr('src', catImage);

})};
$('#fetch').on('click', fetchImage);
fetchImage();
