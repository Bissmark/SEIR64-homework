//Exercise link: https://gist.github.com/wofockham/b4a62f016bfd241627dd

const img = document.getElementsByTagName('img')[0];
img.style.position = 'absolute';
img.style.left = '0px';

const catWalk = function() {
    const leftCat = parseInt(img.style.left);
    const rightCat = leftCat + 1;
    img.style.left = rightCat + 'px';
    if (img.style.left === '10px') {
        img.style.left === '0px';
    }
}
setInterval(catWalk, 50);




