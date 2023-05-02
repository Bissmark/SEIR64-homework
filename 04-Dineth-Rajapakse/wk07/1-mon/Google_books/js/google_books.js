

// const fetchBook = document.querySelector('.books');


const fetchBook = function () {


    //1. create an XMLHttp request object
const xhr = new XMLHttpRequest(); 
    
xhr.onreadystatechange = function () {
    if (xhr.readyState !== 4) {
        return;
    }

    const data = JSON.parse(xhr.responseText);

    const p = document.createElement('p');
    p.innerText = data.items[0].volumeInfo
    document.body.appendChild(p);
};
//2. create the request
    xhr.open('GET', 'https://www.googleapis.com/books/v1/volumes?q=title:Jaws'); 
    //3. Send the request
    xhr.send();
};

document.getElementById('fetch').addEventListener('click', fetchBook);
fetchBook();
// xhr.onreadystatechange = function () {
//     console.log("Ready State: " + xhr.readyState );

// }

// xhr.addEventListener('load', function(){
//     // convert JSON string to JS object
//     const data = JSON.parse(xhr.responseText);
//     // console.log(data);

// const p = document.createElement('p');
// p.innerText = data.items[0].volumeInfo
// document.body.appendChild(p);
    
// })

// xhr.open('GET', 'https://www.googleapis.com/books/v1/volumes?q=title:Jaws'); 
// //3. Send the request
// xhr.send();
