const fetchinfo = function () {
    // how to make a div only takes one book info at a time?
    let div = document.getElementById('container');
    div = "";
    
    
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if(xhr.readyState !== 4){
            return;
        }

        const data = JSON.parse(xhr.responseText);
        console.log(data);
        
         const bookTitle = data.items[0].volumeInfo.title;
        // console.log(bookTitle);
        
        const bookCover = data.items[0].volumeInfo.imageLinks.thumbnail;
        // console.log(bookCover);

        const author = data.items[0].volumeInfo.authors;
        // console.log(author);

        const category = data.items[0].volumeInfo.categories;
        console.log(category);

        const description = data.items[0].volumeInfo.description;
        console.log(description);

        const isbn = data.items[0].volumeInfo.industryIdentifiers[0].identifier;
        console.log(isbn);

        document.getElementById('book-title').innerText = bookTitle;
        
        const img = document.getElementById('cover');
        img.src = bookCover;
        
       document.getElementById('author').innerText = author;

       document.getElementById('category').innerText = `category: ${category}`;

       document.getElementById('description').innerText = `story: ${description}`;

       document.getElementById('isbn').innerText = `isbn: ${isbn}`;
    }
    
    title = document.getElementById('input').value;

    xhr.open('GET', `https://www.googleapis.com/books/v1/volumes?q=title:${title}`);

    // how to display when the title has no match?  
    // if(xhr.responseText!==(title)){
    //     console.log("no match");
    //     const nomatch = document.createElement('p');
    //     nomatch.innerText = "there is no matching title"
    //     document.getElementById('book-container').appendChild('nomatch');
// }

    xhr.send();
}


document.getElementById('btn').addEventListener('click', fetchinfo)