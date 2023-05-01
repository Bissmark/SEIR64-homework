

const fetchBook = document.querySelector('.books');


//create getBook function


    //1. create an XMLHttp request object
const xhr = new XMLHttpRequest(); 
    //2. create the request
    xhr.open('GET', 'https://www.googleapis.com/books/v1/volumes?q=title:Jaws'); 
    //3. Send the request
    xhr.send();
// xhr.onreadystatechange = function () {
//     console.log("Ready State: " + xhr.readyState );

// }

xhr.addEventListener('load', function(){
    // convert JSON string to JS object
    const data = JSON.parse(xhr.responseText);
    console.log(data);

    
})



