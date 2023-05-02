// curl "https://www.carboninterface.com/api/v1/estimates"
//   -H "Authorization: Bearer API_KEY"
//   -H "Content-Type: application/json"
//   -X POST
//   -d {
//         "type": "electricity",
//         "electricity_unit": "mwh",
//         "electricity_value": 42,
//         "country": "us",
//         "state": "fl"
//       }

// $('#search').on('submit', function(event) {

//     event.preventDefault();

//     console.log('form submitted');

//     let apiUrl = 'https://www.carboninterface.com/api/v1/estimates';
//     let apiKey = '1YtZgVx0AlwIiuk9pw9wA';

//     const input = $('#input').val();

//     $.ajax({ url: 'https://www.carboninterface.com/api/v1/estimates', type: "POST", headers: {'Authorization': '1YtZgVx0AlwIiuk9pw9wA', 'Content-Type': 'application/json'}, body: JSON.stringify({
//         "type": "electricity",
//         "electricity_unit": "mwh",
//         "electricity_value": 42,
//         "country": "us",
//         "state": "fl"
//     }) }).done(function(data) {
//         console.log(data);
//     })
    

// })


$('#search').on('submit', function(event) {

    event.preventDefault();

    // Define the input variables

    const requestData = {
        type: 'flight',
        passengers: $('#passengers').val().to_i,
        legs: [
            {departure_airport: $('#departure').val(), destination_airport: $('#destination').val()},
        ],
        };

    // Calculate the carbon emissions using Carbon Interface

    const endpoint = 'https://www.carboninterface.com/api/v1/estimates';
    const apiKey = '1YtZgVx0AlwIiuk9pw9wA';

    $.ajax({
    url: endpoint,
    type: 'POST',
    headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
    },
    data: JSON.stringify(requestData),
    success: function(response) {
        $('body').append('<div id="emission"></div>');
        $('#emission').append(`<p>You will be emitting </p>`);
        $('#emission').append(`<h1>${response['data']['attributes']['carbon_kg']} kg</h1>`);
        $('#emission').append(`<p> of carbon into the atmosphere during this flight.</p></div>`);
    },
    error: function(xhr, status, error) {
        console.error(status + ': ' + error);
    }
    })

    // Find various facts about the cities from AirLabs

    $.ajax(`https://airlabs.co/api/v9/airports?iata_code=${$('#destination').val()}&api_key=5f53b01a-4e07-4731-8a51-5aa84166b93c`).done(function(info) {

        $('body').append('<div id="name"></div>');
        $('#name').append(`<p>You will be flying into </p>`);
        $('#name').append(`<h1>${info['response'][0]['name']}.</h1>`);

        if ($(info['response'][0]['alt']).length) {
            $('body').append('<div id="alt"></div>');
            $('#alt').append(`<p>Your altitude will be </p>`);
            $('#alt').append(`<h1>${info['response'][0]['alt']} m.</h1>`);
        }

        $('body').append('<div id="lat"></div>');
        $('#lat').append(`<p>Your latitude will be </p>`);
        $('#lat').append(`<h1>${info['response'][0]['lat']}\u00B0</h1>`);

        $('body').append('<div id="lng"></div>');
        $('#lng').append(`<p>Your longitude will be </p>`);
        $('#lng').append(`<h1>${info['response'][0]['lng']}\u00B0</h1>`);

    })
})

   

