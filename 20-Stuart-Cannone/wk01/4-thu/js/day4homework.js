console.log("homework starts here");

// # Geometry Function Lab

// ### Part 1, Rectangle

// Given the following a `rectangle` object like the one below, write the following functions which accept a `rectangle` object as an argument:

const rectangle = function(length, width) {
    this.length = length;
    this.width = width;
  }

  const rectangle1 = {length: 4, width: 2};
  const rectangle2 = {length: 2, width: 2};

  console.log(rectangle2)
  console.log(rectangle1)
  
  // * isSquare - Returns whether the rectangle is a square or not

  const isSquare = function(rectangle) {
    if (rectangle.length === rectangle.width) {
      console.log(`This is a square`);
    } else {
      console.log("This is not a square");
    }
  }
 isSquare(rectangle1); 
 isSquare(rectangle2);

// * area - Returns the area of the rectangle

const area = function(rectangle) {
    const result = rectangle.length * rectangle.width;
    console.log(`The area is ${result}`);
    return result;
}
area(rectangle1);
area(rectangle2);

// * perimeter - Returns the perimeter of the rectangle

const perimeter = function(rectangle) {
    const periresult = (rectangle.length * 2) + (rectangle.width * 2);
    console.log(`The perimeter is ${periresult}`);
    return periresult;
}
perimeter(rectangle1)
perimeter(rectangle2)



// ### Part 2, Triangle

// Given the following a `triangle` object like the one below, write the following functions which accept a `triangle` object as an argument:

const triangle = function(length, width, height) {
    side.length = length;
    side.width = width;
    side.height = height;
  }
  const tri1 = {length: 3, width: 3, height: 3};
  const tri2 = {length: 3, width: 3, height: 5};

  console.log(tri1)
  console.log(tri2)
  
// * isEquilateral - Returns whether the triangle is equilateral or not

const isEquilateral = function(triangle) {
    if (triangle.length === triangle.width && triangle.length === triangle.height) {
      console.log(`This is an equilateral triangle`);
    } else {
      console.log(`This is not an equilateral triangle`);
    }
  }
  isEquilateral(tri1)
  isEquilateral(tri2)
  
// * isIsosceles - Returns whether the triangle is isosceles or not
const isIsosceles = function(triangle) {
    if (triangle.length === triangle.width && triangle.length !== triangle.height) {
      console.log(`This is an isosceles triangle`);
    } else {
      console.log(`This is not an isosceles triangle`);
    }
  }
isIsosceles(tri1)
isIsosceles(tri2)

// * area - Returns the area of the Triangle

const triarea = function(triangle) {
    const result = (triangle.length * triangle.height) * 0.5;
    console.log(`The area is ${result}`);
    return result;
}
triarea(tri1)
triarea(tri2)


// * isObtuse - Returns whether the triangle is obtuse or not

function isObtuseTriangle(triangle) {
    
    // Check if the sum of any two sides is less than or equal to the third side
    if (triangle.length + triangle.width <= triangle.height ||
        triangle.length + triangle.height <= triangle.width ||
         triangle.width + triangle.height <= triangle.length) {
      return false;
    }
    // Calculate the squares of the sides
    var lengthSquared = Math.pow(triangle.length, 2);
    var widthSquared = Math.pow(triangle.width, 2);
    var heightSquared = Math.pow(triangle.height, 2);
    // Check if the sum of the squares of the two shorter sides is less than the square of the longest side
    if (lengthSquared + widthSquared < heightSquared || 
        lengthSquared + heightSquared < widthSquared || 
        widthSquared + heightSquared < lengthSquared) {
      console.log("This is an obtuse triangle");
    }
    else {
      console.log("This is not an obtuse triangle");
    }
  }

  console.log(isObtuseTriangle(tri1))
  console.log(isObtuseTriangle(tri2))

