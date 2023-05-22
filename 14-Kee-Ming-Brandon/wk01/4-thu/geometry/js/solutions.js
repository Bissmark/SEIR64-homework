// # Geometry Function Lab

// ### Part 1, Rectangle
// Given the following a `rectangle` object like the one below, write the following functions which accept a `rectangle` object as an argument:
const isSquare = ( rectangle ) => {
    return rectangle.length === rectangle.width;
};
const area = ( rectangle ) => {
    return rectangle.length * rectangle.width;
};
const perimeter = ( rectangle ) => {
    return rectangle.length * 2 + rectangle.width * 2;
};

// Input
const rectangleA = {
  length: 4,
  width: 10
};

// Execution
console.log( `If a rectangle has a length of ${ rectangleA.length } and a width of ${ rectangleA.width }` );
console.log( `The rectangle is a square: ${ isSquare( rectangleA ) }.` );
console.log( `The rectangle's area is ${ area( rectangleA ) }.`);
console.log( `The rectangle perimeter is ${ perimeter( rectangleA ) }.` );




// ### Part 2, Triangle
// Given the following a `triangle` object like the one below, write the following functions which accept a `triangle` object as an argument:
const isEquilateral = ( triangle ) => {
    return triangle.sideA === triangle.sideB && triangle.sideB === triangle.sideC;
 };
const isIsosceles = ( triangle ) => {
    return triangle.sideA === triangle.sideB || triangle.sideA === triangle.sideC || triangle.sideB === triangle.sideC; 
};
const area2 = ( triangle ) => {
    const s = ( triangle.sideA + triangle.sideB + triangle.sideC ) / 2;                                         // half of the triangles perimeter
    return Math.sqrt( s * ( s - triangle.sideA ) * ( s - triangle.sideB)  * ( s - triangle.sideC ) );           // sqrt of s(s-x)(s-y(s-z)
};
const isObtuse = ( triangle ) => {
    return ( ( triangle.sideA ** 2 > ( triangle.sideB ** 2 + triangle.sideC ** 2 ) ) || ( triangle.sideB ** 2 > ( triangle.sideA ** 2 + triangle.sideC ** 2 ) ) || ( triangle.sideC ** 2 > ( triangle.sideA ** 2 + triangle.sideB ** 2 ) ) );                                                                              // x^2 > y^2 + z^2
};

// Input
const triangleA = {
    sideA: 5,           // try 6 for Obtuse triangle
    sideB: 4,
    sideC: 4
};

// Execution
console.log( `If a triangle has sides with length of ${ triangleA.sideA }, ${ triangleA.sideB } and ${ triangleA.sideC }.` );
console.log( `The triangle is equilateral: ${ isEquilateral( triangleA ) }.`);
console.log( `The triangle is isosceles: ${ isIsosceles( triangleA ) }.`);
console.log( `The triangle's area is ${ area2( triangleA ) }.`);
console.log( `The triangle is obtuse: ${ isObtuse( triangleA ) }.`);
