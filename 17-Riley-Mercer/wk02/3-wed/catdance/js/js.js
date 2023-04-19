console.log('hello');

const pussyCat = document.getElementById('cat');

pussyCat.style.position = 'absolute';
pussyCat.style.left = '0px';

const felineGrace = function() {
  const oldPos = parseInt(pussyCat.style.left);
  const newPos = oldPos + 10;
  pussyCat.style.left = newPos + 'px';
  if (pussyCat.style.left === "1200px"){
    console.log("nailed it")
    clearInterval(kittenTimer);
    let kittenTimerReverse = window.setInterval(felineGraceReverse, 10);
    setInterval(kittenTimerReverse)
    } 
};

const felineGraceReverse = function() {
    const oldPos = parseInt(pussyCat.style.left);
    const newPos = oldPos - 10;
    pussyCat.style.left = newPos + 'px';
    if (pussyCat.style.left === "0px"){
      console.log("nailed it2")
      clearInterval(kittenTimer);
      } 
  };


let kittenTimer = window.setInterval(felineGrace, 10);

