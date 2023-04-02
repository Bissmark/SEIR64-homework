// # Exercises: More DOM Manipulation

// ## About Me

// Start with this HTML and save it as "aboutme.html":
// ```html
// <!DOCTYPE html>
// <html>
//  <head>
//   <meta charset="utf-8"/>
//   <title>About Me</title>
// </head>
// <body>
//   <h1>About Me</h1>
  
//   <ul>
//     <li>Nickname: <span id="nickname"></span>
//     <li>Favorites:  <span id="favorites"></span>
//     <li>Hometown: <span id="hometown"></span>
//    </ul>
  
//  </body>
// </html>
// ```

// - Create a new Javascript file and link to it with a script tag at the bottom.
// - (In JS) Change the body tag's style so it has a font-family of "Arial, sans-serif".
// - (In JS) Replace each of the spans (nickname, favorites, hometown) with your own information.
// - Iterate through each li and change the class to "listitem". Add a style tag that sets a rule for "listitem" to make the color red.
// - Create a new img element and set its src attribute to a picture of you. Append that element to the page.

$(`body`).css(`font-family`, `Arial, sans-serif`);
$(`#nickname`).html(`Wrecked`);
$(`#favorites`).html(`Beers and games`);
$(`#hometown`).html(`Double too double ohh bruvvvaaa`)

//for each loop, for `li` elements
$(`li`).each(function() {
    $(this).addClass(`listitem`);
});

$(`.listitem`).each(function() {
    $(this).css(`color`, `red`);
});

//add image
$(`body`).append($('<img src="http://placekitten.com/400/300">'));