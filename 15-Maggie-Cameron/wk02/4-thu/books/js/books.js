// // const books = [
// //     {
// //         title: 'The Design of EveryDay Things',
// //         author: 'Don Norman',
// //         alreadyRead: false
// //     },
// //     {
// //         title: 'The Most Human Human',
// //         author: 'Brian Christian',
// //         alreadyRead: true
// //     }
// // ];

// // const ul = document.createElement('ul'); // detached DOM node

// // for (let i = 0; i < books.length; i++) {
// //     const book = books[i];
// //     const li = document.createElement('li'); // detached DOM node
// //     li.innerHTML = `${ book.title } by ${ book.author }`;

// //     if (book.alreadyRead) {
// //         li.className = 'already-read';
// //     }

// //     ul.appendChild( li );
// // }

// // document.body.appendChild(ul);



//     Iterate through the array of books. For each book, create a p element with the book title and author and append it to the page.
//     Bonus: Use a ul and li to display the books.
//     Bonus: add a property to each book with the URL of the book cover, and add an img element for each book on the page.
//     Bonus: Change the style of the book depending on whether you have read it or not.


const books = [
  {title: 'The Design of EveryDay Things',
   author: 'Don Norman',
   alreadyRead: false
  },
  {title: 'The Most Human Human',
  author: 'Brian Christian',
  alreadyRead: true
  }
];

const $ul = $('<ul></ul>');

for (let i = 0; i <books.length; i++) {
  const book = books[i];
  const $li = $(`<li>${ book.title } by ${ book.author }</li>`);

  if (book.alreadyRead) {
    $li.addClass('already-read')
  }
$li.appendTo($ul);
}
$ul.appendTo('body');


//     const $image = $('<img>'); // create this thing
//     $image.attr('src', thumbnailURL); // setter
//     $link.prepend($image);
// }
 


// Keep track of which books you read and which books you want to read!

//     Create a webpage with an h1 of "My Book List".
//     Create a new Javascript file and link to it with a script tag at the bottom.
//     Copy this array of books:


