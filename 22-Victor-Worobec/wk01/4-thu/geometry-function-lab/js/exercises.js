const cLog = console.log; //DOES THIS ALSO MAKE IT HARD FOR DEBUGGING?

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

cLog(`Part 1 - Rectangle`);
const rectangleA = {
    length: 4,
    width: 4
}

const isSquare = function (object) {
    if (object.length === object.width) {
        return true;
    } 
    else {
        return false;
    }
}

const area = function (object) {
    return object.length * object.width;
}

const perimeter = function (object) {
    return (object.length * 2) + (object.width * 2);
}

cLog(`isSquare = ${ isSquare(rectangleA) }; Area = ${ area(rectangleA) }; Perimeter = ${ perimeter(rectangleA) }`);

// ### Part 2, Triangle

// Given the following a `triangle` object like the one below, write the following functions which accept a `triangle` object as an argument:

// * isEquilateral - Returns whether the triangle is equilateral or not
// * isIsosceles - Returns whether the triangle is isosceles or not
// * area - Returns the area of the Triangle
// * isObtuse - Returns whether the triangle is obtuse or not

// ```javascript
// const triangleA = {
//   sideA: 3,
//   sideB: 4,
//   sideC: 4
// };
// ```

cLog(`\n\nPart 2 - Triangle`);
const triangleA = {
    sideA: 8,
    sideB: 3,
    sideC: 5
}

const isEquilateral = function (object) {
    const a = object.sideA;
    const b = object.sideB;
    const c = object.sideC;
    if (a === b && b === c && c === a) {
        return true;
    } 
    else {
        return false;
    }
}

const isIsosceles = function (object) {
    const a = object.sideA;
    const b = object.sideB;
    const c = object.sideC;

    if (a === b || a === c) {
        return true;
    } 
    else if (b === a || b === c) {
        return true;
    } 
    else if (c === a || c === b) {
        return true;
    } 
    else {
        return false;
    }
}

//UNEXPECTED RESULTS IF GIVEN INVALID TRIANGLE
const areaOfTriangle = function (object) { //formula found online; didn't understand how to break down Heron's formula myself but basically Area = (base * height) / 2 (or half * (base * height)) 
    const a = object.sideA;
    const b = object.sideB;
    const c = object.sideC;
    const s = (a + b + c) / 2;
    const result = Math.sqrt(s * (s - a) * (s - b) * (s - c));

    //checks if given sides will make a valid triangle (if sqrt return 0, triangle is not valid)... return error message if not valid
    if (result) {
        return result;
    } 
    else {
        return `Not a valid triangle...`;
    }
}

const isObtuse = function (object) {
    const a = object.sideA;
    const b = object.sideB;
    const c = object.sideC;

    //these conditionals check all sides against each other
    if ((a !== b) && (a !== c) && (b !== c)) {
        return true;
    } 
    else if ((b !== a) && (b !== c) && (a !== c)) {
        return true;
    } 
    else if ((c !== a) && (c !== b) && (a !== b)) {
        return true;
    } 
    else {
        return false;
    }
}
cLog(`isEquilateral = ${ isEquilateral(triangleA) } \nisIsosceles = ${ isIsosceles(triangleA) } \nareaOfTriangle: ${ areaOfTriangle(triangleA)} \nisObtuse = ${ isObtuse(triangleA) }`);

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
// ```

cLog(`\n\nThe Cash Register`);

const cartForParty = {  
      banana: "1.25",
      handkerchief: ".99",
      Tshirt: "25.01",
      apple: "0.60",
      nalgene: "10.34",
      proteinShake: "22.36"
    };

const cashRegister = function (shoppingCart) {
    let total = 0; //make a variable to store the total of all key pair values
    const itemPrices = Object.values(shoppingCart); //store values of the key pairs within object into its own array

    for (let i = 0; i < itemPrices.length; i++) { //loop through each element of object values (which were converted to an array in the above line)
        total += parseFloat(itemPrices[i]); //converts a string argument into a float number and adds to total
    }

    return total; //return the total amount
}

//CHANGE TO BELOW CODE IF TIME
// const object = { a: 1, b: 2, c: 3 };

// for (const property in object) {
//   console.log(`${property}: ${object[property]}`);
// }

// // Expected output:
// // "a: 1"
// // "b: 2"
// // "c: 3"


cLog(`The total of your shopping cart is: $${ cashRegister(cartForParty )}`);

// # Credit Card Validation

// You're starting your own credit card business. You've come up with a new way to validate credit cards with a simple function called validateCreditCard that returns true or false.

// Here are the rules for a valid number:

// - Number must be 16 digits, all of them must be numbers
// - You must have at least two different digits represented (all of the digits cannot be the same)
// - The final digit must be even
// - The sum of all the digits must be greater than 16

// The following credit card numbers are valid:

// - `9999-9999-8888-0000`
// - `6666-6666-6666-1666`

// The following credit card numbers are invalid:

// - `a923-3211-9c01-1112` invalid characters
// - `4444-4444-4444-4444` only one type of number
// - `1111-1111-1111-1110` sum less than 16
// - `6666-6666-6666-6661` odd final number

// ## Example
// ```
// validateCreditCard('9999-9999-8888-0000'); // Returns: true
// ```

// *Hint*: Remove the dashed from the input string before checking if the input credit card number is valid.

