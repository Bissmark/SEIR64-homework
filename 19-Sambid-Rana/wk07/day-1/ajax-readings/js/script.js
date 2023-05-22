
const formEl = document.querySelector('.form')

const movieData = function (event) {
    event.preventDefault(); // Prevent default behaviour
    
    const title = document.querySelector('#title').value; //get the value from input field
    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
        if (xhr.readyState !== 4) {
            return;
        }

        const data = JSON.parse(xhr.responseText)
        console.log(data)

        const img = document.createElement('img')
        img.src = data.items[0].volumeInfo.imageLinks.thumbnail;
        document.body.appendChild(img)

        const h2 = document.createElement('h2');
        h2.textContent = data.items[0].volumeInfo.title;
        document.body.appendChild(h2);

      
        const h3 = document.createElement('h3')
        h3.innerHTML = data.items[0].volumeInfo.authors;
        document.body.appendChild(h3)
        
        const p2 = document.createElement('p')
        p2.innerText = data.items[1].searchInfo.textSnippet;
        document.body.appendChild(p2)

    }

    xhr.open("GET", `https://www.googleapis.com/books/v1/volumes?q=title:${title}`);
    // const url = `https://example.com/api/search?title=${encodeURIComponent(title)}`; //didnt work this way
    // xhr.open('GET', url)

    xhr.send();
}

formEl.addEventListener('submit', movieData)

// https://www.googleapis.com/books/v1/volumes?q=title:Jaws
// "https://www.googleapis.com/books/v1/volumes?q=title:#{ title }"


//Joels solution - for reference

// document.getElementById('search').addEventListener('click', function () {
//     //get the title of the book
//     document.getElementById('title').value
//     // console.log(title)

//     // ask google books API for onfo about the book
//     //get an XHR object
//     const xhr = new XMLHttpRequest();
    
//     // set up the request (.open())
//     xhr.open('GET', 'https://www.googleapis.com/books/v1/volumes?q=title:' + title);
//     // .send()
//     xhr.send()
//     // attach an onreadystatechangelistner // just gives back readystate 3 & 4
//     xhr.onreadystatechange = function () {
//         if (xhr.readyState !== 4) return; //not ready yet
//         // console.log(xhr.responseText);
//         // convert string to js object
//         const data = JSON.parse(xhr.responseText) 

//         //display the cover
//         const cover = data.items[0].volumeInfo.imageLinks.thumbnail;
//         document.getElementById('cover').setAttribute('srt', cover)


//     };
// });

