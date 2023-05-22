const rectangleA = {
  length: 4,
  width: 4
};

function isSquare(rectangle) {
  return rectangle.length === rectangle.width;
}

function area(rectangle) {
  return rectangle.length * rectangle.width;
}

function perimeter(rectangle) {
  return 2 * (rectangle.length + rectangle.width);
}


console.log(isSquare(rectangleA)); 
console.log(area(rectangleA)); 
console.log(perimeter(rectangleA)); 

