/*
const books = [
    {
        title: 'The Design of EveryDay Things',
        author: 'Don Norman',
        alreadyRead: false
    },
    {
        title: 'The Most Human Human',
        author: 'Brian Christian',
        alreadyRead: true
    }
];

console.table(books)
// Iterate through the array of books. For each book, create a p element with the book title and author and append it to the page.

for (let i =0; i < books.length; i++) {
    const book = books[i];
    console.log(book)
    const p = document.createElement("p"); //detached dom node, hasnt been attached
    p.innerText = `${book.title} by ${book.author}`
    // console.log(p)
    document.body.appendChild( p );
}

// Bonus: Use a ul and li to display the books.
// Bonus: add a property to each book with the URL of the book cover, and add an img element for each book on the page.
const ul = document.createElement('ul');

for (let i =0; i < books.length; i++) {
    const book = books[i];
    console.log(book)
    const li = document.createElement("li"); //detached dom node, hasnt been attached
    li.innerText = `${book.title} by ${book.author}`
    
    if (book.alreadyRead) {
        li.className = 'already-read'
    }

    ul.appendChild( li);
}
document.body.appendChild(ul)

// Bonus: Change the style of the book depending on whether you have read it or not.

*/


/////////////////////////////               Using jQuery                ///////////////////////////

const books = [
    {
        title: 'The Design of EveryDay Things',
        author: 'Don Norman',
        alreadyRead: false,
        url: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/416Hql52NCL.jpg"
    },
    {
        title: 'The Most Human Human',
        author: 'Brian Christian',
        alreadyRead: true,
        url: "https://books.google.com.au/books/content?id=5EuLwk6hWuQC&pg=PP1&img=1&zoom=3&hl=en&bul=1&sig=ACfU3U0WIiCRArqWxsrL7xdxn8i22Sg_1g&w=1280"
    },
    {
        title: 'MAD ABOUT THE TRUMP ERA',
        author: 'Frank Jacobs',
        alreadyRead: false,
        url: "https://books.google.com.au/books/publisher/content?id=7wuWDwAAQBAJ&pg=PP1&img=1&zoom=3&hl=en&sig=ACfU3U0A5ISvtKe1W2-LBQ6jbdY9wR5BHw&w=1280"
    }
];

// Iterate through the array of books. For each book, create a p element with the book title and author and append it to the page.

/*
$.each(books, function (index, value) {
    // const $h1 = $('h1')              
    const $para = $('<p>');
    $para.html(`${value.title} by ${value.author}`);
    $para.appendTo($('body'))       
})
*/

// Bonus: Use a ul and li to display the books.
const $ul = $('<ul>');
$('body').append($ul)

//took me an hr to do this one. Turned out i didn't write ' . ' before 'each', everything else was fine.
$.each(books, function (index, value) { 
    console.log(value)
    const $li = $("<li>");
    $li.text(`${value.title} by ${value.author}`).appendTo($ul);

    // Bonus: add a property to each book with the URL of the book cover, and add an img element for each book on the page.
    const $img = $('<img>');
    $img.attr("src", value.url).appendTo($li);
    $img.attr("width", "200px").css("padding", "30px").css("margin-left", "50px")
    
    // Bonus: Change the style of the book depending on whether you have read it or not.
    if (value.alreadyRead) {
        $li.css('color', 'blue')
    }
 

});











