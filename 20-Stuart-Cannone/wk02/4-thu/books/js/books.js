const books = [
    {title: 'The Design of EveryDay Things',
     author: 'Don Norman',
     alreadyRead: false
    },
    {title: 'The Most Human Human',
    author: 'Brian Christian',
    alreadyRead: true
    }];

    // using jquery
    // Iterate through the array of books. For each book, create a p element with the book title and author and append it to the page.
    // Bonus: Use a ul and li to display the books.
    
    const $ul = $('<ul>'); // create a new list
    // Create a new list item element for each book
    $.each(books, function(index, book) {
        
        const $li = $('<li>').text(book.title + ' by ' + book.author);
        if (book.alreadyRead) {
          $li.css('text-decoration', 'line-through'); // Bonus: Change the style of the book depending on whether you have read it or not
        }
        $ul.append($li);
      });
      
      $('body').append($ul);

