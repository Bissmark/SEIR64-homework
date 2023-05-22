console.log('Thursday night homework');

console.log('\nPart 1. Rectangle');

const rectangleA = {
    length: 4,
    width: 4
  };

const isSquare = function (rectangle) {
    if (rectangle.length === rectangle.width) {
        console.log('Is square.')
    } else {
        console.log('Is NOT square.')
    }
};

const area = function (rectangle) {
    console.log(`Area: ${rectangle.length * rectangle.width}`);
};

const perimeter = function (rectangle) {
    console.log(`Perimeter: ${(rectangle.length + rectangle.width) * 2}`)
};

isSquare(rectangleA);
area(rectangleA);
perimeter(rectangleA)

console.log('\nPart 2. Triangle');

const triangleA = {
    sideA: 3,
    sideB: 4,
    sideC: 4,
  };

const isEquilateral = function (triangle) {
    if (triangle.sideA === triangle.sideB && triangle.sideA === triangle.sideC) {
        console.log('Is Equilateral.')
    } else {
        console.log('Is NOT Equilateral.')
    }
};

const isIsosceles = function (triangle) {
    if (triangle.sideA === triangle.sideB && triangle.sideA !== triangle.sideC) {
        console.log('Is Isosceles.')
    } else if (triangle.sideB === triangle.sideC && triangle.sideB !== triangle.sideA) {
        console.log('Is Isosceles.')
    } else if (triangle.sideC === triangle.sideA && triangle.sideC !== triangle.sideB) {
            console.log('Is Isosceles.')
    } else {
        console.log('Is NOT Isosceles.')
    }
};

const areaOfTri = function (triangle) {
    const sideA = triangle.sideA;
    const sideB = triangle.sideB;
    const sideC = triangle.sideC;
    const semiPerimeter = 0.5 * (sideA + sideB + sideC);
    const area = Math.sqrt(semiPerimeter * (semiPerimeter - sideA) * (semiPerimeter - sideB) * (semiPerimeter - sideC))
    console.log(`Area: ${area}`)
  };

// This feels overcoded, but it works :'D I'm not great with triangles.

const isObtuse = function (triangle) {
    const sideA = triangle.sideA;
    const sideB = triangle.sideB;
    const sideC = triangle.sideC;
    let smallSideA = 0;
    let smallSideB = 0;
    let longestSide = 0;
    if (sideA > sideB && sideA > sideC) {
        longestSide = sideA;
        smallSideA = sideB;
        smallSideB = sideC;
    } else if (sideB > sideA && sideB > sideC) {
        longestSide = sideB;
        smallSideA = sideA;
        smallSideB = sideC;
    } else if (sideC > sideA && sideC > sideB) {
        longestSide = sideC;
        smallSideA = sideB;
        smallSideB = sideA;
    };
    if (smallSideA * smallSideA + smallSideB * smallSideB < longestSide * longestSide) {
        console.log('Is obtuse');
    } else {
        console.log('Not obtuse');
    };
};

isEquilateral(triangleA);
isIsosceles(triangleA);
areaOfTri(triangleA);
isObtuse(triangleA);

console.log('\nThe Cash Register');

// # The Cash Register

const shoppingCart = {
    milk: "5",
    bread: "10",
    jellybeans: "20.99",
    orangeJuice: "5.50",
    apple: "0.60",
    tShirt: "25.01",
    hat: "50.99"
};

const cashRegister = function (cart) {
    let total = 0;
    let numbersArray = Object.values(cart);
    for ( let i = 0; i < numbersArray.length; i++ ) {
        total = Number(numbersArray[i]) + total;
    }
    console.log(`Total comes to: $${total}`)
}

cashRegister(shoppingCart);


console.log('\nCredit Card Validation');


const validateCreditCard = function (cardNum) {
    const atm = {
        valid: true,
        error: '',
    };
    
    let result = '';
    let numbArray = [];
    let sumOfNums = 0;
    let newCardNum = cardNum.replaceAll('-','');

    if (newCardNum.length !== 16) {
        atm.error = "Incorrect number of digits!";
        atm.valid = false;
    };

    if (!(/^[0-9]+$/.test(newCardNum))) {
        atm.error = "Invalid input!";
        atm.valid = false;
    };

    if (newCardNum.replaceAll(newCardNum[0], 'X') === 'XXXXXXXXXXXXXXXX') {
        atm.error = "All digits are the same!";
        atm.valid = false;
    };

    if (newCardNum[15] % 2 !== 0) {
        atm.error = "Invalid final number!";
        atm.valid = false;
    };

    for ( let i = 0; i < newCardNum.length; i ++ ) {
        numbArray.push(Number(newCardNum[i]))
        sumOfNums += numbArray[i];
        };
    
    if (sumOfNums <= 16) {
        atm.error = "Invalid sum of numbers!";
        atm.valid = false;
    };

    console.log(atm)

};

validateCreditCard('2646-6616-6666-46652')
validateCreditCard('2646-6616-6A66-4662')
validateCreditCard('6666-6666-6666-6666')
validateCreditCard('6666-6666-6666-6661')
validateCreditCard('1111-1111-1111-1100')


console.log('\nJavaScript Bank');

const getBalance = function (bankObject) {
    let totalSum = 0;
    for ( let i = 0; i < bankObject.length; i ++) {
        totalSum += bankObject[i].bankbalance;
    };
    return totalSum
};

const addAccount = function (bank, name, deposit) {
    bank[bank.length] = {ownersname: name,
                        bankbalance: deposit
                        }
};

const bankAccounts = [
    {
        ownersname: 'Bob Bobbo',
        bankbalance: 2000,
    } ,
    {
        ownersname: 'Dan Danson',
        bankbalance: 5726,
    } ,
    {
        ownersname: 'Chris Jackosn',
        bankbalance: 455,
    } ,
    {
        ownersname: 'Tali Grimus',
        bankbalance: 200,
    } ,
    {
        ownersname: 'Fiona Hackley',
        bankbalance: 4900,
    } 
];


console.log(getBalance(bankAccounts))
console.log(addAccount(bankAccounts, "Adam Shuvalov", 1000))
console.log(addAccount(bankAccounts, "Tim Rothom", 250))
console.log(addAccount(bankAccounts, "Jen Daniels", 4700))
console.log(bankAccounts)
console.log(getBalance(bankAccounts))