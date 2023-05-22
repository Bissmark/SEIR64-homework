//Geometry Function Lab

//Part 1, Rectangle

// Given the following a rectangle object like the one below, write the following functions which accept a rectangle object as an argument:

// isSquare - Returns whether the rectangle is a square or not
// area - Returns the area of the rectangle
// perimeter - Returns the perimeter of the rectangle

const rectangleA = {
    length: 9,
    width: 10
};

const isSquare = function (recObj) {
    let square;
    if (recObj.length === recObj.width) {
        return square = true
    } else {
        return square = false
    }
}
console.log(isSquare(rectangleA));

const areaOfRect = function (recObj) {
    const area = recObj.length * recObj.width;
    return area;
}
console.log(areaOfRect(rectangleA));

const perimeterOfRect = function (recObj) {
    const perimeter = 2 * (recObj.length + recObj.width);
    return perimeter;
}
console.log(perimeterOfRect(rectangleA));

//Part 2, Triangle

// Given the following a triangle object like the one below, write the following functions which accept a triangle object as an argument:

// isEquilateral - Returns whether the triangle is equilateral or not
// isIsosceles - Returns whether the triangle is isosceles or not
// area - Returns the area of the Triangle
// isObtuse - Returns whether the triangle is obtuse or not


const triangleA = {
    sideA: 4,
    sideB: 4,
    sideC: 4
};
const triangleB = {
    sideA: 4,
    sideB: 4,
    sideC: 3
};
const isEquilateral = function (triObj) {
    let equalTri;
    if (triObj.sideA === triObj.sideB && triObj.sideA === triObj.sideC) {
        return equalTri = true;
    } else {
        return equalTri = false;
    }
}
console.log(isEquilateral(triangleA))

const isIsosceles = function (triObj) {
    let isoscelesTri;
    if (triObj.sideA === triObj.sideB || triObj.sideA === triObj.sideC || triObj.sideB === triObj.sideC) {
        if (triObj.sideA === triObj.sideB && triObj.sideA === triObj.sideC && triObj.sideB === triObj.sideC) {
            return isoscelesTri = false;
        }
        return isoscelesTri = true;
    } else {
        return isoscelesTri = false;
    }
}
console.log(isIsosceles(triangleA))

const areaOfTri = function (triObj) {
    let area;
    if (isEquilateral(triObj)) {
        area = Math.sqrt(3) * (triObj.sideA ** 2) / 4
        // console.log(area)
        return area
    } else if (isIsosceles(triObj)) {// Heron's Formula
        let semiPerimeter = (triObj.sideA + triObj.sideB + triObj.sideC) / 2;
         area = Math.sqrt(semiPerimeter * (semiPerimeter - triObj.sideA) * (semiPerimeter - triObj.sideB) * (semiPerimeter - triObj.sideC))
        //  console.log(area)
        return area
    }
}
console.log(areaOfTri(triangleA))
console.log(areaOfTri(triangleB))