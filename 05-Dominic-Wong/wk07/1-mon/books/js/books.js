// get text from input
const getBookThumb = function () {

    // get user input from search box
    const book_title = document.getElementById('book-input').value;

    // Make the page empty when someone presses button again.
    const result_container = document.getElementsByClassName('book-info')[0];
    result_container.innerHTML = "";

    const xhr = new XMLHttpRequest();
    xhr.open('GET', `https://www.googleapis.com/books/v1/volumes?q=${book_title}`)
    xhr.send();
    xhr.onreadystatechange = function () {
        if (xhr.readyState !== 4) return; // not ready yet
            
        // get the payload    
        const book_payload = JSON.parse( xhr.responseText );
        
        // get the div where information sits
        const result_container = document.getElementsByClassName('book-info')[0];

        // thumbnail dom
        const book_thumb = document.createElement('img');
        book_thumb.setAttribute('src', book_payload["items"][0]["volumeInfo"]["imageLinks"]["thumbnail"]);
        book_thumb.setAttribute('class', 'feature');
        result_container.appendChild(book_thumb);

        // name title
        const book_title = document.createElement('h3');
        book_title.setAttribute('class', 'book-title')
        book_title.innerText = book_payload["items"][0]["volumeInfo"]["title"];
        result_container.appendChild(book_title);
        
    }
}

document.getElementById('book-btn').addEventListener('click', getBookThumb)