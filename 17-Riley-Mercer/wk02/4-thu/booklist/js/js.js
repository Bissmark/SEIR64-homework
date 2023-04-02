const books = [
    {title: 'The Design of EveryDay Things',
     author: 'Don Norman',
     alreadyRead: false
    },
    {title: 'The Most Human Human',
    author: 'Brian Christian',
    alreadyRead: true
    }];


const list = $('<ul id="ullist">Books</ul>');
$('#heading1').append(list)

// I could not get this part to work using jQuery. I feel like I am not quite sure how to mesh jQuery and natty javascript

const li = $('<li>')
$("#ullist").append(li)

$.each(books , function(index, item) {
    const listItem = ("Book name:" + item.title + " by " + item.author)
    $(".li").append(listItem)
})

 
// const ul = document.createElement('ul')
//  for (let i = 0; i < books.length; i++) {
//     const book = books[i]
//     const li = document.createElement('li')
//    li.innerText = `${book.title} by ${book.author}`
//     ul.appendChild(li)

//     if (book.alreadyRead) {
//         li.classList.add('already-read')
//     }
//  }

// document.body.appendChild(ul)
