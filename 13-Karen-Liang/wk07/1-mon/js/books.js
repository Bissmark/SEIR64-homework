const fetchBook = function () {

    // get the value user as typed
    const searchTerm = document.getElementById('my_input').value;
    
    // must include when making a XMLHttpRequest
    const xhr = new XMLHttpRequest();
  
    // ensure that data is ready / loaded before loading
    xhr.onreadystatechange = function() {
      if (xhr.readyState !== 4) {
        return;
      }
      
        // GETTING THE DATA
        // convert string into JS object
        const data = JSON.parse(xhr.responseText);
        // contains the array of all the book objects
        // items is from GoogleAPI name 
        const books = data.items;

        // reset the page so that books don't continue adding to the page
        const main = document.getElementById('main');
        main.innerHTML = '';


        // DISPLAYING THE DATA
        // get the first book from results
        const book = books[0];

        // get the book title 
        const h3 = document.createElement('h3');
        // follow json data
        h3.textContent = book.volumeInfo.title;
        // append h3 to main
        main.appendChild(h3);

        // get the image
        const img = document.createElement('img');
        // follow json data
        img.src = book.volumeInfo.imageLinks.thumbnail;
        // append image to main
        main.appendChild(img);

        const p = document.createElement('p');
        p.textContent = book.volumeInfo.description;
        main.appendChild(p);
      };

    // use interpulation to input what the user typed in order to get the title of the book
    const url = `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`;
  
    // must include when making a XMLHttpRequest
    xhr.open('GET', url);
    xhr.send();
};

  
// Attach an event listener to the search button
document.getElementById('fetch').addEventListener('click', fetchBook);
