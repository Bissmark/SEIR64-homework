/*
const fetchThumbnail = function(){
   const xhr =  new XMLHttpRequest();


    xhr.onreadystatechange = function(){
        if (xhr.readyState !== 4){
        return;
        }

        const data = JSON.parse(xhr.responseText)
        const p  = document.createElement('img')
        p.src = data.items[0].volumeInfo.imageLinks.thumbnail
        document.body.appendChild(p)
    }
    let title = document.getElementById('title').value
    console.log(title)
    xhr.open('GET', `https://www.googleapis.com/books/v1/volumes?q=title:${title}`);
    xhr.send();
}

document.getElementById('fetch').addEventListener('click',fetchThumbnail)
*/

$('#search').on('submit', function(event){
    event.preventDefault();
    const playerId = $('#id').val()
    $.ajax('https://www.balldontlie.io/api/v1/players/' + playerId).done(function(info){
        $('#name1').text('First Name: ' + info.first_name)
     
        $('#name2').text('Last Name: ' + info.last_name)

        $('#height').text('Height: ' + info.height_feet + ' feet')
        
        $('#weight').text('Weight: ' + info.weight_pounds + ' pounds')

        $('#team').text('Team: ' + info.team.name)
    })
})