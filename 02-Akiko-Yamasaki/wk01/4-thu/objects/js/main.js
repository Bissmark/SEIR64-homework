// Given the following a rectangle object like the one below, write the following functions which accept a rectangle object as an argument:
// isSquare - Returns whether the rectangle is a square or not
// area - Returns the area of the rectangle
// perimeter - Returns the perimeter of the rectangle

const rectangleA = {
    length: 4,
    width: 4
  };
  const rectangleB = {
    length: 7,
    width: 4
  };

// not working
  const isItSquare = function(rectangle){
    const length = rectangle.length;
    const width = rectangle.width;    
    let square = true; 
    if (length === width ){
        // square = true;
    }
    else {
        square = false;
    }
  };
  console.log(isItSquare( rectangleB ));

const areaOf = function(rectangle){
    const length = rectangle.length;
    const width = rectangle.width;
    const area = length * width;
    return area
}
console.log(areaOf(rectangleA));
console.log(areaOf(rectangleB));

const perimeterOf  = function (rectangle) {
    const length = rectangle.length;
    const width = rectangle.width;
    const perimeter = (length + width) * 2;
    return perimeter; 
}
console.log(perimeterOf(rectangleA));
console.log(perimeterOf(rectangleB));

// Given the following a triangle object like the one below, write the following functions which accept a triangle object as an argument:

// isEquilateral - Returns whether the triangle is equilateral or not
// isIsosceles - Returns whether the triangle is isosceles or not
// area - Returns the area of the Triangle 
// isObtuse - Returns whether the triangle is obtuse or not

const triangleA = {
    sideA: 3,
    sideB: 4,
    sideC: 4
  };
  const triangleB = {
    sideA: 11,
    sideB: 11,
    sideC: 11
  };

 const triangleC = {
        sideA: 11,
        sideB: 33,
        sideC: 11
      };
  

  const equilateral = function (triangle) {
    const a = triangle.sideA;
    const b = triangle.sideB;
    const c = triangle.sideC;
    if(a === b || a === c){
        
        return true;
    }
    else{
        return false;
    }

  }
  console.log(equilateral(triangleA));
  console.log(equilateral(triangleB));

  const isosceles = function (triangle) {
    const a = triangle.sideA;
    const b = triangle.sideB;
    const c = triangle.sideC;
    if(a === b && a === c && c === b){
        return false;
    }
    else{
        return true;
    }
}
console.log(isosceles(triangleA));
console.log(isosceles(triangleB));


const area = function (triangle){
    const a = triangle.sideA;
    const b = triangle.sideB;
    const c = triangle.sideC;
    const s = (a + b + c) / 2;
    return Math.sqrt(s * (s-a) * (s - b) * (s - c));
}
console.log(area(triangleA));
console.log(area(triangleB));

// google has not told me how to find out the angle in plain English.
// const obtuse = function (triangle){
//     const a = triangle.sideA;
//     const b = triangle.sideB;
//     const c = triangle.sideC;
//     const cosA = Math.cos(a);
//     const cosB = Math.cos(b);
//     const cosC = Math.cos(c);
//     const yes ="yes it is an obtus"
//     const no = "no it is not an obtus"
//     if(cosA > 90 || cosB > 90 || cosC  > 90){
//         console.log(yes);
//     }
//     else{
//         console.log(no);
//     }

// console.log(obtuse(triangleA));

// }
// Write a function called cashRegister that takes a shopping cart object. The object contains item names and prices (itemName: itemPrice). The function should return the total price of the shopping cart. Example

//not working, total is not adding up
cartForParty = {  
  banana: "1.25",
  handkerchief: ".99",
  Tshirt: "25.01",
  apple: "0.60",
  nalgene: "10.34",
  proteinShake: "22.36"
};
cartForParty = {  
  banana: "1.25",
  handkerchief: ".99",
  Tshirt: "25.01",
  apple: "0.60",
  nalgene: "10.34",
  proteinShake: "22.36"
};
cartForParty = {  
    banana: "1.25",
    handkerchief: ".99",
    Tshirt: "25.01",
    apple: "0.60",
    nalgene: "10.34",
    proteinShake: "22.36"
  };

const buyThings = {
    Mobile: "224.5",
    Dreams : "187.5",
    catsong: "212",
    going: "11",
    mountain : "21",
}
const cashRegister = function(price) { 
    let total = " ";
    for (let i=0; i < price.length; i++){
        let cost = Object.keys(price);
        const dollar = Number.parseFloat(cost)
        total = total + dollar;
    }
    return total;
}
console.log(cashRegister(cartForParty));


// Number must be 16 digits, all of them must be numbers
// You must have at least two different digits represented (all of the digits cannot be the same)
// The final digit must be even
// The sum of all the digits must be greater than 16

//not completed, some conditional logics only
const validateCreditCart = function(creditNumber){  
    let isNumber = !isNaN(creditNumber);  
    
    return isNumber
}

if (creditNumber.length-1 % 2 !== 0){
    return false;
}
if (creditNumber.length <= 16){
    return false;
}

console.log(`should return true: ${validateCreditCard('9999999988880000')}`);  // true


// There is only one bank. This bank has an array of accounts. The bank needs a method that will return the total sum of money in the accounts. It also needs an addAccount method that will enroll a new account at the bank and add it to the array of accounts. There is no need to create additional functions of the bank to delete accounts, etc.

// The bank has many accounts. Accounts should be objects that all share a set of common functionality

// Accounts have a current balance and owner's name. You should be able to deposit or withdraw from an account to change the balance.

// There is no need to write a user interface. Make sure functions return values -- you may also have your functions console.log() values to help you see your code working.

// You should write a basic story through a series of JavaScript commands that shows that the methods do indeed work as expected: add some accounts, show the total balance, make some deposits and withdrawals, show the new total balance


let account1 ={
    name: elro worlf,
    currentBalance: 4441
}
// function to find current sum in each account
const sums = function (dollar){
    
    for (let i=0; i < price.length; i++){
        // current balance - get the currentbalance from object
        let balance = Object.values(); //? how to get a particular value from object?
q       //deposit amount

        deposit
    //withdraw amount

    //current sum
}
//track record of new accounts to be put into an array
const addAcount = function (new){
    
}
