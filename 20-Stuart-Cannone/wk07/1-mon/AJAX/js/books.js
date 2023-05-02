const fetchBook = function () {
    const xhr = new XMLHttpRequest();
    const searchQuery = document.getElementById('search-input').value;

    xhr.onreadystatechange = function () {
        if (xhr.readyState !== 4) {
            return;
        }
        const data = JSON.parse(xhr.responseText);
        const bookDetails = document.getElementById('book-details');
        const title = data.items[1].volumeInfo.title;
        const coverImageLink = data.items[1].volumeInfo.imageLinks.thumbnail;
        const titleElement = document.createElement('h2');
        const coverImageElement = document.createElement('img');

        bookDetails.innerHTML = '';

        titleElement.innerText = title;
        coverImageElement.src = coverImageLink;
        coverImageElement.classList.add('book-cover');
        bookDetails.appendChild(titleElement);
        bookDetails.appendChild(coverImageElement);
    };

    xhr.open('GET', `https://www.googleapis.com/books/v1/volumes?q=${searchQuery}`);
    xhr.send();
};

document.getElementById('fetch').addEventListener('click', fetchBook);
