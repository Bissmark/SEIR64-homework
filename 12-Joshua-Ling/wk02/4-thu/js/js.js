//MadLib
$("#lib-button").click(function() {
    const noun = $("#noun").val();
    const adj = $("#adjective").val();
    const person = $("#person").val();

    $("#story").html(`${person} really likes ${adj} ${noun}`);

});

//Calculator
$("#square-button").click(function() {
    const number = $("#square-input").val();
    $("#solution").html(`${number * number}`);
});

$("#half-button").click(function() {
    const number = $("#half-input").val();
    $("#solution").html(`${number / 2}`);
});

$("#percent-button").click(function() {
    const numerator = $("#percent1-input").val();
    const denominator = $("#percent2-input").val();
    $("#solution").html(`${numerator/denominator}`);
});

$("#area-button").click(function() {
    const radius = $("#area-input").val();
    $("#solution").html(`${Math.PI * radius * radius}`);
});

//Dom Manipulation
$("body").css("font-family", "arial, sans-serif");
$("#nickname").html("Josh");
$("#favorites").html("Ice Cream");
$("#hometown").html("Melbourne");

$("li").addClass('listitem');
$('body').append($("<img src='http://placekitten.com/200/300'>"));

$("body").append($("<hr><hr>"));

//BOOKS
let books = [
    {title: 'The Design of EveryDay Things',
     author: 'Don Norman',
     alreadyRead: false
    },
    {title: 'The Most Human Human',
    author: 'Brian Christian',
    alreadyRead: true
    }
]

$.each(books, function(key, value) {
    $("body").append($(`<p> ${value.title} written by ${value.author} </p>`));
});




