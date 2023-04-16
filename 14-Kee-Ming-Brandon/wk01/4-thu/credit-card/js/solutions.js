// # Credit Card Validation

// create sub-functions
const sumOfArray = ( array ) => {
    let sum = 0;
    for ( let i = 0; i < array.length; i++ ) {
        sum += array[ i ];
    }
    return sum;
};

const allSameDigits = ( array ) => {
    for ( let i = 1; i < array.length; i++ ) {
        if ( array[ i ] !== array[ 0 ] ) {                  // at least one digit is different
            return false;
        }
    }
    return true;
};

const getResult = ( isValid, character , errorMsg ) => {
    const result = {
        valid: isValid,
        number: character
    };
    isValid ? result : result.error = errorMsg;              // **** Any suggestion on what to do if 'true' expression is do nothing?
    return result;
}

// Main function
// You're starting your own credit card business. You've come up with a new way to validate credit cards with a simple function called validateCreditCard that returns true or false.
const validateCreditCard = ( character ) => {
    let pureNumb = [];
    for ( let i = 0; i < character.length; i++ ) {
        const digit = Number( character[ i ] );
        isNaN( character[ i ] ) ? null : pureNumb.push( digit );           // remove NaN character and make the rest a number
    }
    
    //## solution without bonus part##
    // return pureNumb.length !== 16 ? false                               // if it is not 16 digit
    //     : pureNumb[ 15 ] % 2 !== 0 ? false                              // if the final digit is not even
    //     : allSameDigits( pureNumb ) ? false                             // if the sum of all the digits smaller or equal to 16
    //     : sumOfArray( pureNumb ) <= 16 ? false                          // if the digits are all the same
    //     : true;
    //## solution without bonus part##
    
    // *Bonus*: Return an object indicating whether the credit card is valid, and if not, what the error is 
    return pureNumb.length !== 16 ? getResult( false, character , "invalid character")
        : pureNumb[ 15 ] % 2 !== 0 ? getResult( false, character , "odd final number")
        : allSameDigits( pureNumb ) ? getResult( false, character , "only one type of number")
        : sumOfArray( pureNumb ) <= 16 ? getResult( false, character , "sum less than 16")
        : getResult( true, character  );
}
// Execution
// The following credit card numbers are valid:
console.log( validateCreditCard( '9999-9999-8888-0000' ) );            // Returns: true
console.log( validateCreditCard( '6666-6666-6666-1666' ) );            // Returns: true
console.log( validateCreditCard( '9999-9999-8888-0000' ) );            // Returns: true

// The following credit card numbers are invalid:
console.log( validateCreditCard( 'a923-3211-9c01-1112' ) );            // a923-3211-9c01-1112 invalid characters
console.log( validateCreditCard( '4444-4444-4444-4444' ) );            // 4444-4444-4444-4444 only one type of number
console.log( validateCreditCard( '1111-1111-1111-1110' ) );            // 1111-1111-1111-1110 sum less than 16
console.log( validateCreditCard( '6666-6666-6666-6661' ) );            // 6666-6666-6666-6661 odd final number

// Below not yet complete
// *Double Bonus*: Make your credit card scheme even more advanced! What are the rules, and what are some numbers that pass or fail? Ideas: check expiration date! Check out the Luhn Algorithm for inspiration.

// Main function
// You're starting your own credit card business. You've come up with a new way to validate credit cards with a simple function called validateCreditCard that returns true or false.
// const getResultWithDate = ( isValid, character , errorMsg ) => {
//     const result = {
//         valid: isValid,
//         number: character
//     };
//     isValid ? result : result.error = errorMsg;              // **** Any suggestion on what to do if 'true' expression is do nothing?
//     return result;
// }

// const validateCreditCardWithDate = ( info ) => {
//     let pureDigit = [];
//     let pureDate = [];
//     let result = [];
//     for ( let i = 0; i < info[ 0 ].length; i++ ) {
//         const digit = Number( info[ 0 ][ i ] );
//         console.log(info[ 0 ].length);
//         isNaN( info[ 0 ][ i ] ) ? null : pureDigit.push( digit );           // remove NaN character and make the rest a number
//     }
//     for ( let i = 0; i < info[ 1 ].length; i++ ) {
//         const digit2 = Number( info[ 1 ][ i ] );
//         isNaN( info[ 1 ][ i ] ) ? null : pureDate.push( digit2 );           // remove NaN character and make the rest a number
//     }
//     console.log( pureDigit );
    
//     // *Bonus*: Return an object indicating whether the credit card is valid, and if not, what the error is 
//     return pureDigit[ 0 ].length !== 16 ? getResultWithDate( false, character , "invalid character")
//         : pureDigit[ 0 ][ 15 ] % 2 !== 0 ? getResultWithDate( false, character , "odd final number")
//         : allSameDigits( pureDigit[ 0 ] ) ? getResultWithDate( false, character , "only one type of number")
//         : sumOfArray( pureDigit[ 0 ] ) <= 16 ? getResultWithDate( false, character , "sum less than 16")
//         : getResultWithDate( true, character  );

//     pureDigit[ 1 ].length < 3 && pureDigit[ 1 ].length > 4 ? getResultWithDate( false, character , "invalid character in date")
//         : pureDigit[ 1 ].length === 3 ;
// }

// // The following credit card numbers are valid:
// console.log( validateCreditCardWithDate( '9999-9999-8888-0000', '12/23' ) );            // Returns: true
// console.log( validateCreditCardWithDate( '6666-6666-6666-1666', '01/28' ) );            // Returns: true
// console.log( validateCreditCardWithDate( '9999-9999-8888-0000', '8/25' ) );            // Returns: true

// // The following credit card numbers are invalid:
// console.log( validateCreditCardWithDate( 'a923-3211-9c01-1112', '01/28' ) );            // a923-3211-9c01-1112 invalid characters
// console.log( validateCreditCardWithDate( '4444-4444-4444-4444', '01/28' ) );            // 4444-4444-4444-4444 only one type of number
// console.log( validateCreditCardWithDate( '1111-1111-1111-1110', '01/28' ) );            // 1111-1111-1111-1110 sum less than 16
// console.log( validateCreditCardWithDate( '6666-6666-6666-6661', '01/28' ) );            // 6666-6666-6666-6661 odd final number