
console.log('Madlib')

$('#lib-button').on('click', function () {
    $('#story').html(`${$('#person').val()} ${$('#adjective').val()} ${$('#noun').val()}`)
});


