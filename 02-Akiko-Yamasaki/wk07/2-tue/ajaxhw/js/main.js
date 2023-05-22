$(document).ready(function () {
  
    $("#numberbtn").on("click", function () {
    $.ajax("http://numbersapi.com/random/trivia?json").done(function (data) {
      $(".number").text(`your lucky number today is ${data.number}`);
    });
  });

  $('#wordbtn').on('click', function(){
    $.ajax({ url: "https://api.api-ninjas.com/v1/randomword",
    headers: { "X-Api-Key": "3Qvz1Dnz8UoBagrYvz36Bw==9Qm5HcLK9TnTb0pK" },
  }).done(function (word) {
    $(".word").text( `${word.word}`);
    $('.msg').text(`Use ${word.word} in a conversation, and a person will give you a guidance.`);
  });
});

  // const category = 'food';
  // $.ajax({
  //     // method: 'GET',
  //     url: 'https://api.api-ninjas.com/v1/randomimage?category=' + category,
  //     headers: { 'X-Api-Key': '3Qvz1Dnz8UoBagrYvz36Bw==9Qm5HcLK9TnTb0pK', 'Accept': 'image/jpg'}
  // }).done(function(image){

  //     $('#img').attr('src', )
  // });
  const emojiHubUrl = "https://emojihub.yurace.pro/api/random/group/face-positive"
  $("#guardian").on("click", function () {
    $.ajax(emojiHubUrl).done(
      function (data) {
        console.log(data);
        const todaysGuardianEmoji = data.htmlCode[0];
        $("#image").html(data.htmlCode[0]);
        $('.guradianmsg').text(`This is your gurdian today.`)    
      }
    );
  });

  $("#icebreakerbtn").on("click", function () {
    $.ajax("https://meowfacts.herokuapp.com/").done(function (fact) {
      const yourIceBreaker = fact.data[0];
      const msg = "Remember, cat can see through you"
    //   $("p").text( msg + "</p>");
      $(".cattrivia").text(yourIceBreaker);
      $('.catmsg').text(msg);
      
      
    });
  });
});
