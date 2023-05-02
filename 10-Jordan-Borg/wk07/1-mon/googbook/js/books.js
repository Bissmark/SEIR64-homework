// const searchForm = function () {
//     const xhr = new XMLHttpRequest();

//     xhr.onreadystatechange = function () {
//         if (xhr.readyState !== 4) {
//             return;
//         }

//         const data = JSON.parse( xhr.responseText );

//         const p = document.createElement('p');
//         p.innerText = data.image;
//         document.body.appendChild(p);
//     };
    
//     xhr.open('GET', 'https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&fields=items(volumeInfo/imageLinks/thumbnail)');
//     xhr.send(); 
// };

// document.getElementById("book-cover-container").addEventListener('search-input', searchForm);
// searchForm();

// ^^ THIS WAS NOT ABLE TO GET WORKING using XHR and JSON








// Tried it and I think got most working but not using XHR or JSON ***BELOW

const searchForm = document.getElementById('search-form');
const bookCoverContainer = document.getElementById('book-cover-container');

searchForm.addEventListener('submit', async e => {
	e.preventDefault();
	const searchInput = document.getElementById('search-input').value;
	const searchTerm = encodeURI(searchInput);
	const url = `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&fields=items(volumeInfo/imageLinks/thumbnail)`;
	
	try {
		const response = await fetch(url);
		const data = await response.json();
		const bookCover = data.items[0].volumeInfo.imageLinks.thumbnail;
		bookCoverContainer.innerHTML = `<img src="${bookCover}">`;
	} catch (error) {
		console.error(error);
	}
});