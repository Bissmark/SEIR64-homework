// Creating a function
const fetchBookCover = function () {
    
    // Adding a new object
    const xhr = new XMLHttpRequest();

    // Defining a callback (I think that's what it is called) for when the ready state changes

    xhr.onreadystatechange = function () {

        // Checking if the request is complete, denoted by 4

        if (xhr.readyState !== 4) {
            // If not, exit the function
            return;
        }

        // Parse the response as JSON
        const data = JSON.parse(xhr.responseText);

        // Find the book cover URL from the API response. 
        const bookCoverUrl = data.items[0].volumeInfo.imageLinks.thumbnail;

        // Creating a new img element
        const bookCover = document.createElement('img');
        
        // Setting the source of the img to the book cover URL above
        bookCover.src = bookCoverUrl;
        
        // Appending the image to the body of the HTML document.
        document.body.appendChild(bookCover);
    }

    // Retrieving the search input element by its ID
    const searchInput = document.getElementById('search-input');

    // Retrieving the value of the search input
    const searchQuery = searchInput.value;
    
    // Setting the URL of the request and the route for the search query
    xhr.open('GET', `https://www.googleapis.com/books/v1/volumes?q=${(searchQuery)}`);

    // Sending the request
    xhr.send();
}

// Adding an event listender for the form submit event, denoted by the button
document.querySelector('form').addEventListener('submit', function (event) {
    // Preventing the default form submission behaviour
    event.preventDefault();

    // Invoking the fetchBookCover function to retrieve and display the book cover.
    fetchBookCover();
});

