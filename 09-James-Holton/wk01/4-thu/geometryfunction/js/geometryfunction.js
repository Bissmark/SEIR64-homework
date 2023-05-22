const rectangleA = {
    lengths: 5,
    widths: 4
  };

const isSquare = function(rectangle) {

    let l = rectangleA.lengths;
    let w = rectangleA.widths;
    let a = l * w;
    let p = (l + w) * 2;
    let result = `\nthe perimeter = ${ p } \nthe area = ${ a }`

    if (l === w) {
        return `The rectangle is square ${result}`;
        
    } else {
        return `The rectangle is not square ${result}`;
    }
}

console.log(isSquare());


const triangleA = {
    sideA: 3,
    sideB: 4,
    sideC: 4
  };

  const isTriangle = function(triangle) {

    let l = triangleA.sideA;
    let w = triangleA.sideB;
    let h = triangleA.sideC;
    let sql = l * l;
    let sqw = w * w;
    let sqh = h * h;
    let a = ((l + w + h) / 2);
    let area = Math.sqrt(a * (a - l) * (a - w) * (a - h));
    let result = `\nthe area = ${ area }`
    let eNot = `The triangle is not equilateral \n`
    let iNot = `The triangle is not isosceles\n`
    let oNot = `The triangle is not obtuse\n`

    if (l === w && l === h) {
        return `The triangle is equilateral\n${ iNot }${ oNot }${result}`;

    } else if (l === w || l === h || w === h){
        return `${ eNot }The triangle is isosceles\n${oNot}${result}`;

    } else if (sql + sqw < sqh || sql + sqh < sqw || sqh + sqw < sql) {
        return `${ eNot }${ iNot }The triangle is obtuse ${result}`;

    }
    else return `${ eNot }${ iNot }${ oNot } ${result}`;

};

console.log(isTriangle(triangleA))