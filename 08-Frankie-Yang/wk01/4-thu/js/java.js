// Part 1, Rectangle
// Given the following a rectangle object like the one below, write the following functions which accept a rectangle object as an argument:

// isSquare - Returns whether the rectangle is a square or not
// area - Returns the area of the rectangle
// perimeter - Returns the perimeter of the rectangle
// const rectangleA = {
//   length: 4,
//   width: 4
// };
const rectangleA = {
    length: 4,
    width: 4
}


const isSqaure = function (rectangleA) {
    if (rectangleA.length === rectangleA.width) {
        console.log("true")
    }
}
const areaCalculation = function (rectangleA) {
    console.log(`the total area is ${rectangleA.length * rectangleA.width}`)
}

const perimeter = function (rectangleA) {
    console.log(`the perimeter is ${2 * (rectangleA.length + rectangleA.width)}`)
}

isSqaure(rectangleA)
areaCalculation(rectangleA)
perimeter(rectangleA)


// Part 2, Triangle
// Given the following a triangle object like the one below, write the following functions which accept a triangle object as an argument:

// isEquilateral - Returns whether the triangle is equilateral or not
// isIsosceles - Returns whether the triangle is isosceles or not
// area - Returns the area of the Triangle
// isObtuse - Returns whether the triangle is obtuse or not
// const triangleA = {
//   sideA: 3,
//   sideB: 4,
//   sideC: 4
// };


const triangleA = { sideA: 3, sideB: 4, sideC: 4 };

const isEquilateral = function (triangle) {
    if (triangle.sideA === triangle.sideB && triangle.sideB === triangle.sideC) {
        console.log("Equilateral");
    } else {
        console.log("Not Equilateral");
    }
};

const isIsosceles = function (triangle) {
    if (triangle.sideA === triangle.sideB || triangle.sideB === triangle.sideC || triangle.sideC === triangle.sideA) {
        console.log("Isosceles");
    } else {
        console.log("Not Isosceles");
    }
};

const isObtuse = function (triangleA) {
    if (triangleA.sideA ** 2 > triangleA.sideB ** 2 + triangleA.sideC ** 2
        || triangleA.sideB ** 2 > triangleA.sideC ** 2 + triangleA.sideA ** 2
        || triangleA.sideC ** 2 > triangleA.sideA ** 2 + triangleA.sideB ** 2) {
        console.log("obtuse")
    } else {
        console.log("not obtuse")
    }

};


isEquilateral(triangleA);
isIsosceles(triangleA);
isObtuse(triangleA);


// The Cash Register
// Write a function called cashRegister that takes a shopping cart object. The object contains item names and prices (itemName: itemPrice). The function should return the total price of the shopping cart. Example

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


const cartForParty = {
    banana: 1.25,
    handkerchief: 0.99,
    Tshirt: 25.01,
    apple: 0.60,
    nalgene: 10.34,
    proteinShake: 22.36
};

const cashRegister = function (cartForParty) {
    return cartForParty.banana + cartForParty.handkerchief +
        cartForParty.Tshirt + cartForParty.apple + cartForParty.nalgene +
        cartForParty.proteinShake
}

console.log("the total price is " + cashRegister(cartForParty) + " .")



// Credit Card Validation
// You're starting your own credit card business. You've come up with a new way to validate credit cards with a simple function called validateCreditCard that returns true or false.

// Here are the rules for a valid number:

// Number must be 16 digits, all of them must be numbers
// You must have at least two different digits represented (all of the digits cannot be the same)
// The final digit must be even
// The sum of all the digits must be greater than 16
// The following credit card numbers are valid:

// 9999-9999-8888-0000
// 6666-6666-6666-1666
// The following credit card numbers are invalid:

// a923-3211-9c01-1112 invalid characters
// 4444-4444-4444-4444 only one type of number
// 1111-1111-1111-1110 sum less than 16
// 6666-6666-6666-6661 odd final number
// Example
// validateCreditCard('9999-9999-8888-0000'); // Returns: true
// Hint: Remove the dashed from the input string before checking if the input credit card number is valid.

// Bonus: Return an object indicating whether the credit card is valid, and if not, what the error is

// { valid: true, number: 'a923-3211-9c01-1112' } 
// { valid: false, number: 'a923-3211-9c01-1112', error: ‘wrong_length’ }
// Double Bonus: Make your credit card scheme even more advanced! What are the rules, and what are some numbers that pass or fail? Ideas: check expiration date! Check out the Luhn Algorithm for inspiration.

// true or false

// const arrayNumber = function (number) {

//     let cleanedST = Array.from (number) ;}

