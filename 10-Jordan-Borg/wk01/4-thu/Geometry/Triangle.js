// const triangleA = {
//     sideA: 3,
//     sideB: 4,
//     sideC: 4
//   };

const isTriangle = function (object) {
    if (object.length === object.width === object.depth) {
        return true
    } else {
        return false
    }
}

const triangleA = {
    sideA: 4,
    sideB: 4,
    sideC: 4
};

// const 


console.log(isTriangle(triangleA));

