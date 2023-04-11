console.log("is this thing on?");

const $button = $('#lib-button');

const makeMadLib = function () {
    const noun = $('#noun').val();
    const adjective = $('#adjective').val();
    const name = $('#person').val();

    const story = `${ name } really likes ${ adjective } ${ noun }`
    $('#story').prepend('<p>' + story + '</p>');
};

$button.on('click', makeMadLib);


