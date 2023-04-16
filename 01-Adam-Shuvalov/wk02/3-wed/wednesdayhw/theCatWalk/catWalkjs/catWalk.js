console.log('cat!')

const catImage = document.getElementById('cat1');
const div = document.querySelector('div')

catImage.style.left = '0px';
catImage.style.top = '500px';
catImage.style.width = '100px'
catImage.style.zIndex = 2
var goBack = false;

const cat2 = document.createElement('img');
cat2.src = "http://www.anniemation.com/clip_art/images/cat-walk.gif";
cat2.style.position = 'absolute'
cat2.style.left = '0px';
cat2.style.top = '400px';
cat2.style.width = '300px'
cat2.style.zIndex = 4
div.appendChild(cat2)

const cat3 = document.createElement('img');
cat3.src = "http://www.anniemation.com/clip_art/images/cat-walk.gif"
cat3.style.position = 'absolute'
cat3.style.left = '350px';
cat3.style.top = '450px';
cat3.style.width = '60px'
cat3.style.zIndex = 1
div.appendChild(cat3)


const cat4 = document.createElement('img');
cat4.src = "http://www.anniemation.com/clip_art/images/cat-walk.gif";
cat4.style.position = 'absolute'
cat4.style.left = '650px';
cat4.style.top = '490px';
cat4.style.width = '5px'
cat4.style.opacity = 1
cat4.style.zIndex = 3
div.appendChild(cat4)

//CAT4

const cat4Forward = function () {
    if (parseInt(cat4.style.left) < 1200) {
    let catSize = parseInt(cat4.style.width) + 1;
    cat4.style.width = catSize + 'px';
    let catLeft = parseInt(cat4.style.left) + 3;
    cat4.style.left = catLeft + 'px';
    } else if (parseInt(cat4.style.left) >= 900) {
        cat4.style.transform = `scaleX(-1)`
        let cat4Top = parseInt(cat4.style.top) - 1;
        cat4.style.top = cat4Top + 'px';
        let catSize = parseInt(cat4.style.width) - 10;
        cat4.style.width = catSize + 'px';
        cat4.style.opacity = cat4.style.opacity - 0.019
    }
}

window.setInterval(cat4Forward, 100)


//CAT1 //This code I need assistance with --> stopping the first interval does not allow me to start the next one to make it go backwards, which is why I have taken a different approach with the other cats.
const catWalkForward = function () {
    let catLeft = parseInt(catImage.style.left) + 10;
    catImage.style.left = catLeft + 'px';
    if (parseInt(catImage.style.left) >= 1200) {
        console.log(parseInt(catImage.style.left))
        clearInterval(stopCatWalkForward)
    }
};

const stopCatWalkForward = setInterval(catWalkForward, 50);


const catWalkBackward = function () {
        console.log(parseInt(catImage.style.left))
        let catLeft = parseInt(catImage.style.left) - 10;
        catImage.style.left = catLeft + 'px';
        if (catImage.style.left === '0px') {
            clearInterval(stopCatWalkBackward)
        }
    }

if (parseInt(catImage.style.left) >= 1190) {
window.setInterval(catWalkBackward, 50);
}
//This code I need assistance with ^^^


//CAT2

let stepsTaken = 0;
let stepsTakenBackword = 0;
const cat2Forward = function () {
    if (stepsTaken !== 110) {
        cat2.style.transform = 'scaleX(1)'
        let catLeft = parseInt(cat2.style.left) + 10;
        cat2.style.left = catLeft + 'px';
        stepsTaken = stepsTaken + 1;
    } else if (stepsTakenBackword !== 110) {
        cat2.style.transform = 'scaleX(-1)'
        catLeft = parseInt(cat2.style.left) - 10;
        cat2.style.left = catLeft + 'px';
        stepsTakenBackword = stepsTakenBackword + 1
        if (stepsTakenBackword === 110) {
            stepsTaken = 0
            stepsTakenBackword = 0;
        }
    }
}
setInterval(cat2Forward, 50)

//CAT3

let stepsTaken3 = 0;
let stepsTakenBackword3 = 0;
const cat3Forward = function () {
    if (stepsTaken3 !== 80) {
        cat3.style.transform = 'scaleX(1)'
        let catLeft = parseInt(cat3.style.left) + 1;
        cat3.style.left = catLeft + 'px';
        stepsTaken3 = stepsTaken3 + 1;
    } else if (stepsTakenBackword3 !== 80) {
        cat3.style.transform = 'scaleX(-1)'
        catLeft = parseInt(cat3.style.left) - 1;
        cat3.style.left = catLeft + 'px';
        stepsTakenBackword3 = stepsTakenBackword3 + 1
        if (stepsTakenBackword3 === 80) {
            stepsTaken3 = 0
            stepsTakenBackword3 = 0;
        }
    }
}
setInterval(cat3Forward, 50)