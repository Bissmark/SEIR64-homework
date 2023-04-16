// # Credit Card Validation
// UPDATED

// You're starting your own credit card business. You've come up with a new way to validate credit cards with a simple function called validateCreditCard that returns true or false.
// *Hint*: Remove the dashed from the input string before checking if the input credit card number is valid.

// console.log(removeDash(`9999-9999-8888-0000`)); //testing removeDash function output is 9999999988880000

// Here are the rules for a valid number:

// - Number must be 16 digits, all of them must be numbers

// console.log(is16Digits('99999999888800001')) // result is false

// - You must have at least two different digits represented (all of the digits cannot be the same)

// console.log(isUnique('9999999988880000')); // returns true

// - The sum of all the digits must be greater than 16

const sumIs16Plus = function ( creditCard ) {
    let count = 0;
    for ( i = 0; i < creditCard.length; i++ ) {
        const a = parseInt(creditCard[i]);
        count+= a;
    }
    if ( count > 16 ) {
        return true;
    } else {
        return false;
    }
}

// sumIs16Plus('9999999988880000');

const underTen = function ( num ) {
    if ( num > 10 ) { // if over 10 get the sum of the 2 numbers
        const num1 = num.toString(); // change the number to string to iterate
        let sum = 0; 
        for ( i = 0; i < num1.length; i++ ) {
            sum += parseInt(num1[i])
        }
        return sum;
    } else {
        return num;
    }
}

// console.log(underTen(11)); // 2

const luhnCheck = function ( creditCard ) {
    const payload = creditCard.slice(0, ( creditCard.length - 2 )) // string - payload is all numbers except last
    const checkDigit = parseInt(creditCard.slice(-1)); // check digit is the last number of the string

    const payloadMulti = []; // empty array to store manipulated payload 

    // for loop to start from the back and multiply every other number by 2
    for ( let i = payload.length - 1; i >= 0; i -= 2) {
        payloadMulti[i] = underTen(payload[i] * 2);
    }

    // for loop to start 1 index from the back and multiple every other number by 1
    for ( let i = payload.length - 2; i >= 0; i -= 2) {
        payloadMulti[i] = underTen(payload[i] * 1)
    }
    
    let count = 0; // variable to store the sum of elements in payloadMulti

    for ( let i = 0; i < payloadMulti.length; i++ ) {
        count += parseInt(payloadMulti[i]);
    }

    return checkDigit === 10 - ( count % 10 )

}// Luhn
// 9999999988880008 // example string
// 999999998888000  // payload
//                8 // check digit
// 212121212121212  // mulitply by 2 and 1 ; back to front
// 999999997878000  // if > 10 ; use sum of 2 digits e.g 2*9= 18 ; 1 + 8 = 9
// 102              // sum of payload
// 10 -(102 % 10)=8 // formula
// formula = 8 && checkDigit = 8 // pass luhn check.

const validateCreditCard = function ( creditCard ) { // argument is a string
    let testString = creditCard.replaceAll('-','');
    const test1 = sumIs16Plus(testString);
    const test2 = luhnCheck(testString);

    const msg = {
        valid: false,
        number: creditCard,
    }

    if ( testString.length !== 16 ) {
        msg.error = "Incorrect length";
    } else if ( testString.replaceAll(creditCard[0], '') === '' ) {
        msg.error = "Not unique";
    } else if ( testString[ testString.length - 1 ] % 2 !== 0 ) {
        msg.error = "Last digit not even";
    } else if ( !Number.isInteger(parseInt(testString)) ) {
        msg.error = "Contains not integers";
    } else if ( !test1 ) {
        msg.error = "Sum is less than 16";
    } else if ( !test2 ) {
        msg.error = "Did not pass Luhn check";
    } else {
        msg.valid = true;
    }
    return msg;
}

// following credit card is valid
console.log(validateCreditCard(`9999-9999-8888-0008`));

// The following credit card numbers are invalid:
console.log(validateCreditCard(`9999-9999-8888-0000`)); // doesnt pass luhn
console.log(validateCreditCard(`6666-6666-6666-1666`)); // doesnt pass luhn
console.log(validateCreditCard(`a923-3211-9c01-1112`)); // incorrect characters 
console.log(validateCreditCard(`4444-4444-4444-4444`)); // not unique
console.log(validateCreditCard(`1111-1111-1111-1110`)); // not 16
console.log(validateCreditCard(`6666-6666-6666-6661`)); // ends with odd

// ## Example
// ```
// validateCreditCard('9999-9999-8888-0000'); // Returns: true
// ```

// *Bonus*: Return an object indicating whether the credit card is valid, and if not, what the error is 

// ```
// { valid: true, number: 'a923-3211-9c01-1112' } 
// { valid: false, number: 'a923-3211-9c01-1112', error: ‘wrong_length’ }
// ```

// *Double Bonus*: Make your credit card scheme even more advanced! What are the rules, and what are some numbers that pass or fail? Ideas: check expiration date! Check out the Luhn Algorithm for inspiration.



