button = $('#lib-button');

const nakeMadLib = function() {

  alert($('#person').val() + ' really likes ' + $('#adjective').val() + ' ' + $('#noun').val());
};

button.on('click', nakeMadLib);