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

$('body').append($('<ul>'));

// Iterate through the array of books. For each book, create a p element with the book title and author and append it to the page.
const bookInfo1 = books[0].title + ' by ' + books[0].author;
const bookInfo2 = books[1].title + ' by ' + books[1].author;

// Bonus: Use a ul and li to display the books.
$('ul').append($('<li class="book1">'));
$('.book1').append(bookInfo1);
$('ul').append($('<li class="book2">'));
$('.book2').append(bookInfo2);

// Bonus: add a property to each book with the URL of the book cover, and add an img element for each book on the page.
$('.book1').wrapInner('<a href=https://en.wikipedia.org/wiki/The_Design_of_Everyday_Things' + bookInfo1 + '" />');
$('<img>').attr('src','https://images-na.ssl-images-amazon.com/images/I/81zpLhP1gWL.jpg').prependTo($('.book1'));

$('.book2').wrapInner('<a href=https://www.dymocks.com.au/book/the-most-human-human-by-brian-christian-9780307476708?gclid=CjwKCAjw5pShBhB_EiwAvmnNV3lQlM6xOwgQWvOxf9ivGTT0Ee9MYONSvjnrmErWa3VyRlZW7Mm_bhoCBt4QAvD_BwE' + bookInfo2 + '" />');
$('<img>').attr('src','https://www.dymocks.com.au/Pages/ImageHandler.ashx?q=9780307476708&w=&h=570').prependTo($('.book2'));

// Bonus: Change the style of the book depending on whether you have read it or not.
$('.book2').css({'opacity': 0.5});