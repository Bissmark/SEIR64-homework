// Part 1, Rectangle
// Given the following a rectangle object like the one below, write the following functions which accept a rectangle object as an argument:

// isSquare - Returns whether the rectangle is a square or not
// const rectangleA = {
//     length: 4,
//     width: 4
//   };

const isSquare = function (length, width) {
        // if length === width
    if (length === width) {
        return 'true';
    } 
        return 'false';
        //  result == true
        // else return = false
  };

console.log(isSquare(10, 7));
console.log(isSquare(8, 8));

// area - Returns the area of the rectangle

const area = function (length , width) {
        let area = length * width;
        return area;
  };

console.log(area(5, 10));
 
// perimeter - Returns the perimeter of the rectangle


    const perimeter = function (length, width) {
            let perimeter = (width + length) * '2';
            return perimeter;
        };
console.log(perimeter(10, 20));



// Part 2, Triangle
// Given the following a triangle object like the one below, write the following functions which accept a triangle object as an argument:

// isEquilateral - Returns whether the triangle is equilateral or not

const isEquilateral = function (a, b, c) {
    if ( a === b && b === c ) {
        return 'true';
    }
    return 'false';
};

console.log(isEquilateral(5, 6, 6)); // function not running correctly
console.log(isEquilateral(5, 5, 5));

// isIsosceles - Returns whether the triangle is isosceles or not

const isIsosceles = function (a, b, c) {
    if ( a === b || b === c || c === a ) {
        return 'true';
    }
    return 'false';
};

console.log(isIsosceles(6, 8, 9));
console.log(isIsosceles(8, 8, 10));
// area - Returns the area of the Triangle

const tArea = function (base, height) {
    let tArea = base * height * 0.5;
    return tArea;
};

console.log(tArea(10, 8));


// isObtuse - Returns whether the triangle is obtuse or not

const isObtuse = function (angle) {
    if ( angle > 90 ) {
        return 'true';
    }
    return 'false';
};

console.log(isObtuse(100));
console.log(isObtuse(120));