

// Keep track of which books you read and which books you want to read!

// Create a webpage with an h1 of "My Book List".
// Create a new Javascript file and link to it with a script tag at the bottom.
// Copy this array of books:
// var books = [
//   {title: 'The Design of EveryDay Things',
//    author: 'Don Norman',
//    alreadyRead: false
//   },
//   {title: 'The Most Human Human',
//   author: 'Brian Christian',
//   alreadyRead: true
//   }];
// Iterate through the array of books. For each book, create a p element with the book title and author and append it to the page.
// Bonus: Use a ul and li to display the books.
// Bonus: add a property to each book with the URL of the book cover, and add an img element for each book on the page.
// Bonus: Change the style of the book depending on whether you have read it or not.


var books = [
    {title: 'The Malazan Book of the Fallen',
     author: 'Steven Erikson',
     alreadyRead: true
    },
    {title: 'Ayoade On Top',
    author: 'Richard Ayoade',
    alreadyRead: false
    },
    {title: 'Foundation',
    author: 'Isaac Asimov',
    alreadyRead: true
}];

let $ul = $('<ul></ul>');
$ul.appendTo('body'); 

$.each(books, function(index) {
    const $sentence = $(`<li>${books[index].title} by ${books[index].author}.</li>`);
    $ul.append($sentence);
})

if (books.alreadyRead) {
    $li.addClass('already-read');
}
