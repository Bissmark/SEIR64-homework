const cat = document.getElementById('cat');
cat.style.left = '0px';
let direction = 1;

function catWalk() {
    const currentLeft = parseInt(cat.style.left);
    const newLeft = currentLeft + (10 * direction);
    cat.style.left = newLeft + 'px';

    // Check if the cat has reached the right edge of the screen
    if (currentLeft + cat.width >= window.innerWidth && direction === 1) {
        direction = -1;
        cat.style.transform = 'scaleX(-1)'; // Flip the image horizontally
    }

    // Check if the cat has reached the left edge of the screen
    if (currentLeft <= 0 && direction === -1) {
        direction = 1;
        cat.style.transform = 'scaleX(1)'; // Flip the image back
    }
}

setInterval(catWalk, 50);