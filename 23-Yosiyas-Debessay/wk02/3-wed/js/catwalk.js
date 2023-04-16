const cat = document.getElementById('cat');
let catLeft = 0;
let movingRight = true;

function catWalk() {
  if (movingRight) {
    catLeft += 10;

    // Set the cat's transform to scale it normally (i.e., not flipped horizontally)
    cat.style.transform = 'scaleX(1)';
  } else {
    catLeft -= 10;
    cat.style.transform = 'scaleX(-1)';
  }
    // If the cat has reached the right edge of the screen
  if (catLeft >= window.innerWidth - cat.width) {

  // Change the direction of the cat to move left instead
    movingRight = false;
  } else if (catLeft <= 0) {
    movingRight = true;
  }
  // Set the cat's left position on the screen to its updated value
  cat.style.left = catLeft + 'px';
}

setInterval(catWalk, 50);
