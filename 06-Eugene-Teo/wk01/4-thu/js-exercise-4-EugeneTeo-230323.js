// # Geometry Function Lab

// ### Part 1, Rectangle

// Given the following a `rectangle` object like the one below, write the following functions which accept a `rectangle` object as an argument:

// * isSquare - Returns whether the rectangle is a square or not
// * area - Returns the area of the rectangle
// * perimeter - Returns the perimeter of the rectangle

// ```javascript
// const rectangleA = {
//   length: 4,
//   width: 4
// };
// ```

const rectA = {
    length: 4,
    width: 4
};

const isSquare = function (rectangle) {
    if (rectangle.length === rectangle.width) {
        console.log('square'); 
        return true
    } else { 
        console.log('not square');
        return false
    }
}

// arrow notation
const isSquare2 = (rectangle) => {
    if (rectangle.length === rectangle.width) {
        console.log('square'); 
        return true
    } else { 
        console.log('not square');
        return false
    }
}

isSquare(rectA);

// Part 1 area

const recArea = function(rectangle) {
    const area = rectangle.length * rectangle.width;
    return area
}

console.log(recArea(rectA));

const recPerimeter = function (rectangle) {
    const perimeter = (2 * rectangle.length) + (2 * rectangle.width);
    return perimeter
}

console.log(recPerimeter(rectA));

// ### Part 2, Triangle

// Given the following a `triangle` object like the one below, write the following functions which accept a `triangle` object as an argument:

// * isEquilateral - Returns whether the triangle is equilateral or not
// * isIsosceles - Returns whether the triangle is isosceles or not
// * area - Returns the area of the Triangle
// * isObtuse - Returns whether the triangle is obtuse or not

// ```javascript
// const triangle = {
//   sideA: 3,
//   sideB: 4,
//   sideC: 4
// };
// ```

const triangleA = {
    sideA: 3,
    sideB: 4,
    sideC: 4
};

const isEquilateral = function (triangle) {    
    if (triangle.sideA === triangle.sideB === triangle.sideC) {
        console.log('equilateral'); 
        return true
    } else { 
        console.log('not equilateral');
        return false
    }
}

isEquilateral(triangleA);

const isIsosceles = function (triangle) {
    if (triangle.sideA == triangle.sideB || triangle.sideB == triangle.sideC || triangle.sideC == triangle.sideA) {
        console.log('isosceles');
        return true
    } else {
        console.log(['not isosceles']);
        return false
    }
}

isIsosceles(triangleA);

const triangleArea = function(triangle) {
    const halfPerimeter = ((triangle.sideA + triangle.sideB + triangle.sideC) / 2);
    const areaOfTriangle = (Math.sqrt(halfPerimeter*((halfPerimeter - triangle.sideA) * (halfPerimeter - triangle.sideB) * (halfPerimeter - triangle.sideC))));
    console.log(areaOfTriangle);
    return areaOfTriangle
}

triangleArea(triangleA);

const isObtuse = function (triangle) {
    // a=5 b=8 c=10 
    // a=8 b=10 c=5 
    // a=10 b=5 c=8 
    // if [a, b, c]; 
    // 


}
// for (let i = 0; i < triangle[i]; )

// if a**2 + b**2 < C**2, triangle is obtuse. a and b are lengths of 2 shorter sides
// do a loop to find out shorter lengths 

//help...stuck?!

// # The Cash Register

// Write a function called cashRegister that takes a shopping cart object. The object contains item names and prices (itemName: itemPrice). The function should return the total price of the shopping cart.
// Example

// ```
// // Input
// const cartForParty = {  
//   banana: "1.25",
//   handkerchief: ".99",
//   Tshirt: "25.01",
//   apple: "0.60",
//   nalgene: "10.34",
//   proteinShake: "22.36"
// };

// // Output
// cashRegister(cartForParty); // 60.55

// Input
const cartForParty = {  
  banana: "1.25",
  handkerchief: ".99",
  Tshirt: "25.01",
  apple: "0.60",
  nalgene: "10.34",
  proteinShake: "22.36"
};


// console.log(Object.keys(cartForParty)); //working as intended


function cashRegister(cart) {
    let totalCost = 0;
    const cartItems = Object.keys(cart);
    console.log(cartItems);
    for (let i = 0; i < cartItems.length; i++ ) {
        totalCost += parseFloat(cart[cartItems[i]]);
        console.log(cart[cartItems[i]]);  // iteration 
    }
    console.log(cart['banana']) // => self-checking
    console.log(cart['handkerchief']) // => self-checking
    console.log(totalCost);
    return totalCost;
}

cashRegister(cartForParty); //output is correct 








