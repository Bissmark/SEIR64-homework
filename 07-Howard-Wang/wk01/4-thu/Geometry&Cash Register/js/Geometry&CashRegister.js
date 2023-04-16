
//Part 1, Rectangle
const rectangleA = {
  length: 4,
  width: 5
};
function isSquare (rectangleA) {
    if (rectangleA.length === rectangleA.width) {
        return true
    }return false
}
function area (rectangleA) {
    result = rectangleA.length * rectangleA.width;
    return result
}
function perimeter (rectangleA) {
    result = (rectangleA.length + rectangleA.width) * 2
    return result
}

//Part 2, Triangle
const triangleA = {
    sideA: 5,
    sideB: 5,
    sideC: 5
};
function isEquilateral (triangleA) {
    if (triangleA.sideA === triangleA.sideB && triangleA.sideA === triangleA.sideC) {
        return true
    }return false
}
function isIsosceles (triangleA) {
    if (triangleA.sideA === triangleA.sideB || triangleA.sideA === triangleA.sideC || triangleA.sideB === triangleA.sideC) {
        return true
    }return false
}
function areaT (triangleA) {
    let num = (triangleA.sideA + triangleA.sideB + triangleA.sideC)/2
    result = (Math.pow((num * (num - triangleA.sideA) * (num - triangleA.sideB) * (num - triangleA.sideC)),0.5))
    return result 
}
function isObtuse (triangleA) {
    if (triangleA.sideA > triangleA.sideB && triangleA.sideA > triangleA.sideC && Math.pow(triangleA.sideA,2) > (Math.pow(triangleA.sideB,2) + Math.pow(triangleA.sideC,2))) {
        return true
    } else if (triangleA.sideB > triangleA.sideA && triangleA.sideB > triangleA.sideC && Math.pow(triangleA.sideB,2) > (Math.pow(triangleA.sideA,2) + Math.pow(triangleA.sideC,2))) {
        return true 
    } else if (triangleA.sideC > triangleA.sideA && triangleA.sideC > triangleA.sideB && Math.pow(triangleA.sideC,2) > (Math.pow(triangleA.sideA,2) + Math.pow(triangleA.sideB,2))) {
        return true
    } return false
}

//The Cash Register
const cartForParty = {  
    banana: "1.25",
    handkerchief: ".99",
    Tshirt: "25.01",
    apple: "0.60",
    nalgene: "10.34",
    proteinShake: "22.36"
}
function cashRegister(cartForParty) {
    let sum = 0;
    for (let x in cartForParty) {
            sum += parseFloat(cartForParty[x]);
        } return sum
}

