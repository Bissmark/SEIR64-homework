// Part 1 - Rectangle - function = recCheck(rectangleA.length, rectangleA.width
const rectangleA = {
    length: 10,
    width: 4
  };

const recCheck = function(l,w){
        console.log(squareCheck(l,w));
        console.log("the area of this shape is ", l * w);
        console.log("the perimeter of this shape is ", (l * 2) + (w * 2));
}
    
const squareCheck = function(l,w){
    if (l === w){
        return "this is a square";
    } if (l != w) {
        return "this is not a squre";
    }
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// part 2 - Triangle

const triangleA = {
    sideA: 5,
    sideB: 4,
    sideC: 5
  };

const isEquilateral  = function(sideA,sideB,sideC) {
    if (sideA === sideB && sideA === sideC){
        console.log("this is an equilateral triangle")
    }    
}

isEquilateral(triangleA.sideA,triangleA.sideB,triangleA.sideC)

const isIsosceles  = function(sideA,sideB,sideC) {
    if ((sideA === sideB && sideA !== sideC) || (sideA === sideC && sideA !== sideB) || (sideB === sideC && sideB !== sideA)) {
        console.log("this is an isosceles triangle")
    }    
}

isIsosceles(triangleA.sideA,triangleA.sideB,triangleA.sideC)

const isObtuse  = function(sideA,sideB,sideC) {
    if (sideA !== sideB && sideA !== sideC && sideB !== sideC){
        console.log("this is an obtuse scalene triangle") //I might come back to this and do the additional geometric nerd stuff
    }    
}

isObtuse(triangleA.sideA,triangleA.sideB,triangleA.sideC)


// Calculating the area of a triangle is for nerds. The credit card checker was more interesting.