// Credit Card Validation

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


const allEquals = function (char) {
    const charSplit = char.toString().split("");
    const equal = charSplit.every(val => val === charSplit[0])
    return equal
}
// console.log(allEquals(5554))

const sumArr = function (arr) {
    const num = arr.toString().split("").map(Number)
    let sum = 0;
    for (let i = 0; i < num.length; i++) {
        sum = sum + num[i];
    }
    return sum
}

// console.log(sumArr("9998"))


const validateCreditCard = function (num) {
    let statement;
    if (num === Number(num)) {

        if (num.toString().length === 16) {

            if (!allEquals(num)) {

                if (num.toString().slice(-1) % 2 === 0) {

                    if (sumArr(num) > 16) {
                        
                        return true // Remaining condition - card no. must have atleast 2 different digits
                        
                    } else {
                        statement = `Choose higher digits`
                    }


                } else if (num.toString().slice(-1) % 2 !== 0) {
                    statement = `Your last digit should be even`
                }


            } else {
                statement = `You must have at least two different digits`
            }


        } else {
            statement = `Please enter 16 digits numbers only`

        }


    } else if (num !== Number(num)) {
        statement = `Please enter valid NUMBERS only. ${num} is not all number`
    }

    return statement
}

console.log(validateCreditCard(1111000011119000))
console.log(validateCreditCard(4444444444444444))
console.log(validateCreditCard(1111111111111110))
console.log(validateCreditCard(6666666666666661))
console.log(validateCreditCard("a92332119c011112"))








/*
//didn't works for this solution: may come handy in future
 const checkCharRepeat = function (char) {
     const toString = char.toString();
     const storeChar = new Set(toString); //new Set to store unique values
    
     //.size is a property of new Set which returns the number of (unique) elements in a Set object
     if (toString.length !== storeChar.size) { 

         return storeChar
     } else {

         return storeChar.join("")
     }

 }
 //returns duplicates but not the first character
 const findDuplicate = function (str) {
     const strSplit = str.toString().split("");
     const duplicate = strSplit.filter((item, index) => strSplit.indexOf(item) !== index)
     return duplicate.join("")
 
 }
 console.log(findDuplicate(99999))
console.log(checkCharRepeat())
*/