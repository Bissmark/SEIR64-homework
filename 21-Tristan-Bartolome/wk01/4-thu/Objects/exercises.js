// console.log('testinnnn');
// # Geometry Function Lab

// ### Part 1, Rectangle

// Given the following a `rectangle` rectangleA like the one below, write the following functions which accept a `rectangle` rectangleA as an argument:
// ```javascript
// const rectangleA = {
//   length: 4,
//   width: 4
// };
// ```
const rectangleA = {
   height: 4,
   width: 4
};
// * isSquare - Returns whether the rectangle is a square or not
const isSquare = function (rectangle) {
    if(rectangle.height === rectangle.width) {
        return true;
    } else {
        return false;
    }
}
console.log(`The result is ${(isSquare(rectangleA))}`);
// * area - Returns the area of the rectangle
const area = function (rectangleA) {
    return rectangleA.height * rectangleA.width;
}
console.log(area(rectangleA));

// * perimeter - Returns the perimeter of the rectangle
const perimeter = function (rectangle) {
    return (rectangle.height * 2) + (rectangle.width * 2);
}
console.log(perimeter(rectangleA));

// ### Part 2, Triangle

// Given the following a `triangle` rectangleA like the one below, write the following functions which accept a `triangle` rectangleA as an argument:
const triangleA = {
  sideA: 8,
  sideB: 4,
  sideC: 5
};
// };// * isEquilateral - Returns whether the triangle is equilateral or not
const isEquilateral = function(triangle) {
    const a = triangle.sideA;
    const b = triangle.sideB;
    const c = triangle.sideC;
    if(a === b && a === c) {
        return true;
    } else {
        return false;
    }
}
console.log(isEquilateral(triangleA));
// * isIsosceles - Returns whether the triangle is isosceles or not
    const isIsosceles = function(isosceles) {
        const a = isosceles.sideA;
        const b = isosceles.sideB;
        const c = isosceles.sideC;
        if(a === b && a !== c || b === c && b !== a || c === a && c !== b ) {
            return true;
        } else {
            return false;
        }
    }   
    console.log(isIsosceles(triangleA));
// * area - Returns the area of the Triangle
const areaOf = function (triangle) {
    const a = triangle.sideA;
    const b = triangle.sideB;
    const c = triangle.sideC;
    const s = (a + b + c) / 2;
    return Math.sqrt(s * (s - a) * (s - b) * (s - c));
}

console.log(areaOf(triangleA));

// * isObtuse - Returns whether the triangle is obtuse or not
const isObtuse = function (obtuse) {
    const a = obtuse.sideA;
    const b = obtuse.sideB;
    const c = obtuse.sideC;
    if (a !== b && a !== c && b !== c && b !== a && c !== a && c !== b) {
        return true;
    } else {
        return false;
    }
}
console.log(isObtuse(triangleA));


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

const cartForParty2 = {  
    banana: "3.00",
    handkerchief: ".99",
    Tshirt: "25.01",
    apple: "0.60",
    nalgene: "10.34",
    proteinShake: "22.36"
  };

const cartForParty = {  
  banana: "1.25",
  handkerchief: ".99",
  Tshirt: "25.01",
  apple: "0.60",
  nalgene: "10.34",
  proteinShake: "22.36"
};
//Object.values(cartForParty)                       //break down for personal understanding
const cashRegister = function (cash) {  // created a function called cashRegister
    const newArray = Object.values(cash); // get each value of cash and assign to new array(object.values(cash) takes the value from its object and makes it an array)
        let total = 0;                  // created a total starting at 0.   // (.length scales along array and stops at the end ofthe array)
    for (let i = 0; i < newArray.length; i++) { // let i(variable) = 0 | i < newArray.length | i++ (0 adding 1 to itself)
        let itemPriceInCart = newArray[i];// let newVariable = newArray[i] newVariable will now repesent the values in newArray
            total = total + +itemPriceInCart; // total = total + +newVariable;    total = total        +          +newVariable
    }                                                                          //(line130)         (stringing)   (newVariable from a string to a number) 
    return total //return the new total
}
console.log(`${cashRegister(cartForParty)}`);
// // Output
// cashRegister(cartForParty); // 60.55