cLog(`\n\nCredit Card Validation`);

const validateCreditCard = function (creditCardNumber) {
    const creditNumberValid = creditCardNumber.replaceAll(`-`, ``); //returns a string with the chosen characters (`-`) eliminated (as specified in the second parameter)
    const creditNumberValidIntoArray = Array.from(creditNumberValid); //convert string into array

    let diffNumberStore = creditNumberValid[0]; //set new variable to first element to be used in later for loop and prevent unwanted true return
    let isLongEnough = true;
    let isValid = true;
    let isUnique = false;
    let isEven = false;
    let totalOfNumbers = 0;

    if (creditNumberValidIntoArray.length < 16) {
        isLongEnough = false;
    }

    for (let i = 0; i < creditNumberValidIntoArray.length; i++) { //loop through converted array
        const currentElement = creditNumberValidIntoArray[i]
        if (isNaN(currentElement)) { //start with true boolean first as you might set isValid to true accidently if checking that the number = true
            isValid = false;
        }

        if (currentElement !== diffNumberStore) { //if number is different from the current number to check again, then set isUnique to true
            diffNumberStore = currentElement;
            isUnique = true; 
        }

        totalOfNumbers += parseInt(currentElement); //convert element to int and add to total to be checked later
    }

    if (creditNumberValidIntoArray[creditNumberValidIntoArray.length - 1] % 2) { //if last element is not divisble by 2, set isEven to false, else true
        //cLog((creditNumberValidIntoArray[creditNumberValidIntoArray.length - 1] % 2)); //test of result
        isEven = false;
    } 
    else {
        isEven = true;
    }

    if (isValid && isLongEnough && isUnique && isEven) {
        return true;
    } 
    else {
        return false;
    }
}

cLog(validateCreditCard(`1234-5678-1234-5678`)); //checking true return
cLog(validateCreditCard(`1234-5678-1234-562`)); //checking isLongEnough false return
cLog(validateCreditCard(`1111-1111-1111-1111`)); //checking isUnique false return
cLog(validateCreditCard(`1111-1111-1111-1101`)); //checking totalOfNumbers false return

// *Bonus*: Return an object indicating whether the credit card is valid, and if not, what the error is 

// ```
// { valid: true, number: 'a923-3211-9c01-1112' } 
// { valid: false, number: 'a923-3211-9c01-1112', error: ‘wrong_length’ }
// ```

const validateCreditCardShowError = function (creditCardNumber) {
    const creditNumberValid = creditCardNumber.replaceAll(`-`, ``); //returns a string with the chosen characters (`-`) eliminated (as specified in the second parameter)
    const creditNumberValidIntoArray = Array.from(creditNumberValid); //convert string into array

    let diffNumberStore = creditNumberValid[0]; //set new variable to first element to be used in later for loop and prevent unwanted true return
    let isLongEnough = true;
    let isValid = true;
    let isUnique = false;
    let isEven = false;
    let totalOfNumbers = 0;

    if (creditNumberValidIntoArray.length < 16) {
        isLongEnough = false;
    }

    for (let i = 0; i < creditNumberValidIntoArray.length; i++) { //loop through converted array
        const currentElement = creditNumberValidIntoArray[i]
        if (isNaN(currentElement)) { //start with true boolean first as you might set isValid to true accidently if checking that the number = true
            isValid = false;
        }

        if (currentElement !== diffNumberStore) { //if number is different from the current number to check again, then set isUnique to true
            diffNumberStore = currentElement;
            isUnique = true; 
        }

        totalOfNumbers += parseInt(currentElement); //convert element to int and add to total to be checked later
    }

    if (creditNumberValidIntoArray[creditNumberValidIntoArray.length - 1] % 2) { //if last element is not divisble by 2, set isEven to false, else true
        //cLog((creditNumberValidIntoArray[creditNumberValidIntoArray.length - 1] % 2)); //test of result
        isEven = false;
    } 
    else {
        isEven = true;
    }

    const overallValid = false; //create a new boolean that checks all previous valid checks at once

    if (isValid && isLongEnough && isUnique && isEven) {
        overallValid = true;
    }

    const outputObject = {
        valid: overallValid, //IA ATTENTION!!! Is this bad idea?
        message: function () {
            const listOfErrors = []; //create list of errors to return

            if (!overallValid) {
                if (!isValid) {
                    listOfErrors.push(`Error: Special characters not allowed...`);
                }
                if (!isLongEnough) {
                    listOfErrors.push(`Error: Card number is not long enough...`);
                }
                if (!isUnique) {
                    listOfErrors.push(`Error: Card cannot contain all the same numbers...`);
                }
                if (!isEven) {
                    listOfErrors.push(`Error: Card may not end in odd number...`);
                }
            }
            else {
                listOfErrors.push(`Card is valid!`);
            }

            return listOfErrors.join(`\n`); //return list of errors separated on different lines
        }
    }
    return outputObject;
}

cLog(`\n\nCredit Card Object Output`);

const testCard = `1111-1111-1111-11`; //test string
const testObject = validateCreditCardShowError(testCard);

cLog(`Valid: ${ testObject.valid } \n${ testObject.message()}`);

// *Double Bonus*: Make your credit card scheme even more advanced! What are the rules, and what are some numbers that pass or fail? Ideas: check expiration date! Check out the Luhn Algorithm for inspiration.