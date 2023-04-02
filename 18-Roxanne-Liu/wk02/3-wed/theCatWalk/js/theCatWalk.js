// // the cat will stop walking when it reaches the right end of the page:

// const img = document.getElementsByTagName('img')[0];
// img.style.position = 'absolute';
// img.style.left = '0px';

// function catWalk() {
//     let currentLeft = parseInt(img.style.left);
//     img.style.left = (currentLeft + 10) + 'px';
//     if (currentLeft > window.innerWidth) {
//         clearInterval(catWalkTimer);
//     }
// };
// const catWalkTimer = setInterval(catWalk, 100);

// // Bonus 1

// const img = document.getElementsByTagName('img')[0];
// img.style.position = 'absolute';
// img.style.left = '0px';

// function catWalk() {
//     let currentLeft = parseInt(img.style.left);
//     img.style.left = (currentLeft + 10) + 'px';
//     if (currentLeft > window.innerWidth) {
//         img.style.left = "0px";
//     }
// };
// setInterval(catWalk, 100);

// Bonus 2

const img = document.getElementsByTagName('img')[0];
img.style.position = 'absolute';
img.style.left = '0px';
let direction = "right";

const maxPosition = window.innerWidth - 296;
const minPosition = 0;

function catWalk() {
    let currentLeft = parseInt(img.style.left);

    if (direction === "right") {
        currentLeft = currentLeft + 10;
        img.style.left = currentLeft + 'px';
        if (currentLeft > maxPosition) {
            direction = "left";
            img.style.transform = 'scaleX(-1)';
        }
    } else {
        currentLeft = currentLeft - 10;
        img.style.left = currentLeft + 'px';
        if (currentLeft < minPosition) {
            direction = "right";
            img.style.transform = 'scaleX(1)';
        }
    }
};
setInterval(catWalk, 100);


// // Bonus 3

// const img = document.getElementsByTagName('img')[0];
// img.style.position = 'absolute';
// img.style.left = '0px';
// let direction = "right";

// const maxPosition = window.innerWidth - 296;
// const middlePosition = window.innerWidth / 2;
// const minPosition = 0;


// function catWalk() {
//     let currentLeft = parseInt(img.style.left);

//     if (direction === "right") {
//         currentLeft = currentLeft + 10;
//         img.style.left = currentLeft + 'px';
//         if (currentLeft > middlePosition) {
//             img = document.getElementsByClassName('cat')[0].src="images/dancing-cat-dancing-kitten.gif";
//             clearTimeout(catTimeOut);
//         }
            
//             direction = "left";
//             img.style.transform = 'scaleX(-1)';

//     } else {
//         currentLeft = currentLeft - 10;
//         img.style.left = currentLeft + 'px';
//         if (currentLeft < minPosition) {
//             direction = "right";
//             img.style.transform = 'scaleX(1)';
//         }
//     }
// };
// const catTimeOut = setTimeout(catWalk, 10000);
// setInterval(catWalk, 100);
