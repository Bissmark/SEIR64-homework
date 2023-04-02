const onButtonClick = function() {
  let n = $('#noun').val();
  let adj = $('#adjective').val();
  let per = $('#person').val();
  ($('#story').html(n + " really like " + adj + " " + per));
  
};

$('button').on('click', onButtonClick);