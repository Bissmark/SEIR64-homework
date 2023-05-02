// Added an event listener to the form submission
$('#pokemon-form').on('submit', function (event) {
    // Prevents the form from operating as it normally does
    event.preventDefault();
    // Retrieve the generation ID or name
    const generation = $('#pokemon-name').val();
    // Making a request for the data
    $.ajax(`https://pokeapi.co/api/v2/generation/${generation}/`).done(function (data) {
        // Retrieving information for the generation name, region, and versions
        const generationName = data.name;
        const generationRegion = data.main_region.name;
        const generationVersions = data.version_groups.map(versionGroup => versionGroup.name);
        // Displaying the information
        $('#pokemon-info').html(`<p>Generation Name: ${generationName}</p><p>Generation Region: ${generationRegion}</p><p>Generation Versions: ${generationVersions.join(', ')}</p>`);
    })
});
