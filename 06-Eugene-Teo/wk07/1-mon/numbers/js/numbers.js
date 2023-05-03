const searchBooks = function (title) {       
    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
    if (xhr.readyState !== 4) {
        return;
    }

    const data = JSON.parse(xhr.responseText);
    console.log(data);

    const thumbnailUrl = data["items"][0]["volumeInfo"]["imageLinks"]["thumbnail"];
    const img = document.createElement('img');
    img.src = thumbnailUrl;

    const bookCover = document.querySelector('.book-cover');
    bookCover.innerHTML = ''; //clear html 
    bookCover.appendChild(img);
  
    const description = data["items"][0]["volumeInfo"]["description"];
    const p = document.createElement('p');
    p.innerText = description;
    const bookDescription = document.querySelector('.book-description');
    bookDescription.innerHTML = ''; //clear description
    bookDescription.appendChild(p);
};

xhr.open('GET', 'https://www.googleapis.com/books/v1/volumes?q=title:' + title);
xhr.send(); //this is asynchronous
console.log('here is the response', xhr.responseText);
};
document.getElementById('search').addEventListener('click', function (event) {
    event.preventDefault();
    const title = document.getElementById('title').value;
    searchBooks(title);
});
