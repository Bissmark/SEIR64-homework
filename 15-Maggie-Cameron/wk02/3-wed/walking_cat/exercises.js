const img = document.getElementsByTagName('img')[0];
img.style.position = 'absolute';
img.style.left = '0px';
const watchKittyWalk = function() {
  const oldLeft = parseInt(img.style.left);
  const newLeft = oldLeft + 1;
  img.style.left = newLeft + 'px';
  if (newLeft > 1200) {
    clearInterval(timer)
  }
  
};
const timer = setInterval(watchKittyWalk, 5)