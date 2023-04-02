// // Create a variable to store a reference to the img.
// Change the style of the img to have a "left" of "0px", so that it starts at the left hand of the screens.
// Create a function called catWalk() that moves the cat 10 pixels to the right of where it started, by changing the "left" style property.
// Call that function every 50 milliseconds. Your cat should now be moving across the screen from left to right. Hurrah!

//cat moves but wont stop
const img = document.querySelector('img');
 img.style.position = "absolute";
let position = 0;
const catWalk = function (){

    position += 10;
    img.style.left = position + "px";
    // clearInterval(walkingCat);

}
window.setInterval(catWalk, 300);

const aCat = document.getElementsByTagName("img")[1];
let secondPosition = 222;
const anotherWalk = function(){
    secondPosition += 10;
    img.style.right = secondPosition +"px";
    // clearInterval(runningCat);
}
window.setInterval(anotherWalk, 3000);

// const img = document.querySelector('img');
// currentPos =0;
// const catWalk= function(){
//         currentPos += 10;
//         img.style.left = currentPos + "px";

//     // const width= window.innerWidth;
//     window.requestAnimationFrame(catWalk);
// }
// window.setInterval(catWalk, 1000);


// const img = document.querySelector('img');
// img.style.position = 'absolute';
// img.style.left = '0px';
// const catWalk = function() {
//     const startFrom = parseInt(img.style.left);
//     console.log(startFrom);
//     const movesTo = startFrom + 10;
//     img.style.top = movesTo + "px";
// };
// setInterval(catWalk, 0.05);

// const img = document.getElementsByTagName('img')[0];
// img.style.position = 'absolute';
// img.style.top = '0px';
// const watchKittyFall = function() {
//   const oldTop = parseInt(img.style.top);
// //   console.log(oldTop);
//   const newTop = oldTop + 1;
//   img.style.top = newTop + 'px';
//   clearInterval(watchKittyFall);
// };
// setInterval(watchKittyFall, 1);
// Bonus #1: When the cat reaches the right-hand of the screen, restart them at the left hand side ("0px"). So they should keep walking from left to right across the screen, forever and ever.
// Bonus #2: When the cat reaches the right-hand of the screen, make them move backwards instead. They should keep walking back and forth forever and ever.
// Bonus #3: When the cat reaches the middle of the screen, replace the img with an image of a cat dancing, keep it dancing for 10 seconds, and then replace the img with the original image and have it continue the walk