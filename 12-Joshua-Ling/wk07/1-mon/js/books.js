//https://www.googleapis.com/books/v1/volumes?q=title:Jaws

fetchBook = function () {
  const xhr = new XMLHttpRequest();

  const book = document.getElementById('name').value;

  xhr.onreadystatechange = function () {
    if (xhr.readyState != 4) return;
    const data = JSON.parse(xhr.responseText);
        
    image = data.items[0].volumeInfo.imageLinks.thumbnail;
    document.getElementById('bookimage').src = image;

    const title = data.items[0].volumeInfo.title;
    document.getElementById('title').innerHTML = title;

    const description = data.items[0].volumeInfo.description;
    document.getElementById('description').innerHTML = description;

    const authors = data.items[0].volumeInfo.authors;
    document.getElementById('authors').innerHTML = authors;
    
    
  }

  xhr.open('GET', `https://www.googleapis.com/books/v1/volumes?q=title:${book}`)
  xhr.send();
}

document.getElementById('search').addEventListener('click', fetchBook);
document.getElementById('name').value = "The hungry Caterpillar"
fetchBook();