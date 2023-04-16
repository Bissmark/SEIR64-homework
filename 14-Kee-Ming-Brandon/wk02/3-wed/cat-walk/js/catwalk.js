// The Cat Walk
// Create a new Javascript file and link to it with a script tag at the bottom.
// Create a variable to store a reference to the img.
const cat = document.getElementById("cat");
cat.style.left = '0px';
cat.style.width = '100px'
cat.style.top = '0px';


// Change the style of the img to have a "left" of "0px", so that it starts at the left hand of the screens.
// done

// Create a function called catWalk() that moves the cat 10 pixels to the right of where it started, by changing the "left" style property.
// Call that function every 50 milliseconds. Your cat should now be moving across the screen from left to right. Hurrah!
let flipped = false;

const catWalk = () => {
    const currentPixel = Number( cat.style.left.slice( 0, -2 ) );
    const currentSize = Number( cat.style.width.slice( 0, -2 ) );
    if ( currentPixel < window.innerWidth && !flipped ) {
        if ( currentSize < 150 ) {
            cat.style.left = currentPixel + 0.4 + "px";
            cat.style.width = currentSize + 0.1 + "px";
        } else if ( currentSize < 180 ) {
            cat.style.left = currentPixel + 0.5 + "px";
            cat.style.width = currentSize + 0.1 + "px";
        } else if ( currentSize < 220 ) {
            cat.style.left = currentPixel + 0.6 + "px";
            cat.style.width = currentSize + 0.1 + "px";
        }  else if ( currentSize < 250 ) {
            cat.style.left = currentPixel + 0.7 + "px";
            cat.style.width = currentSize + 0.2 + "px";
        }  else if ( currentSize < 270 ) {
            cat.style.left = currentPixel + 0.8 + "px";
            cat.style.width = currentSize + 0.3 + "px";
        }   else if ( currentSize < 296 ) {
            cat.style.left = currentPixel + 0.9 + "px";
            cat.style.width = currentSize + 0.4 + "px";
        } else {
            cat.style.left = currentPixel + 1 + "px";
        }

    } else if ( currentPixel >= window.innerWidth && !flipped ) {
        cat.style.transform = 'rotateY(180deg), sw';
        flipped = true;

    } else if ( flipped && currentPixel > -296 ) {
        if ( currentSize < 150 ) {
            cat.style.left = currentPixel - 0.4 + "px";
            cat.style.width = currentSize + 0.1 + "px";
        } else if ( currentSize < 180 ) {
            cat.style.left = currentPixel - 0.5 + "px";
            cat.style.width = currentSize + 0.1 + "px";
        } else if ( currentSize < 220 ) {
            cat.style.left = currentPixel - 0.6 + "px";
            cat.style.width = currentSize + 0.1 + "px";
        }  else if ( currentSize < 250 ) {
            cat.style.left = currentPixel - 0.7 + "px";
            cat.style.width = currentSize + 0.2 + "px";
        }  else if ( currentSize < 270 ) {
            cat.style.left = currentPixel - 0.8 + "px";
            cat.style.width = currentSize + 0.3 + "px";
        }   else if ( currentSize < 296 ) {
            cat.style.left = currentPixel - 0.9 + "px";
            cat.style.width = currentSize + 0.4 + "px";
        } else {
            cat.style.left = currentPixel - 1 + "px";
        }
    }  else if ( currentPixel <= -296 && flipped ) {
        cat.style.transform = 'rotateY(0deg)';
        flipped = false;
    }



};

const walkTime = setInterval(catWalk, 15);




// Bonus #1: When the cat reaches the right-hand of the screen, restart them at the left hand side ("0px"). So they should keep walking from left to right across the screen, forever and ever.

// Bonus #2: When the cat reaches the right-hand of the screen, make them move backwards instead. They should keep walking back and forth forever and ever.

// Bonus #3: When the cat reaches the middle of the screen, replace the img with an image of a cat dancing, keep it dancing for 10 seconds, and then replace the img with the original image and have it continue the walk.

// Bonus #4: Pretty much go nuts or whatever. //
