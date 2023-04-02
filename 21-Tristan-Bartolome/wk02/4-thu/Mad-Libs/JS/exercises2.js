console.log('Hello World');

const makeMadLib = function () {
    const $noun = $(`#noun`).val();
    const $adjective = $(`#adjective`).val();
    const $person = $(`#person`).val();

    const string = $noun + $adjective + $person;

    $(`#story`).html(string)
};

$('#lib-button').on("click", makeMadLib);