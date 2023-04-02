$(document).click(function() {
    $('#square-button').click(function() {
      const num = $('#square-input').val();
      const result = num * num;
      $('#solution').html(result);
    });
  });

  $(document).click(function() {
    $('#half-button').click(function() {
      const num = $('#half-input').val();
      const result = num / 2;
      $('#solution').html(result);
    });
  });


