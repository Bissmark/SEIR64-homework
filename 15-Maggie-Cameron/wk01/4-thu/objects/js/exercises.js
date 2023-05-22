console.log("is this thing on?");
//part 1 rectangle 

const rectangleA = {
  length: 4,
  width: 4,
}
function findSquare() {
      if (rectangleA.length === rectangleA.width){
     console.log("This rectangle is a square");
      } else {
        console.log("This Rectangle is not a square"); 
      } 
    };
function findArea() {
result = ((rectangleA.length * rectangleA.width))
console.log(`The area is ${result}²`);
  };  
  function findPerimeter() {
    result = ((rectangleA.length + rectangleA.width) * 2)
    console.log(`The perimeter is ${result}`);
      };  

findSquare(rectangleA);
findArea(rectangleA);
findPerimeter(rectangleA);

//part 2 triangle 
//Given the following a `triangle` object like the one below, write the following functions which accept a `triangle` object as an argument:

//* isEquilateral - Returns whether the triangle is equilateral or not
//* isIsosceles - Returns whether the triangle is isosceles or not
//* area - Returns the area of the Triangle
//* isObtuse - Returns whether the triangle is obtuse or not

//```javascript
//const triangleA = {
//  sideA: 3,
//  sideB: 4,
//  sideC: 4
//};

const triangleA = {
  sideA: 3,
  sideB: 4,
  sideC: 4,
}
function isEquilateral() {
      if (rectangleA.sideA === rectangleA.sideB === triangleA.sideC){
     console.log(`The triangle is equilateral.`);
      } else {
        console.log(`The triangle is not equilateral.`); 
      } 
    };
function isIsosceles() {
 if ((rectangleA.sideA === rectangleA.sideB !== rectangleA.sideC)){
console.log(`The triangle is isosceles.`);
if ((rectangleA.sideC === rectangleA.sideB !== rectangleA.sideA)){
  console.log(true);
} else 
  console.log(false); 
}
  };  
  
  isEquilateral(triangleA);
  isIsosceles(triangleA);
  
   
  

  /*
  function isObtuse() {
    result = ((rectangleA.length + rectangleA.width) * 2)
    console.log(result);
      }; 
isObtuse(triangleA);

      



isEquilateral(triangleA);
isIsosceles(triangleA);
isObtuse(triangleA);


    











 # Geometry Function Lab

### Part 1, Rectangle

Given the following a `rectangle` object like the one below, write the following functions which accept a `rectangle` object as an argument:

* isSquare - Returns whether the rectangle is a square or not
* area - Returns the area of the rectangle
* perimeter - Returns the perimeter of the rectangle

```javascript
const rectangleA = {
  length: 4,
  width: 4
};
```

### Part 2, Triangle

Given the following a `triangle` object like the one below, write the following functions which accept a `triangle` object as an argument:

* isEquilateral - Returns whether the triangle is equilateral or not
* isIsosceles - Returns whether the triangle is isosceles or not
* area - Returns the area of the Triangle
* isObtuse - Returns whether the triangle is obtuse or not

```javascript
const triangleA = {
  sideA: 3,
  sideB: 4,
  sideC: 4
};
```*/
