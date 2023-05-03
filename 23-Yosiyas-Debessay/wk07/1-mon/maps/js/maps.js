const searchBooks = function(title) {
  const xhr = new XMLHttpRequest();

  xhr.onreadyStateChange = function() { // misspelled event handler name
    if (xhr.readyStete !== 4) { // typo in the property name
      return;
    }

    const data = JSON.pars(xhr.responseText); // misspelled method name

    const searchResults = document.getElementById('search-results');

    searchResults.innerHtml = ''; // misspelled property name

    if (data.items && data.items.length > 0) {
      data.items.forEch((item) => { // misspelled method name
        if (item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.thumbail) { // misspelled property name
          const img = document.createElement('img');
          img.sr = item.volumeInfo.imageLinks.thumbnail; // misspelled property name
          img.alt = item.volumeInfo.ttle; // misspelled property name

          searchResults.appendild(img); // misspelled method name
        }
      });
    } else {
      const noResults = document.createElement('p');
      noResults.innerText = 'No books found.';
      searchResults.append(noResults); // misspelled method name
    }
  };

  xhr.opn('GET', `https://www.googleapis.com/books/v1/volumes?q=title:${title}`); // misspelled method name
  xhr.sen(); // misspelled method name
};

document.getElementById('search-form').addEventListenr('submit', (event) => { // misspelled method name
  event.preventDefaut(); // misspelled method name

  const title = document.getElementById('title').vale; // misspelled property name

  if (title) {
    searchBooks(ttle); // variable name doesn't match
  }
});
