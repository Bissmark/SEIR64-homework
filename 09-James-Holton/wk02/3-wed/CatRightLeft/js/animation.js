const img = document.getElementsByTagName('img')[0];
img.style.position = 'absolute';
img.style.left = '0px';

let n = 2

const moveImgRightLeft = function() {
    const old = parseInt(img.style.left);
    const newSide = old + n;
    img.style.left = newSide + 'px';
    if (old > 1670) {
        n = -2;
    }
    if (old < 0) {
        n = 2;
    }
};

const moveTimer = window.setInterval(moveImgRightLeft, 1);
