// Geometry Function Lab

// Part 1, Rectangle

/* Given the following a `rectangle` object like the one below, write the following functions which accept a `rectangle` object as an argument:

* isSquare - Returns whether the rectangle is a square or not
* area - Returns the area of the rectangle
* perimeter - Returns the perimeter of the rectangle */


const rectangleA = {
    length: 4,
    width: 4,
};

const isSquare = function (rectangleA) {
    if (rectangleA.length === rectangleA.width) {
    console.log(true);
    } else {
    console.log(false);
    }
 };

 const area = function (rectangleA) {
    let calculate = (rectangleA.length * rectangleA.width);
    console.log(calculate);
 }
 
  const perimeter = function (rectangleA) {
    let total = ((rectangleA.length + rectangleA.width) * 2);
    console.log(total);
  }

  isSquare(rectangleA);
  area(rectangleA);
  perimeter(rectangleA);



/* --------------------------------------------------------------------------------------------------------------*/

// Part 2 Triangle

/* Given the following a triangle object like the one below, write the following functions which accept a triangle object as an argument:

isEquilateral - Returns whether the triangle is equilateral or not
isIsosceles - Returns whether the triangle is isosceles or not
area - Returns the area of the Triangle
isObtuse - Returns whether the triangle is obtuse or not */


const triangleA = {
    sideA: 3,
    sideB: 4,
    sideC: 4,
  };


// isEquilateral 

const isEquilateral = function(triangleA) {
    let tri = triangleA;
    if (tri.sideA === tri.sideB && tri.sideA === tri.sideC) {
        console.log(true);
    } else {
        console.log(false);
    }
};


/* returns true for equilateral too, wondering if this should be correct or whether a parameter is missing? but it does return false if all values are not equal */
const isIsosceles = function (triangleA) {
    let tri = triangleA; 

    if (tri.sideA === tri.sideB || tri.sideB === tri.sideC || tri.sideC === tri.sideA) {
        console.log(true);
    } else {
        console.log(false);
    }
};




// area

const areaTotal = function (triangleA) {
    let tri = triangleA;
    length = ((tri.sideA + tri.sideB + tri.sideC) / 2);
    result = Math.sqrt(length);
    console.log(result);
};

areaTotal(triangleA)



// isObtuse

const isObtuse = function (triangleA) {
    let tri = triangleA;
    

    // angleA 
    topRow = (tri.sideB ** 2) + (tri.sideC ** 2) - (tri.sideA ** 2); // 23
    bottomRow = 2 * tri.sideB * tri.sideC; // 32
    calculate = topRow / bottomRow; // 0.71875
    angleA = (Math.acos(calculate) * 180) / Math.PI; // turn in degree
    console.log(true);
    

    // angleB
    topRow = (tri.sideC ** 2) + (tri.sideA ** 2) - (tri.sideB ** 2); 
    bottomRow = 2 * tri.sideC * tri.sideA; 
    calculate = topRow / bottomRow; 
    angleB = (Math.acos(calculate) * 180) / Math.PI;
    console.log(true);
    

    // angleC 
    topRow = (tri.sideA ** 2) + (tri.sideB ** 2) - (tri.sideC ** 2); 
    bottomRow = 2 * tri.sideA * tri.sideB; 
    calculate = topRow / bottomRow; 
    angleC = (Math.acos(calculate) * 180) / Math.PI;
    console.log(true);

    // previously had if statements before but error code undefined would occur
    if (angleA > 90) {
        console.log(true);
    } if (angleB > 90) {
        console.log(true);
    } if (angleC > 90) {
        console.log(true);
    } else {
        console.log(false);
    }
};

isIsosceles(triangleA);
isEquilateral(triangleA);
isObtuse(triangleA)


/* --------------------------------------------------------------------------------------------------------------*/
// ATTEMPTED
// The Cash Register 

// Write a function called cashRegister that takes a shopping cart object. The object contains item names and prices (itemName: itemPrice). The function should return the total price of the shopping cart. Example

// Input
const cartForParty = {  
    banana: "1.25",
    handkerchief: ".99",
    Tshirt: "25.01",
    apple: "0.60",
    nalgene: "10.34",
    proteinShake: "22.36"
  };


  // const cashRegister = function(cartForParty) {}

  
  // loop through object and count value?
  for (let i = 0; i < cartForParty.length; i++) {
    console.log(cartForParty[2]);
  }

  // extract value???
// const values = (Object.values(cartForParty)) // (6) ['1.25', '.99', '25.01', '0.60', '10.34', '22.36']
// // unsure how to add all together
// console.log(total)


/* --------------------------------------------------------------------------------------------------------------*/
// ATTEMPTED
// Credit Card Validation

/* You're starting your own credit card business. You've come up with a new way to validate credit cards with a simple function called validateCreditCard that returns true or false.

Here are the rules for a valid number:

Number must be 16 digits, all of them must be numbers
You must have at least two different digits represented (all of the digits cannot be the same)
The final digit must be even
The sum of all the digits must be greater than 16
The following credit card numbers are valid:

9999-9999-8888-0000
6666-6666-6666-1666
The following credit card numbers are invalid:

a923-3211-9c01-1112 invalid characters
4444-4444-4444-4444 only one type of number
1111-1111-1111-1110 sum less than 16
6666-6666-6666-6661 odd final number */

// const validateCreditCard = function(cardDetails) {
     
    //if (cardDetails === 16) { //  ADD must be digits and numbers 
   //return true;

   // } if // at least two different digits ??
   //  if (cardDetails % 2 === 0) { // even number
    //return true

    //} (cardDetails > 16) // sum greater than 16
    
    // else { 
     //   return false;
    //}
    
    //console.log
//}


//validateCreditCard('9999-9999-8888-0000'); // Returns: true