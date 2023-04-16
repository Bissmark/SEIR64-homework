// Create a new Javascript file and link to it with a script tag at the bottom.

// Create a variable to store a reference to the img.

// Change the style of the img to have a "left" of "0px", so that it starts at the left hand of the screens.

// Create a function called catWalk() that moves the cat 10 pixels to the right of where it started, by changing the "left" style property.

// Call that function every 50 milliseconds. Your cat should now be moving across the screen from left to right. Hurrah!

// Bonus #2: When the cat reaches the right-hand of the screen, make them move backwards instead. They should keep walking back and forth forever and ever.

// Bonus #3: When the cat reaches the middle of the screen, replace the img with an image of a cat dancing, keep it dancing for 10 seconds, and then replace the img with the original image and have it continue the walk.

const image = document.getElementsByTagName('img')[0];
image.style.left = '0px';


// Bonus #1: When the cat reaches the right-hand of the screen, restart them at the left hand side ("0px"). So they should keep walking from left to right across the screen, forever and ever.

// const catWalk = function () {
//     const startPos = parseInt(image.style.left);
//     const newLeft = startPos + 10

//     if ( newLeft > window.innerWidth) {
//         image.style.left = '-300px'
//     } else {
//         image.style.left = newLeft + 'px';
//     }
// }

// Bonus #2: When the cat reaches the right-hand of the screen, make them move backwards instead. They should keep walking back and forth forever and ever.

const catWalk = function () {
    const startPos = parseInt(image.style.left);
    const moveRight = startPos + 10; // 
    const moveLeft = startPos - 10; 
    let goLeft = false;

    if ( goLeft === false ) {
        if ( moveRight > window.innerWidth ) {
            image.style.transform = 'scaleX(-1)'; // hits right border and turns around
            
        } else {
            image.style.transform = 'scaleX(1)';  // goes right
            image.style.left = moveRight + 'px';
        }
        goLeft = true;
    } else {
        if ( image.style.left !== '-200px') {
            image.style.transform = 'scaleX(1)';
            goLeft = false;

        } else {
            image.style.left = moveLeft + 'px';
        }
    }
}

setInterval(catWalk, 50);
