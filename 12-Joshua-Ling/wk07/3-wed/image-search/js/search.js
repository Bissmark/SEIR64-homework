let timeout = false;
let pageNum = 1;
let searchTerm = '';
let maxPage = 99;

$(document).ready(function () {
  $('#search').on('submit', function (event) {
    event.preventDefault();
    $('#images').empty();
    search = $('#query').val();
    if (timeout === false && search !== searchTerm) {
      searchTerm = search;
      pageNum = 1;
      searchFlickr(search);
      timeout = true;
      window.setTimeout(() => {
        timeout = false;
      }, 2500);
    }
    
  });

  $(window).on('scroll', _.throttle(scrollCheck, 2000));
    
});

const scrollCheck = () => {
  const scrollBottom = ($(document).height() - $(window).height() - $(window).scrollTop());
    if (scrollBottom <= 700) {
      const searchTerm = $('#query').val();
      searchFlickr(searchTerm);
    }
  
};


const searchFlickr = function (keywords) {
  const flickrURL = "https://api.flickr.com/services/rest";

  if (keywords === searchTerm && pageNum === maxPage) return;

  $.getJSON(flickrURL, {
    method: 'flickr.photos.search',
    api_key: '2f5ac274ecfac5a455f38745704ad084',
    text: keywords,
    format: 'json',
    nojsoncallback: 1,
    page: pageNum
  }).done(showImages).done(function (info) {
      console.log(info);
      maxPage = info.photos.pages;
  });

  pageNum += 1;
};

const showImages = function (results) {
  const urls = _(results.photos.photo).map(generateURL);
  _(urls).each(function (url) {
    const $img = $('<img>', {src: url});
    $img.appendTo('#images');
  });
};

const generateURL = function (p) {
  return [
    'http://farm',
    p.farm,
    '.static.flickr.com/',
    p.server,
    '/',
    p.id,
    '_',
    p.secret,
    '_q.jpg'//change q for different sizes (see doc)
  ].join('');
}