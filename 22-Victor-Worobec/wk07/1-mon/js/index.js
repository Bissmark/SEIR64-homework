const getBookData = function () {
    // Create instance of the XMLHttpRequest object
    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
        if (xhr.readyState !== 4) {
            return;
        }

        const data = JSON.parse( xhr.responseText )

        const bookTitle = document.createElement('h2');
        const bookThumbnail = document.createElement('img');
        const bookInfoList = document.createElement('ul');
        const bookAuthors = document.createElement('li');
        const bookPublisher = document.createElement('li');
        const bookPublishedDate = document.createElement('li');

        bookThumbnail.src = data["items"][0]["volumeInfo"]["imageLinks"].thumbnail;
        bookTitle.innerText = data["items"][0]["volumeInfo"].title;
        bookAuthors.innerText = `Author/s: ${ data["items"][0]["volumeInfo"].authors }`;
        bookPublisher.innerText = `Publisher: ${ data["items"][0]["volumeInfo"].publisher }`;
        bookPublishedDate.innerText = `Published Date: ${ data["items"][0]["volumeInfo"].publishedDate }`;

        document.body.appendChild(bookTitle);
        document.body.appendChild(bookThumbnail);
        bookInfoList.appendChild(bookAuthors);
        bookInfoList.appendChild(bookPublisher);
        bookInfoList.appendChild(bookPublishedDate);
        document.body.appendChild(bookInfoList);


    };

    // Open an HTTP request
    xhr.open('GET', `https://www.googleapis.com/books/v1/volumes?q=title:${ document.getElementById('book-input').value }`);

    xhr.send();
}

document.getElementById('fetch').addEventListener('click', getBookData);