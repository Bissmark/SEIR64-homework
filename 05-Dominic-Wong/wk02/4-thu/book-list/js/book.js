// Keep track of which books you read and which books you want to read!

// Create a webpage with an h1 of "My Book List".
// Create a new Javascript file and link to it with a script tag at the bottom.
// Copy this array of books:

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

// Iterate through the array of books. For each book, create a p element with the book title and author and append it to the page.


for ( let i = 0; i < books.length; i++ ) {
    const book = books[i];
    $(`<p>${book.title} by ${book.author}</p>`).appendTo('body')
    
}

// Bonus: Use a ul and li to display the books.
// Bonus: Change the style of the book depending on whether you have read it or not.

$('<ul>').appendTo('body');

for (i = 0; i < books.length; i++ ) {
    const book = books[i];
    const $item = $(`<li> ${ book.title } by ${ book.author } </li>`)

    if ( books[i].alreadyRead ) {
        $item.attr('class', 'already-read')
    }

    $item.appendTo('ul')    
}

// what does this mean?
// Bonus: add a property to each book with the URL of the book cover, and add an img element for each book on the page.
// find book cover link and add to books object as key value 
// add img element with src to above link and append to li


