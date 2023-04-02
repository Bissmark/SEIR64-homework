const img = document.getElementsByTagName('img')[0];
img.style.position = 'absolute';
img.style.left = '0px';

const moveImgRight = function() {
    const old = parseInt(img.style.left);
    const newSide = old + 2;
    img.style.left = newSide + 'px';
    if (old > 1920) {
        // window.clearInterval(moveTimer);
        img.style.left = '-200px';
    }
};

const moveTimer = window.setInterval(moveImgRight, 1);
