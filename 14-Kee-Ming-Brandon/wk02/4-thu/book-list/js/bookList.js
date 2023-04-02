const books = [
    {title: 'The Design of EveryDay Things',
    author: 'Don Norman',
    alreadyRead: false
    },
    {title: 'The Most Human Human',
    author: 'Brian Christian',
    alreadyRead: true
}];


for (let i = 0; i < books.length; i++ ) {
    const $paragraph = $('<p>');
    $paragraph.html( `${ books[ i ].title } by ${ books[ i ].author }.` );
    $('body').append( $paragraph );
};


// extra note for fun
$('body').append( $('<p>').html( 'Bonus with list:' )
            .css( {'text-decoration': 'underline', 'display': 'inline-block'} ) );
$('body').append( $('<div>').html( 'already read' )
            .css( {'width': '75px', 'height': '16px', 'display': 'inline-block', 'background-color': 'red', 'margin-left': '10px', 'font-size' : '15px', 'color': 'white'} ) );

// Bonus with ul and li
const $list = $('<ul>');

for (let i = 0; i < books.length; i++ ) {
    const $listItem = $('<li>');
    $listItem.html( `${ books[ i ].title } by ${ books[ i ].author }.` );
    
    // color the book that already read in red
    books[ i ].alreadyRead ? $listItem.css( 'color', 'red' ) : console.log();   
    
    $list.append( $listItem );
};

$('body').append( $list)

