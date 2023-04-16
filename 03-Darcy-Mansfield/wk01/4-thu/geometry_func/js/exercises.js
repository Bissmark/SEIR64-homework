

// Part 1 Rectangle

const rectangleA = {
    length: 4,
    width: 6
};

const isSquare = function(rectangle) {
    if (rectangle.length === rectangle.width) {
        console.log(`This rectangle is a square, fool.`);
    } else {
        console.log(`Get Rekt-angled.`);
    }
};

const area = function(rectangle) {
    console.log(`The area of this rectangle is ${rectangle.length * rectangle.width} square units.`)
};

const perimeter = function(rectangle) {
    console.log(`The perimeter of this rectangle is ${2 * rectangle.length + 2 * rectangle.width} arbitrary units.`)
};

isSquare(rectangleA);
area(rectangleA);
perimeter(rectangleA);


// Part 2 Triangle

const triangleA = {
    sideA: 4,
    sideB: 6,
    sideC: 3
};

const isEquilateral = function(tri) {
    if (tri.sideA === tri.sideB && tri.sideA === tri.sideC) {
        console.log(`This triangle is an equilateral triangle.`);
    } else {
        console.log(`This triangle isn't an equilateral triangle.`);
    }
}

const isIsosceles = function(tri) {
    if (tri.sideA === tri.sideB || tri.sideA === tri.sideC || tri.sideB === tri.sideC) {
        console.log(`This triangle is an isosceles triangle.`)
    } else {
        console.log(`This triangle isn't an isosceles triangle.`)
    }
}

const triArea = function(tri) {
    triS = (tri.sideA + tri.sideB + tri.sideC) / 2;
    triA = Math.sqrt(triS * (triS - tri.sideA) * (triS - tri.sideB) * (triS - tri.sideC));
    console.log(`The area of the circle is ${triA} square units`)
}

const isObtuse = function(tri) {
    let triArray = Object.values(tri);
    let triMax = Math.max(...triArray);
    let triMaxPos = triArray.indexOf(triMax);
    let triRemove = triArray.splice(triMaxPos, 1);
    if (Math.pow(triMax, 2) > (Math.pow(triArray[0], 2) + Math.pow(triArray[1], 2))) {
        console.log(`This triangle is obtuse.`);
    } else {
        console.log(`This triangle is acute.`);
    }
}


isEquilateral(triangleA);
isIsosceles(triangleA);
triArea(triangleA);
isObtuse(triangleA);