console.log('yay')

var books = [
  {title: 'The Design of EveryDay Things',
   author: 'Don Norman',
   alreadyRead: false
  },
  {title: 'The Most Human Human',
  author: 'Brian Christian',
  alreadyRead: true
  }];

  
  const ul = $('<ul>');
  
  for (let i = 0; i < books.length; i++) {
      let book = books[i];
      const li = $('<li>').html(`${book.title} by ${book.author}`).appendTo(ul);
    
      if (book.alreadyRead) {
          li.addClass('already-read');
      }
  }
    
  $('body').append(ul);


