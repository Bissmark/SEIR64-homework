// Rectangle
const isSquare = (rect) => {
    if (rect.length === rect. width) {
        return "is square";
    }
    return "not square";
}

const areaRectangle = (rect) => {
    let area = rect.width * rect.length;
    return area; 
}

const perimRectangle = (rect) => {
    let perimeter = 2 * (rect.width + rect.length);
    return perimeter;
}

const rectOne = { length: 3, width: 3 }; 
const rectTwo = { length: 1, width: 3 }; 
const rectThree = { length: 2, width: 4 }; 

console.log(isSquare(rectOne));
console.log(isSquare(rectThree));
console.log(areaRectangle(rectOne));
console.log(areaRectangle(rectTwo));
console.log(perimRectangle(rectThree));


// Triangles 
const isEquilateral = (triangle) => {
    if (triangle.sideA === triangle.sideB && 
        triangle.sideB === triangle.sideC) {
            return "is Equilateral"; 
    }
    return "not Equilateral";
}

const isIsosceles = (tri) => {
    const sideA = tri.sideA;
    const sideB = tri.sideB;
    const sideC = tri.sideC;

    if ((sideA === sideB && sideA != sideC) ||
        (sideB === sideC && sideB != sideA) || 
        (sideC === sideA && sideC != sideB) ) {
            return "is Isosceles";
        }
    return "not Isosceles";
}

const areaTriangle = (tri) => {
    const sideA = tri.sideA;
    const sideB = tri.sideB;
    const sideC = tri.sideC;

    const s = (sideA + sideB + sideC) / 2;
    let area = Math.sqrt(s * (s - sideA) * (s - sideB) * (s - sideC));

    return area;
}

const isObtuse = () => {
    // i give up
}

const triA = {
    sideA: 4,
    sideB: 1,
    sideC: 4
}

console.log(isEquilateral(triA));
console.log(isIsosceles(triA));
console.log(areaTriangle(triA));

// Cash register
const cashRegister = (cart) => {
    let total = 0;
    for (const [key, value] of Object.entries(cart)) {
        total += value;
    }
    return total;
}

const cartForParty = {  
    banana: 1.25,
    handkerchief: .99,
    Tshirt: 25.01,
    apple: 0.60,
    nalgene: 10.34,
    proteinShake: 22.36
};

console.log(cashRegister(cartForParty));

// Credit card Validation 
const validateCreditCard = (num) => {

    const stringNum = num.toString().replaceAll("-", "");
    console.log(stringNum);
    const numLength = stringNum.length;
    let identical = true;
    let digitTotal = 0;

    if (numLength != 16) {
        return { valid: false, number: num, error: "wrong length"};
    }

    for (let i = 1; i < numLength; i++) {
        if (stringNum[0] != stringNum[i]) {
            identical = false;
            break;
        }
    }
    if (identical) {
        return { valid: false, number: num, error: "only one type of number"};
    }

    if (parseInt(stringNum[15]) % 2 != 0) {
        return { valid: false, number: num, error: "last number is odd"};
    }

    for (let i = 0; i < numLength; i++) {
        digitTotal += parseInt(stringNum[i]);
    }

    if (digitTotal <= 16) {
        return { valid: false, number: num, error: "total of numbers less than 16"};
    }

    return { valid: true, number: num};

}


console.log(validateCreditCard("9999-9999-8888-0000"));


// Javascript Bank
const bank = {
    accounts: [],
    addAccount: function(accName, amount) {
        this.accounts.push({name: accName, balance: amount});     // why dont arrow functions work?
    },
    deposit: function(accName, amount) {
        const arr = this.accounts;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].name === accName) {
                arr[i].balance += amount;
            }
        }
    },
    transfer: function(fromName, toName, amount) {
        const arr = this.accounts;
        let fromIndex;
        let toIndex;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].name === fromName) {
                fromIndex = i;
            }
            if (arr[i].name === toName) {
                toIndex = i;
            }
        }

        arr[fromIndex].balance -= amount;
        arr[toIndex].balance += amount; 
        
    }
}

bank.addAccount("joe", 20);
console.log(bank.accounts); //why does this come out with 2020 for amount?
bank.deposit("joe", 2000); 
console.log(bank.accounts);
bank.addAccount("bob", 2);
bank.transfer("joe", "bob", 800);
console.log(bank.accounts);



