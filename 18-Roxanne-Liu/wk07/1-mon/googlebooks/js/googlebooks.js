document.getElementById('search').addEventListener('submit', function (event) {
    event.preventDefault(); 

    const title = document.getElementById('title').value;

    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://www.googleapis.com/books/v1/volumes?q=title:"' + title +'"');
    xhr.send();


    xhr.onreadystatechange = function () {
        if (xhr.readyState !== 4) return; // not ready yet
        const data = JSON.parse(xhr.responseText);

        const cover = data.items[0].volumeInfo.imageLinks.thumbnail;
        document.getElementById('cover').setAttribute('src', cover);

        const book_title = data.items[0].volumeInfo.title;
        document.getElementById('title').innerHTML= book_title;
       
        const book_author = data.items[0].volumeInfo.authors.join(', ');
        document.getElementById('author').innerHTML= "Author: " + book_author;
       
        const book_info = data.items[0].volumeInfo.description;
        document.getElementById('description').innerHTML= "Description: " + book_info;
    }; 
});






