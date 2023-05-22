const img = document.getElementsByTagName('img')[0];
img.style.position = 'absolute';
img.style.left = '0px';
const catWalk = function() {
  const oldLeft = parseInt(img.style.left);
  const newLeft = oldLeft + 10;
  img.style.left = newLeft + 'px';
  if (newLeft > window.innerWidth) {
    clearInterval(timer)
  }
  
};
const timer = setInterval(catWalk, 50)



