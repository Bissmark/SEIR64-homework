


const xhr = new XMLHttpRequest(); // ready state 0

xhr.open('GET', 'https://www.googleapis.com/books/v1/volumes?q=title:Jaws'); 

xhr.onreadystatechange = function () {
    console.log("Ready State: " + xhr.readyState );

}
xhr.send();




