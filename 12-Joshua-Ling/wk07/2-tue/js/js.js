
$(document).ready( function() {
  ajaxCalls();

  $('#refresh').on('click', ajaxCalls);

  $('#disney-search').on('submit', (event) => {
    event.preventDefault();

    const name = $('#disney-name').val();
    console.log(name);
    $.ajax('https://api.disneyapi.dev/character/' + name).done((disney) => {
      $('#disney-name').text(disney.data.name);
      $('#disney-img').attr('src', disney.data.imageUrl);
    });
  })

  $('#waifu-search').on('submit', function (event) {
    event.preventDefault();

    const tag = $('#waifu-name').val();
    $.ajax('https://api.waifu.im/search/?included_tags=' + tag).done((weeb) => {
      $('#weeb').attr('src', weeb.images[0].url);
    });
  });

  $('#search').on('submit', function (event) {
    event.preventDefault();
    const idNum = $('#id-value').val();

    $.ajax('https://acnhapi.com/v1/villagers/' + idNum).done((char) => {
      $('#ac-name').text(char.name["name-USen"]);
      $('#ac-birthday').text(char["birthday-string"]);
      $('#ac-img').attr('src', char.image_uri);
    });

    $.ajax('https://api.disneyapi.dev/character/' + idNum).done((disney) => {
      $('#disney-name').text(disney.data.name);
      $('#disney-img').attr('src', disney.data.imageUrl);
    });

  })
});

const ajaxCalls = () => {

  const randomNum = Math.floor(Math.random() * 100);
  const randomACNum = Math.floor(Math.random() * 391);
  const randomDNum = Math.floor(Math.random() * 7526);

  $.ajax('https://geek-jokes.sameerkumar.website/api?format=json').done(function(joke) {
    $('#joke').text(joke.joke);    
  });

  $.ajax('https://api.imgflip.com/get_memes').done(function(meme) {
    $('#meme').attr('src', meme.data.memes[randomNum].url);
  });

  $.ajax('https://api.waifu.im/search').done((weeb) => {
    $('#weeb').attr('src', weeb.images[0].url);
  });

  $.ajax('https://v2.jokeapi.dev/joke/Any').done((joke) => {
    $('#dark-setup').text(joke.setup);
    $('#dark-delivery').text(joke.delivery);
  });

  $.ajax('https://acnhapi.com/v1/villagers/' + randomACNum).done((char) => {
    $('#ac-name').text(char.name["name-USen"]);
    $('#ac-birthday').text(char["birthday-string"]);
    $('#ac-img').attr('src', char.image_uri);
  });

  $.ajax('https://api.disneyapi.dev/character/' + randomDNum).done((disney) => {
    $('#disney-name').text(disney.data.name);
    $('#disney-img').attr('src', disney.data.imageUrl);
  });
}