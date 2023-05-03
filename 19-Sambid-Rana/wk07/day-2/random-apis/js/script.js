
$(document).ready(function () {
    //Dog generator
    $('#search').on('submit', function (event) {
        event.preventDefault();

        $.ajax('https://dog.ceo/api/breeds/image/random').done(function (data) {
            const imageLink = data.message;
            console.log(imageLink)
            $('#dogImage').attr('src', imageLink)
            $('#dogLink').attr('href', imageLink)

        })

    })

    //State
    $('#airVisual').on('submit', function (event) {
        event.preventDefault();

        const apiKey = '5a01d44b-e5ff-49b2-bde6-b369dd482930'
        const countryName = $('#countryAir').val()

        $.ajax("http://api.airvisual.com/v2/states?country=" + countryName + "&key=" + apiKey).done(function (data1) {

            const result = data1.data
            $('#ulList').empty();
            const states = result.forEach(element => {

                state = (element.state)
                $('<li>' + state + '</li>').appendTo('#ulList')


            });

        })
    })

})


// done(function (rank) {

//     $.ajax("http://api.airvisual.com/v2/city_ranking?key=" + apiKey)

//     console.log(rank.data[0])
// })