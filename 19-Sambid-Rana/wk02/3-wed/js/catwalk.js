const img = document.querySelector('#catImg');
img.style.position = 'absolute';
img.style.top = '0px';
img.style.left = '0px';
const avaiableWidth = window.innerWidth; // - 296 img size



let newLeft;

const makeCatwalk = function () {
    
    let oldLeft = parseInt(img.style.left);

    // add to left
    if (newLeft !== avaiableWidth) {

        newLeft = oldLeft + 5;
        img.style.left = newLeft + 'px'; // change to sting

        //flip and walk : minus left
        // if (newLeft >= avaiableWidth) {

        //     img.style.transform = "scaleX(-1)";
        //     img.style.transition = ".8s";
        //     clearInterval(timer)
        //     setInterval(makeCatWalkAgain, 50)

        // }
        
        // make it walk from left again and agiin 
        if (newLeft >= avaiableWidth) {
            img.style.transform = "scaleX(-1)"; //moonwalk - just for fun

            oldLeft = -300; 
            newLeft = oldLeft + 5;
            
            img.style.left = newLeft + 'px';
        }


        
    }
    
    return newLeft
    
};

const timer = setInterval(makeCatwalk, 50)

// Make cat walk right to left // not working
// The aim was to start this function once the makeCatWalk stops but couldnt get it to work

const makeCatWalkAgain = function () {
    
    let oldLeft = newLeft;
    console.log(oldLeft)
    
    //minus left
    if (oldLeft > 0 && oldLeft === avaiableWidth) {
        
        newLeft = newLeft - 5; //this is not working
        img.style.left = newLeft + 'px';
        console.log(newLeft)
        clearInterval(timer)
        clearInterval(timerAgain)
    }
}
// const timerAgain = setInterval(makeCatWalkAgain, 50)