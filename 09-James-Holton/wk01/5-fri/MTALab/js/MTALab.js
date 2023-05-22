const subwaySystem = {
    N: ['time square', '34th', '28th', '23rd', 'union square', '8th'],

    L: ['8th', '6th', 'union square', '3rd', '1st'],

    six: ['grand central', '33rd', '28th', '23rd', 'union square', 'astor place'],
};

const onOff = function (lineA, stopA, lineB, stopB) {

    const lAsA = subwaySystem[lineA].indexOf(stopA); // the value of the first stop in the array
    const lAUS = subwaySystem[lineA].indexOf('union square'); // the value 'union square' in lineA array
    const lAsB = subwaySystem[lineB].indexOf(stopB); // the value of the second stop in the array
    const lBUS = subwaySystem[lineB].indexOf('union square'); // the value 'union square' in lineB array
    let allStopsA = [];
    let allStopsB = [];
    let b;
    let c;
    let w;
    let d;

    const result = 'You must travel through the following stops on the';

    if (lAsA < lAUS) { // values for if the indexOf the first stop is less than the indexOf 'union square'
        b = lAsA + 1, w = lAUS + 1;  
        c = lAsB, d = lAsA;
    }

    if (lAsA > lAUS) {
        b = lAUS; w = lAsA;
        c = lAsA - 1; d = lAsB - 1; 
    }
    // if statements above will determine the values of b and w for the following loop.
    for (i = b; i < w; i++) {
        allStopsA.push(subwaySystem[lineA][i]); // this loop will push all stops that are less than or larger than 'union square' depending on the predetermined values
    } 
    let y = allStopsA;

    if (lineA === lineB) { // if the stops are on the same line

        for (j = c; j > d; j--) {
            allStopsB.push(subwaySystem[lineB][j]); // this loop will push all stops that are less than or larger than stopB depending on the predetermined values
        } 
        if (lAUS > lAsA){ // if indexOf 'union square' is bigger than indexOf stopA, it will reverse the array
            allStopsB.reverse();
        } 
        p = allStopsB;

        return (`${ result } ${ lineA } line: ${ p.join(', ') }.\nNo need to change lines and you will reach your destination with a total of ${ allStopsB.length } stops`) // will return the value and log if both stops are on the same line
    } 
    else if (lAsB < lBUS) {
        b = lBUS; w = lAsB; // values for if the indexOf the second stop is less than the indexOf 'union square'
    } 
    else if (lAsB > lBUS) {
        b = lAsB + 1; w = lBUS + 1; // values for if the indexOf the second stop is more than the indexOf 'union square'
    } 
    for (k = w; k < b; k++) { // if statements above will determine the values of b and w for the following loop.
        allStopsB.push(subwaySystem[lineB][k]); // this loop will push all stops that are less than or larger than 'union square' depending on the predetermined values
    }
    d = allStopsB;

    if (lAUS < lAsA) {
        y = allStopsA.reverse(); // if indexOf 'union square' is bigger than indexOf stopA, it will reverse the array
    } 
    if (lBUS > lAsB) {
        d = allStopsB.reverse(); // if indexOf 'union square' is bigger than indexOf stopB, it will reverse the array
    }
    leng = allStopsA.length + allStopsB.length; // adds the length of arrays
    return (`${ result } ${ lineA } line: ${ y.join(', ') }.\nChange at union square.\nYour journey continues through the following stops: ${ d.join(', ') }\n${ leng } stops in total`); // returns the stops needed to take  to get to destinatoin
};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
console.log(onOff('N', 'time square', 'N', '8th'));
console.log(onOff('N', 'time square', 'six', '33rd'));
console.log(onOff('N', 'time square', 'six', 'astor place'));
console.log(onOff('N', '8th', 'N', 'time square'));
console.log(onOff('N', '8th', 'six', 'grand central'));
console.log(onOff('N', '28th', 'L', '1st')); 
console.log(onOff('N', '8th', 'L', '8th')); 
console.log(onOff('L', '6th', 'L', '1st')); 
console.log(onOff('L', '6th', 'N', '8th')); 
console.log(onOff('L', '1st', 'six', 'grand central')); 
console.log(onOff('L', '1st', 'six', '33rd')); 
console.log(onOff('six', 'astor place', 'six', '33rd')); 
console.log(onOff('six', '33rd', 'N', 'time square')); 
console.log(onOff('six', '23rd', 'L', '1st')); 
console.log(onOff('six', 'astor place', 'N', '8th')); 