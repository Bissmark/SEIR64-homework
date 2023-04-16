/*
const img = $(`img`)[0]
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
*/

const img = $('img')
function loop () {
    img.css('position', 'absolute')
    img.css({left:0})
    img.animate({left: '1400px'}, 4000, function(){loop()
    });
}
$(document).ready(function(){loop()})




        




