const $books = [
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

        const ul = $('<ul>');

        $.each(books, function () {
            let $this = $(this);
            const $li = $('<li>');
            $('li').text(`${books.title} by ${books.author}`);
        

            if (books.alreadyRead) {
                $li.addClass('already-read');
            }
            $('ul').append($li);
        })
        $('body').append($ul);
        
