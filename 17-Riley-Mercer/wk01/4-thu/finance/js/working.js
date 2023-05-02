// for loop - cash register

const cartObj = {
    one: 1,
    two: 10,
    three: 90,
    seven: 1
}

const cashReg = function(cartObj){
const cashVals = Object.values(cartObj)
let total = 0
    for (a = 0; a < cashVals.length; a++){
        total += cashVals[a];
    }
    return `Your total is $${total}. Have a good day!`
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Credit Card Validation

// I would stick "validateCreditCard(cardString)" in the console and watch it do it's thing.
// I note that the instructions in the homework state to return the information as an object. I've not done this as I don't think it looks as nice.
// But, hypothetically, I would declare an empty object at the start, then add the number, then add the error message as required.


const cardString = "1111-2222-3333-4444" // card string to check

const  setCheck = function(toCheck) { // function to check number of unique values
    return new Set(toCheck).size;
}

const sumArray = function(arryay){ // function to check all values sum < 16
let sumCheck = 0;
    for (c = 0; c < arryay.length; c++){
        sumCheck = sumCheck + arryay[c];
    }   return sumCheck
}

const validateCreditCard = function(numberString){ // this is the main function
const cardArray = [];
    for (b=0; b < numberString.length; b++){
        if (numberString[b] !== "-"){
        cardArray.push(parseInt(numberString[b]))};
        }   if (cardArray.length !== 16){
            return `${cardString} is invalid. It is the wrong length.`
        }   if (cardArray.every(isFinite) === false){
            return `${cardString} is invalid. It contains non-numbers.`
        }   if (setCheck(cardArray) <= 1) {
            return `${cardString} is invalid. It does not have enough unique characters.`
        }   if ((cardArray[cardArray.length-1] % 2) != 0){
            return `${cardString} is invalid. The last digit is not even.`
        }   if (sumArray(cardArray) < 16){
            return `${cardString} is invalid. It does not sum higher than 16.`
        }   else {
            return `${cardString} is a valid credit card number!`
        } 
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// The Bank Scenario

// I was going to do this here, but made another folder to keep it clean.

