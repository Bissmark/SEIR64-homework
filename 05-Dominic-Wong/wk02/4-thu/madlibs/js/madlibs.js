const makeMadLib = function () {

    const phrase = `${$('#person').val()} really likes ${$('#adjective').val()} ${$('#noun').val()}`
    $(`<p>${phrase}</p>`).appendTo('#story')
}

$('#lib-button').on('click', makeMadLib)
