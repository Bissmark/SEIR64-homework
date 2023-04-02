

document.body.style.backgroundColor = 'darkgrey';

const bg = document.createElement('img');
bg.src = 'img/lake2.png';
bg.style.height = '600px';
bg.style.width = '900px';
bg.style.border = '5px solid whitesmoke';
document.body.appendChild(bg);

const catImg = document.body.getElementsByTagName('img')[0];
const cat = catImg.style;
cat.left = '50px';
cat.top = '360px';
cat.scale = '60%';


const img2 = document.createElement('img');
img2.setAttribute('id', 'dog');
img2.src = 'img/8ixKaobip.gif';
const dog = img2.style;
dog.position = 'absolute';
dog.left = '0px';
dog.top = '0px';
dog.scale = '20%';
document.body.appendChild(img2);
const dogImg = document.getElementById('dog');
console.log(dogImg);

const launcherImg = document.createElement('img');
launcherImg.src = 'img/launcher.png';
document.body.appendChild(launcherImg);

const explosionImg = document.createElement('img');
explosionImg.src = 'img/explosion.gif';
document.body.appendChild(explosionImg);

const launcher = launcherImg.style;
launcher.position = 'absolute';
launcher.right = '0px';
launcher.top = '0px';
launcher.scale = '10%';

const explosion = explosionImg.style;
explosion.position = 'absolute';
explosion.right = '0px';
explosion.top = '0px';


const catWalk = function() {
    const catOldXPos = parseInt(catImg.style.left);
    const catNewXPos = catOldXPos + 5;
    catImg.style.left = catNewXPos + 'px';

    // const dogOldScale = parseInt(dogImg.style.scale);
    // console.log(dogOldScale);
    // const dogNewScale = dogOldScale + 1;
    // dogImg.style.scale = dogNewScale + '%';

    // if (catNewXPos > 450) {
    //     const dogOldScale = parseInt(dog.scale);
    //     const dogNewScale = dogOldScale + 5;
    //     dog.scale = dogNewScale + '%';
    // }
    
    if (catNewXPos > 650) {
        catImg.style.transform = 'scale(-1,1)';
        clearInterval(catTimer);
    }
};

const catTimer = setInterval(catWalk, 50);



// const catOldYPos = parseInt(catImg.style.top);
//     const catNewYPos = catOldYPos + 2;
//     catImg.style.top = catNewYPos + 'px';