// Define a function that searches for books using the Google Books API
const searchBooks = function(title) {
    // Create a new XMLHttpRequest object
    const xhr = new XMLHttpRequest();
  
    // Set a function to handle the response when the request state changes
    xhr.onreadystatechange = function() {
      // Check if the request is finished
      if (xhr.readyState !== 4) {
        return;
      }
  
      // Parse the JSON response data
      const data = JSON.parse(xhr.responseText);
      
      // Get the element that will display the search results
      const searchResults = document.getElementById('search-results');
      
      // Clear any previous search results
      searchResults.innerHTML = '';
  
      // Check if any search results were returned
      if (data.items && data.items.length > 0) {
        // Loop through each search result
        data.items.forEach((item) => {
          // Check if the search result has a thumbnail image
          if (item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.thumbnail) {
            // Create an <img> element with the thumbnail image and book title as alt text
            const img = document.createElement('img');
            img.src = item.volumeInfo.imageLinks.thumbnail;
            img.alt = item.volumeInfo.title;
            
            // Add the <img> element to the search results display
            searchResults.appendChild(img);
          }
        });
      } else {
        // If no search results were returned, display a message to the user
        const noResults = document.createElement('p');
        noResults.innerText = 'No books found.';
        searchResults.appendChild(noResults);
      }
    };
  
    // Send a GET request to the Google Books API with the search title in the query string
    xhr.open('GET', `https://www.googleapis.com/books/v1/volumes?q=title:${title}`);
    xhr.send();
  };
  
  // Add an event listener to the search form that searches for books when the form is submitted
  document.getElementById('search-form').addEventListener('submit', (event) => {
    // Prevent the default form submission behavior
    event.preventDefault();
  
    // Get the search title from the input field
    const title = document.getElementById('title').value;
  
    // If a search title was entered, search for books
    if (title) {
      searchBooks(title);
    }
  });
  