//     if (cleanedST.length === 16){
//         console.log ("correct length")
//     }else{
//         console.log ("incorrect length")
//     }

//     for (let i =0; i<cleanedST.length; i++)
//     if (cleanedST.number [i] === 0 || 1||2 ||3||4||5||6||7||8||9)
//     {console.log ("corret characters")
//     }else{
//         console.log("invalid characters")
//     }

//     if (cleanedST[15] % 2 === 0){
//         console.log("correct")
//     }else{
//         console.log ('odd final number')
//     }

// for (let j = 0 ; j < cleanedST.number.length ; j++)
// const sumJ = function(cleanedST){ let sum === 0;
// sum += cleanedST.number[j]
// return sum ;}

// if (sumJ > 16){
//     console.log("correct")
// }else{
//     console.log ("sum less than 16")
// }
// const cleanedST = 0;
// const number = 1234567890123456

const number = "1234-5678-9012-3456";

const validateCreditCard = function(number) {
    const cleanedSto = number.replace(/-/g,'');
    const cleanedST = Array.from(cleanedSto);

    if (cleanedST.length === 16) {
      console.log("");
    } else {
      console.log("Incorrect length");
    }

    for (let i = 0; i < cleanedST.length; i++) {
      if (/[0-9]/.test(cleanedST[i])) {
        console.log("");
      } else {
        console.log("Invalid characters");
      }
    }

    if (cleanedST[15] % 2 === 0) {
      console.log("");
    } else {
      console.log("Odd final digit");
    }

    let sum = 0;
    for (let j = 0; j < cleanedST.length; j++) {
      sum += cleanedST[j];
    }

    if (sum > 16) {
      console.log("true");
    } else {
      console.log("Sum is less than or equal to 16");
    }
  }

  validateCreditCard(number);



const number2 = "1234-5678-9012-3455";

const validateCreditCard2 = function (number2) {
   
    const cleanedSto2 = number2.replace(/-/g, '');

    const cleanedST2 = Array.from(cleanedSto2);
    
    let response1 = "";
    if (cleanedST2.length === 16) {
        
        response1 = '';
    } else {
        response1 = 'Incorrect length';
    }
    let response2 = "";
    for (let i = 0; i < cleanedST2.length; i++) {
        if (/[0-9]/.test(cleanedST2[i])) {
            
            response2 = "";
        } else {
            response2 = "invalid character";
        }
    }
    let response3 = "";
    if (cleanedST2[15] % 2 === 0) {
        
        response3 = "";
    } else {
        response3 = "Odd final digit";
    }

    let sum = 0;
    for (let j = 0; j < cleanedST2.length; j++) {
        sum += cleanedST2[j];
    }
    let response4 = "";
    if (sum > 16) {
        
        response4 = "";
    } else {
        response4 = "Sum is less than or equal to 16";
    }
    let validReslut="";
    if(response1 === response2 === response3 === response4){
        validReslut = true;}
        else{validReslut = false;}
    const response = response1 + response2 + response3 + response4;
    console.log(`{valid: ${validReslut} , number :' ${number2} ' , error ' ${response} ' }`);
  };

    
validateCreditCard2(number2);


// const number3 = "1234-5678-9012-3455";

// const validateCreditCard3 = function (number3) {
   
//     const cleanedSto3 = number3.replace(/-/g, '');

//     const cleanedST3 = Array.from(cleanedSto3);
    
//     let response11 = "";
//     if (cleanedST3.length === 16) {
        
//         response11 = '';
//     } else {
//         response11 = 'Incorrect length';
//     }
//     let response12 = "";
//     for (let i = 0; i < cleanedST3.length; i++) {
//         if (/[0-9]/.test(cleanedST3[i])) {
            
//             response12 = "";
//         } else {
//             response12 = "invalid character";
//         }
//     }
//     let response13 = "";
//     if (cleanedST3[15] % 2 === 0) {
        
//         response13 = "";
//     } else {
//         response13 = "Odd final digit";
//     }

//     let sum = 0;
//     for (let j = 0; j < cleanedST3.length; j++) {
//         sum += cleanedST3[j];
//     }
//     let response14 = "";
//     if (sum > 16) {
        
//         response14 = "";
//     } else {
//         response14 = "Sum is less than or equal to 16";
//     }
//     let validReslut11="";
//     if(response11 === response12 === response13 === response14){
//         validReslut11 = true;}
//         else{validReslut11 = false;}
//     const response10 = response11 + response12 + response13 + response14;
//     console.log(`{valid: ${validReslut11} , number :' ${number3} ' , error ' ${response10} ' }`);
//   };

    
// validateCreditCard2(number3);

