let img = document.getElementsByTagName('img')[0];
img.style.left = '0px';

let gif = document.getElementsByTagName('img')[1];

let beat = new Audio('Billie Jean Michael Jackson 128 Kbps-[AudioTrimmer.com].mp3');


function playAudio () {
    beat.play();
}

const moveImgRight = function() {
    const old = parseInt(img.style.left);
    const newSide = old + 2;
    img.style.left = newSide + 'px';
    if (old > 800) {
        playAudio();
        window.clearInterval(moveTimer);
        img.style.visibility = 'hidden';
        gif.style.visibility = 'visible'
    }
};

const moveTimer = window.setInterval(moveImgRight, 1);