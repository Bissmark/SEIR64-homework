// ## The Book List

// Keep track of which books you read and which books you want to read!

// - Create a webpage with an h1 of "My Book List".
// - Create a new Javascript file and link to it with a script tag at the bottom.
// - Copy this array of books:
// ```javascript
// var books = [
//   {title: 'The Design of EveryDay Things',
//    author: 'Don Norman',
//    alreadyRead: false
//   },
//   {title: 'The Most Human Human',
//   author: 'Brian Christian',
//   alreadyRead: true
//   }];
// ```
// - Iterate through the array of books. For each book, create a p element with the book title and author and append it to the page.
// - Bonus: Use a ul and li to display the books.
// - Bonus: add a property to each book with the URL of the book cover, and add an img element for each book on the page.
// - Bonus: Change the style of the book depending on whether you have read it or not.

var books = [
    {
        title: 'The Design of EveryDay Things',
        author: 'Don Norman',
        alreadyRead: false,
        img: 'https://placekitten.com/200/300'
    },
    {
        title: 'The Most Human Human',
        author: 'Brian Christian',
        alreadyRead: true,
        img: 'https://placekitten.com/200/301'
    }
];

$(`body`).append(`<ul class="book-list">`); //make a list

//for in loop
// for (let i = 0; i < books.length; i++) {
//     for (const property in books[i]) {
//         const string = `${ property }: ${ books[i][property] }`;
//         $(`.book-list`).append($(`<li>${ string }</li>`)); //append to list
//     }
// }

for (let i = 0; i < books.length; i++) {
    const string = `Title: ${ books[i].title }, Author: ${ books[i].author }`;
    const $listItem = $(`<li>${ string }</li>`); //turn string into a jquery list item

    if (books[i].alreadyRead) {
        $listItem.css(`color`, `red`); //style the css of the jquery
    }

    $(`.book-list`).append($listItem); //append to list
    $(`.book-list`).append($(`<img src="${ books[i].img }">`)); //append img to list too 
}