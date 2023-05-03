// Added an event listener to the form submission
$('#search').on('submit', function (event) {
  // Preventing the form from submitting as it normally does
  event.preventDefault();
  // Get the date entered by the user
  const date = $('#date').val();
  // Send an AJAX request to the APOD API with the user's date and API key
  $.ajax('https://api.nasa.gov/planetary/apod?api_key=Kv6gTygLTeCDXCdTCfTl8vGWDULWO88bsb3klIxL&date=' + date).done(function (data) {
      // Extract the image URL and explanation from the API
      const imgUrl = data.url;
      const explanation = data.explanation;
      const html = '<img src="' + imgUrl + '"><p>' + explanation + '</p>';
      // Update the contents of the result element with the above
      $('#result').html(html);
    })
});
