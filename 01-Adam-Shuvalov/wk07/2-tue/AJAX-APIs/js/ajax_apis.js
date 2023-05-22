


$.ajax('http://api.open-notify.org/iss-now.json').done( function(data) {

    let longitude = data['iss_position']['longitude']
    let latitude = data['iss_position']['latitude']
   
    console.log(data)
    $('#ISS-location').text('Longitute: ' + longitude + ' Latitude: ' + latitude)
})

$('#search').on('submit', function (event){

    event.preventDefault();
    let date = $('#neo-search').val()

    $.ajax(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${date}&end_date=&api_key=5V02pLsKBFHEsj611igPm5DX3O25d0SWvyCrL9nT`).done( function(data) {
        let neo = data.near_earth_objects[date]
        for( let i = 0; i < neo.length; i ++) {
            $('#neo-list').append(`<ul> Name: ${neo[i].name} - Hazard: ${neo[i].is_potentially_hazardous_asteroid} - Magnitude/Brightness: ${neo[i].absolute_magnitude_h}
            </ul>`)
        }
    })
})

$('#search2').on('submit', function (event) {

    event.preventDefault();
    let search = $('#article-search').val()

    $.ajax(`https://api.spaceflightnewsapi.net/v4/articles/?limit=10&summary_contains=${search}`).done( function (data) {
        results = data.results
        for ( let i = 0; i < results.length; i ++ ) {
            $('#article-list').append(`<ul><a href="${results[i].url}">${results[i].title}</a></ul>`)
        }
    })
})