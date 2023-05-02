const fetchBook = function () {
    const name = document.getElementById('book').value
    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
        if (xhr.readyState !== 4) {
            return;
        }

        const data = JSON.parse(xhr.responseText);
        const image = data["items"][0]["volumeInfo"]["imageLinks"]["thumbnail"];
        const author = data["items"][0]["volumeInfo"]["authors"][0];
        const publisher = data["items"][0]["volumeInfo"]["publisher"];
        const publishDate = data["items"][0]["volumeInfo"]["publishedDate"];
        const description = data["items"][0]["volumeInfo"]["description"];
        const pages = data["items"][0]["volumeInfo"]["pageCount"];
        const ratings = data["items"][0]["volumeInfo"]["averageRating"];

        const img = document.createElement('img');
        img.src = image;
        src = document.querySelector('.books');
        src.insertAdjacentElement('afterend', img);

        const addFact = function (text, dataType) {
            const list = document.createElement('li');
            const span = document.createElement('span');
            span.innerText = (text);
            list.innerText = (dataType);
            list.prepend(span);
            (document.querySelector('ul')).appendChild(list);
        }
        
        addFact('Author: ', author);
        addFact('Published: ', (`by ${ publisher } in ${ publishDate }`));
        addFact('Brief Description: ', description);
        addFact('Total Pages: ', pages);
        addFact('Average User Ratings: ', (`${ratings}/5`));
    };

    xhr.open('GET', `https://www.googleapis.com/books/v1/volumes?q=title:${name}`);
    xhr.send();
};

const btn = document.getElementById('check');
const parent = document.querySelector('ul');

btn.addEventListener('click', function () {
    thumb = document.querySelector('img');
    if (thumb) {
        thumb.parentNode.removeChild(thumb);
    }
    while (parent.hasChildNodes())
        parent.removeChild(parent.firstChild)
    }
);
btn.addEventListener('click', fetchBook);