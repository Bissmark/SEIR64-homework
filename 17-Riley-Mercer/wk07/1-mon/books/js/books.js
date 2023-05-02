let query_string = ""
let books_url = "https://www.googleapis.com/books/v1/volumes?q="

$("button").click(function() {
    book_string = $("#book_search").val()
    books_url_combined = books_url + book_string

    $.ajax({
        url: books_url_combined.toString(),
        dataType: 'json',
        success: function(book_info){
            console.log(book_info)
            $('#returned_thumbnail').attr("src", book_info.items[0].volumeInfo.imageLinks.thumbnail)
            $('#returned_title').html(book_info.items[0].volumeInfo.title)          
            $('#returned_author').html(book_info.items[0].volumeInfo.authors[0])
            $('#returned_publisher').html(book_info.items[0].volumeInfo.publisher)    
    }})
});
