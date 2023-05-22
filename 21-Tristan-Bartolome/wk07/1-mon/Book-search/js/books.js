const searchBook = function (event) {

    // Clears data in searchResults div
    document.getElementById('searchResults').innerHTML = '';

    // gets name id and stores it in a new variable
    const searchValue = document.getElementById('name').value;


    const xhr = new XMLHttpRequest ();

    xhr.onreadystatechange = function () {
        if (xhr.readyState !== 4) {
            return;
        }

        const data = JSON.parse ( xhr.responseText );

        // gets the value for each object in items
        data.items.forEach( function (item) {

            // creates p element
            const p = document.createElement ('p');

            // puts the value of title inside p element
            p.innerText = item.volumeInfo.title;

            // gets searchResults div by id and adds p to it
            document.getElementById('searchResults').appendChild(p);

            // if volumeInfo has imageLinks create img element and store it in a variable named img
            if (item.volumeInfo.imageLinks) {
                const img = document.createElement ('img')

                // updates the img source with the thumbnail URL
                img.src = item.volumeInfo.imageLinks.thumbnail

                // gets searchResults div by id and adds img to it
                document.getElementById('searchResults').appendChild(img);
            }
        });
    };

    xhr.open('GET', `https://www.googleapis.com/books/v1/volumes?q=intitle:${ searchValue }`);
    xhr.send();
};

// when button is clicked perform searchBook function
document.getElementById('search').addEventListener('click', searchBook);