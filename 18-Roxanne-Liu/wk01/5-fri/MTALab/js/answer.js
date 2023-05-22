const lineN = [ 'Times Square' , '34th', '28th', '23rd', 'Union Square', '8th' ];
const lineL = [ '8th', '6th', 'Union Square', '3rd', '1st' ];
const line6 = [ 'Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place' ];

let startLineArray = [];
let endLineArray = [];

function planTrip(startLine, startStop, endLine, endStop) {

    if(startLine === '6') {
        startLineArray = line6;
    };

    if (startLine === 'N') {
        startLineArray = lineN;
    };

    if (startLine === 'L') {
        startLineArray = lineL;
    };

    if (endLine === '6') {
        endLineArray = line6;
    };

    if (endLine === 'N') {
        endLineArray = lineN;
    };

    if (endLine === 'L') {
        endLineArray = lineL;
    };
    
    let UnionSquareIndexStart = startLineArray.indexOf('Union Square');
    let UnionSquareIndexEnd = endLineArray.indexOf('Union Square');
    let startLineFirstStopIndex = startLineArray.indexOf(startStop);
    let endLineEndStopIndex =  endLineArray.indexOf(endStop);
    let reversedEndLineArray = [...endLineArray].reverse(); // Hack to create new array, instead of mutating the original array.

    if (startLine === endLine) {
        console.log(`You must travel through the following stops on the ${ startLine } line: ${ startLineArray.slice((startLineFirstStopIndex + 1 ), (endLineEndStopIndex + 1 )) }.`);
        console.log(` ${ startLineArray.slice(startLineFirstStopIndex, endLineEndStopIndex).length } stops in total.`);
    } else {
        if (UnionSquareIndexEnd < endLineEndStopIndex) {
            console.log(`You must travel through the following stops on the ${ startLine } line: ${ startLineArray.slice((startLineFirstStopIndex + 1 ), (UnionSquareIndexStart + 1 )) }.`);
            console.log(`Change at Union Square to ${ endLine } line.`);
            console.log(`Your journey continues through the following stops on the ${ endLine } line: ${ endLineArray.slice((UnionSquareIndexEnd + 1), (endLineEndStopIndex + 1 )) }.`);
            console.log(`${ startLineArray.slice(startLineFirstStopIndex, UnionSquareIndexStart).length + endLineArray.slice(UnionSquareIndexEnd, endLineEndStopIndex).length} stops in total.`);
        } else {
            console.log(`You must travel through the following stops on the ${ startLine } line: ${ startLineArray.slice((startLineFirstStopIndex + 1 ), (UnionSquareIndexStart + 1 )) }.`);
            console.log(`Change at Union Square to ${ endLine } line.`);
            console.log(`Your journey continues through the following stops on the ${ endLine } line: ${ reversedEndLineArray.slice((reversedEndLineArray.indexOf('Union Square') + 1), (reversedEndLineArray.indexOf(endStop) + 1)) }.`);
            console.log(`${ startLineArray.slice(startLineFirstStopIndex, UnionSquareIndexStart).length + reversedEndLineArray.slice((reversedEndLineArray.indexOf('Union Square') + 1), (reversedEndLineArray.indexOf(endStop) + 1)).length} stops in total.`);
        };
    };
};


// planTrip('N','34th','N','8th');  
// planTrip('N', '23rd', '6', 'Astor Place');
// planTrip('6','Grand Central', 'L', '3rd');
planTrip('N', 'Times Square', '6', '33rd');

// console.log() shows output similar to this:
// "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
// "Change at Union Square."
// "Your journey continues through the following stops: 23rd, 28th, 33rd."
// "7 stops in total."