// Create a new Javascript file and link to it with a script tag at the bottom.

// Create a variable to store a reference to the img.

// Change the style of the img to have a "left" of "0px", so that it starts at the left hand of the screens.

// Create a function called catWalk() that moves the cat 10 pixels to the right of where it started, by changing the "left" style property.

// Call that function every 50 milliseconds. Your cat should now be moving across the screen from left to right. Hurrah!

const catImg = document.getElementsByTagName('img')[0];

catImg.style.left = '0px';
//catImg.style.right = '0px'; //doesn't work for if statement
let catWalkRight = true;
function catWalk() {
    let catPosition = parseInt(catImg.style.left); //converts argument to string, parses it, then returns an integer 
    //const catRight = parseInt(catImg.style.right); //trying for bonus qn
    //const catMove = catPosition + 10;
    // catImg.style.left = catMove + 'px';
    if ((catPosition > (screen.width - catImg.width)) && (catWalkRight == true)) {   //googled screen width
        catWalkRight = false; 
    } else if ((catPosition < 0 ) && (catWalkRight == false)) {
        catWalkRight = true;
        }
    
    if (catWalkRight == true) {
        catImg.style.left = (catPosition + 10) + 'px';
    } else {
        catImg.style.left = (catPosition - 10) + 'px'; 
    } 
}



// function catWalk() {
//     const catPosition = parseInt(catImg.style.left); //converts argument to string, parses it, then returns an integer 
//     //const catRight = parseInt(catImg.style.right); //trying for bonus qn
//     //const catMove = catPosition + 10;
//     // catImg.style.left = catMove + 'px';
//     if (catMove > (screen.width - catImg.width)) {   //googled screen width
//         //catImg.style.left = '0px';  //works, bonus Question 1
//         //window.clearInterval(fadeTimer);
//     }
//     if (catWalkRight = true) {
//         catImg.style.left = catPosition + 10 + 'px';
//     } else {
//         catImg.style.left = catPosition - 10 + 'px'; 
//     } 
// }
    


window.setInterval(catWalk, 50) //code works, walks right to infinity
//let fadeTimer = window.setInterval(catWalk, 50)

