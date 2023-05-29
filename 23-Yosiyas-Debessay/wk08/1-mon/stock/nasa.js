app.get('/nasa', function(req, res) {
    const apiKey = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY';
    const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;
  
    request(url, function(error, response, body) {
      const data = JSON.parse(body);
      const imageUrl = data.url;
  
      res.send(`<img src="${imageUrl}">`);
    });
  });
  