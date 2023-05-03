button = document.getElementById('booksearchButton');
input = document.getElementById('booksearchInput');

button.addEventListener("click", function () { // removes previously appended elements and calls Bookinfo with title that user entered

    elements = document.getElementsByClassName('element')

    for (let i = elements.length - 1; i >= 0; i--) {
        elements[i].remove()
    }
    
    let bookTitle = input.value
    getBookInfo(bookTitle)

})

const getBookInfo = function (bookTitle) {
     
    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
        if (xhr.readyState !== 4) {
            return
        }
        const container = document.getElementById('container')

        const data = JSON.parse(xhr.responseText);
        console.log(data)

        const title = document.createElement('h1');
        title.innerText = `Title: ${data.items[0].volumeInfo.title}`;
        title.className = 'element'
        container.appendChild(title);

        const authors = document.createElement('p');
        authors.innerText = `Author/s: ${data.items[0].volumeInfo.authors}`;
        authors.className = 'element'
        container.appendChild(authors);

        const summary = document.createElement('p');
        summary.innerText = `Description: ${data.items[0].volumeInfo.description}`;
        summary.className = 'element'
        container.appendChild(summary);

        const pages = document.createElement('p');
        pages.innerText = `Page Count: ${data.items[0].volumeInfo.pageCount}`;
        pages.className = 'element'
        container.appendChild(pages);

        const poster = document.createElement('img');
        poster.src = data.items[0].volumeInfo.imageLinks.thumbnail;
        poster.className = 'element'
        container.appendChild(poster);

    }

    xhr.open("GET", `https://www.googleapis.com/books/v1/volumes?q=title:${bookTitle}`)
    xhr.send()

}

