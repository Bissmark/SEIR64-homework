// Geometry Function Lab
// Part 1, Rectangle

function isSquare(square) {
    if (square.length === square.width) {
        console.log("It is a square.")
    } else {
        console.log("It's not a square.")
    }
};

function calArea(area) {
    let areas = area.length * area.width
    console.log(`The area of the rectangle is ${ areas }.`);
};

function Calperimeter(premiter) {
    let premiters = 2 * (premiter.length + premiter.width);
    console.log(`The premiter of the rectangle is ${ premiters }.`)
};

const rectangleA = {
    length: 4,
    width: 4
  };
  
isSquare(rectangleA);
calArea(rectangleA);
Calperimeter(rectangleA);



// Part 2, Triangle
function isEquilateral(equilateral) {
    if (equilateral.sideA === equilateral.sideB === equilateral.sideC) {
        console.log("It is equilateral.")
    } else {
        console.log("It's not equilateral.")
    }
};

function isIsosceles(isosceles) {
    if (isosceles.sideA === isosceles.sideB || isosceles.sideA === isosceles.sideC || isosceles.sideB === isosceles.sideC) {
        console.log("It is isosceles.")
    } else {
        console.log("It's not isosceles.")
    }
};

function area(triangle) {
    const s = (triangle.sideA + triangle.sideB + triangle.sideC) / 2;
    const realArea = Math.sqrt(s * (s - triangle.sideA) * (s - triangle.sideB) * (s - triangle.sideC));
    console.log(`The area of the triangle is ${ realArea }.`)
;}

  
function isObtuse(triangle) {
    const longestSide = Math.max(triangle.sideA, triangle.sideB, triangle.sideC);
    if (longestSide === triangle.sideA && longestSide ** 2 > triangle.sideB ** 2 + triangle.sideC ** 2) {
        console.log('It is an obtuse triangle.');
    } else if (longestSide === triangle.sideB && longestSide ** 2 > triangle.sideA ** 2 + triangle.sideC ** 2) {
        console.log('It is an obtuse triangle.');
    } else if (longestSide === triangle.sideC && longestSide ** 2 > triangle.sideA ** 2 + triangle.sideB ** 2) {
        console.log('It is an obtuse triangle.');
    } else {
        console.log('It is not an obtuse triangle.');
    }
  }

const triangleA = {
    sideA: 3,
    sideB: 4,
    sideC: 4
  };

isEquilateral(triangleA);
isIsosceles(triangleA);
area(triangleA);
isObtuse(triangleA);