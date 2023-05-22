// Part 2, Triangle:

const triangleA = {
    sideA: 3,
    sideB: 4,
    sideC: 4
  };
  
  function isEquilateral(triangle) {
    return triangle.sideA === triangle.sideB && triangle.sideA === triangle.sideC;
  }
  
  function isIsosceles(triangle) {
    return triangle.sideA === triangle.sideB || triangle.sideA === triangle.sideC || triangle.sideB === triangle.sideC;
  }
  
  function area(triangle) {
    const s = (triangle.sideA + triangle.sideB + triangle.sideC) / 2;
    return Math.sqrt(s * (s - triangle.sideA) * (s - triangle.sideB) * (s - triangle.sideC));
  }
  
  function isObtuse(triangle) {
    const sides = [triangle.sideA, triangle.sideB, triangle.sideC].sort((a, b) => a - b);
    return Math.pow(sides[2], 2) > Math.pow(sides[0], 2) + Math.pow(sides[1], 2);
  }

console.log(isEquilateral(triangleA));
console.log(isIsosceles(triangleA));
console.log(area(triangleA)); 
console.log(isObtuse(triangleA));