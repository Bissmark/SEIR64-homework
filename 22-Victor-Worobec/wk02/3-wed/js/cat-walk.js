// # Exercises: Animation

// ## The Cat Walk

// Who needs Milan when you have JavaScript?

// Start with this webpage, which has a single img tag of an animated GIF of a cat walking.
// ```html
// <!DOCTYPE html>
// <html>
//  <head>
//   <meta charset="utf-8" />
//   <title>Cat Walk</title>
//  </head>
//  <body>
  
//   <img style="position:absolute;" src="http://www.anniemation.com/clip_art/images/cat-walk.gif">
  
//  </body>
// </html>
// ```

// - Create a new Javascript file and link to it with a script tag at the bottom.
// - Create a variable to store a reference to the img.
// - Change the style of the img to have a "left" of "0px", so that it starts at the left hand of the screens.
// - Create a function called catWalk() that moves the cat 10 pixels to the right of where it started, by changing the "left" style property.
// - Call that function every 50 milliseconds. Your cat should now be moving across the screen from left to right. Hurrah! 

// - Bonus #1: When the cat reaches the right-hand of the screen, restart them at the left hand side ("0px"). So they should keep walking from left to right across the screen, forever and ever. 

// - Bonus #2: When the cat reaches the right-hand of the screen, make them move backwards instead. They should keep walking back and forth forever and ever. 

// - Bonus #3: When the cat reaches the middle of the screen, replace the img with an image of a cat dancing, keep it dancing for 10 seconds, and then replace the img with the original image and have it continue the walk.

// - Bonus #4: Pretty much go nuts or whatever.

console.log('test');

const cat = document.getElementById('cat');
let catAction = `RIGHT`;
let animTimer = 0;

cat.style.top = `0px`;
cat.style.left = `0px`;
console.log(cat.clientWidth);

const catWalkRight = function () { //to be split into multiple functions after everything works

    //move left or right depending on cat's status 
    if (catAction === `RIGHT`) {    
        const oldLeft = parseInt(cat.style.left);
        const newLeft = oldLeft + 1;
        cat.style.left = newLeft + `px`;
    }
    else if (catAction === `LEFT`) {
        const oldLeft = parseInt(cat.style.left);
        const newLeft = oldLeft - 1;
        cat.style.left = newLeft + `px`;
    }
    else if (catAction === `DANCE`) {
        cat.src="cat-kitty.gif"; //why doesnt the animation play :( //bothered/worried too much with this that i didn't get to implement timer //tiredd
    }

    if (parseInt(cat.style.left) > (window.innerWidth / 2) - 10 && parseInt(cat.style.left) < (window.innerWidth / 2) + 10) {
        catAction = `DANCE`;
    }

    //if moved beyond edges of window, flip image and move the other direction
    if (parseInt(cat.style.left) < 0 - cat.clientWidth) {
        catAction = `RIGHT`;
        cat.style.transform = `scaleX(1)`;
    }

    if (parseInt(cat.style.left) > window.innerWidth) {
        catAction = `LEFT`;
        cat.style.transform = `scaleX(-1)`;
    }
}

const catWalkRightTimer = window.setInterval(catWalkRight, 5);