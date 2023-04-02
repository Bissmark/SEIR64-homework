// console.log("walking cat")
//original code to get the cat to walk across the page
// const img = document.getElementsByTagName('img')[0];
// img.style.position = 'absolute';
// img.style.left = '0px';
// const catWalk = function() {
//   const oldLeft = parseInt(img.style.left);
//   const newLeft = oldLeft + 5;
//   img.style.left = newLeft + 'px';
// };
// window.setInterval(catWalk, 100);

//new code to add directional functionality 
const img = document.getElementsByTagName('img')[0];
img.style.position = 'absolute';
img.style.left = '0px';
let direction = 1; // direction 1 means the image is moving to the right
const catWalk = function() {
  const oldLeft = parseInt(img.style.left);
  const newLeft = oldLeft + (5 * direction);
  img.style.left = newLeft + 'px';
  // check if the image reaches the right edge of the page
  if (newLeft + img.width >= window.innerWidth) {
    direction = -1; // reverse direction
    img.style.transform = 'scaleX(-1)'; // flip the image horizontally to make it look like it is walking the other way
  } else if (newLeft <= 0) {
    direction = 1; // reverse direction
    img.style.transform = ''; // flip the image back to its original orientation when it reaches its original left position 
  }
};
const intervalId = window.setInterval(catWalk, 100);
