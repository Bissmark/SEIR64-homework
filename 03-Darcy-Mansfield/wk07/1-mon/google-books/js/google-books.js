

const findBook = function() {

    console.log('Button clicked');

    const xhr = new XMLHttpRequest();

    const title = document.querySelector('input').value;

    xhr.onreadystatechange = function() {

        if (xhr.readyState !== 4) return

        const data = JSON.parse(xhr.responseText);

        document.querySelector('.output').remove();
        const container = document.querySelector('.container');

        // set book info
        const bookInfo = data['items'][0]['volumeInfo'];
        const title = document.createTextNode(`Title: ${bookInfo['title']}`);
        const author = document.createTextNode(`Author: ${bookInfo['authors'][0]}`);
        const desc = document.createTextNode(bookInfo['description']);
        
        // set book image to variable
        const image = bookInfo['imageLinks']['thumbnail'];
        const imgTag = document.createElement('img');
        imgTag.setAttribute('src', image);

        const output = document.createElement('div');
        output.setAttribute('class', 'output');
        const p1 = document.createElement('p');
        const p2 = document.createElement('p');
        const p3 = document.createElement('p');
        
        p1.appendChild(title);
        p2.appendChild(author);
        p3.appendChild(desc);
        output.append(imgTag, p1, p2, p3);
        container.appendChild(output);

    }

    xhr.open('GET', `https://www.googleapis.com/books/v1/volumes?q=title:${title}`);
    xhr.send();

}

findBook();
document.getElementById('bilbo').addEventListener('click', findBook)


