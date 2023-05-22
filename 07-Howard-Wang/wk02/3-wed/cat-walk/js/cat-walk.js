const img = document.getElementsByTagName('img')[0];
img.style.left = '0px';
img.style.position = 'absolute'
function catWalk () {
    let oldLeft = parseInt(img.style.left);
    let newLeft = oldLeft + 10;
    img.style.left = newLeft + 'px'
    if (newLeft === 1400){
       img.style.left = '0px'
    }
};
const timer = setInterval(catWalk, 50)




