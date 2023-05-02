$('#lib-button').on( 'click', function () {
    $('#story').empty().css( 'margin', '20px');
    const noun = $('#noun').val();
    const adj = $('#adjective').val();
    const person = $('#person').val();
    const story = `${ person } really like ${ adj } ${ noun }.`;
    $('#story').append( story );
});