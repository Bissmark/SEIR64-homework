// # Exercises: Events

// ## Mad Libs

// Start with this webpage, which has several input elements and a button:
// ```html
// <!DOCTYPE html>
// <html>
//  <head>
//   <meta charset="utf-8" />
//   <title></title>
//  </head>
//  <body>
 
//  <h1>Mad Libs</h1>
 
//  <ul>
//   <li>Noun: <input type="text" id="noun">
//   <li>Adjective: <input type="text" id="adjective">
//   <li>Someone's Name: <input type="text" id="person">
//  </ul>
 
//  <button id="lib-button">Lib it!</button>
  
//  <div id="story"></div>
  
//  </body>
// </html>
// ```

// - Create a new Javascript file and link to it with a script tag at the bottom.
// - Add an event listener to the button so that it calls a makeMadLib function when clicked.
// - In the makeMadLib function, retrieve the current values of the form input elements, make a story from them, and output that in the story div (like "Pamela really likes pink cucumbers.")

console.log("test");

const makeMadLib = function () {
    const $noun = $(`#noun`).val();
    const $adjective = $(`#adjective`).val();
    const $person = $(`#person`).val();

    const string = $noun + $adjective + $person;

    $(`#story`).html(string);
};

$(`#lib-button`).on("click", makeMadLib);