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

console.log(books[0].title);

$.each(books, function() {
    const $sentence = `${bookstitle} by ${author}`;
    console.log($sentence);
    $sentence.appendTo('body');
})

const $ul = $('<ul></ul>');


const $li = $(`<li>${book.title} by ${book.author}.</li>`);


if (book.alreadyRead) {
    $li.addClass('already-read');
}

$li.appendTo($ul)
$ul.appendTo('body')