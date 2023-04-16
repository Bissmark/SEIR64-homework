// MTA Lab

// Instructions /////////////////////////////////////////
// create a function planTrip that takes in four arguments
// (Origin Line, Origin Station, Destination Line, Destination Station)
// prints the journey AND total number of stops
// console.log() shows output similar to this:
// "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
// "Change at Union Square."
// "Your journey continues through the following stops: 23rd, 28th, 33rd."
// "7 stops in total."

// Single Line ///////////////////////////
// two scenarios
// index goes ascending  
// index goes descending

// Multiple Lines /////////////////////////////
// four scenarios
// logic (my) --> starting station to temp destination station to temp start station to destination station
// index goes ascending ; index goes descending // startIndex < tempDestIndex && tempStart > destIndex
// index goes ascending ; index goes ascending // startIndex < tempDestIndex && tempStart < destIndex
// index goes descending ; index goes ascending // startIndex > tempDestIndex && tempStart < destIndex
// index goes descending ; index goes descending // startIndex > tempDestIndex && tempStart > destIndex

const lines = {
    n: ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th' ],
    l: ['8th', '6th', 'Union Square', '3rd', '1st'],
    six: ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place']
}

console.table(lines)

// manipulating input so it matches with object keys
const lineValidator = function ( line ) { 
    if ( line.toLowerCase() === 'n' ) {
        return lines.n;
    } else if ( line.toLowerCase() === 'l' ) {
        return lines.l;
    } else if ( line.toLowerCase() === '6' ) {
        return lines.six;
    }
}

const planTrip = function ( oLine, oStat, dLine, dStat ) { // 'n' 'Times Square' '6' '23rd'
    const tripArr = []; // empty array to take in stations from 1st leg before changing lines
    const tripArr2 = []; // empty array to take in stations from 2nd leg after changing lines
    const startLine = lineValidator(oLine); // line you start on. input "N" output "n.lines" 
    const destLine = lineValidator(dLine);  // line you end on.
    const startIndex = startLine.indexOf(oStat); // index of line.station you start on
    const destIndex = destLine.indexOf(dStat); // index of line.station you end on
    const tempDestIndex = startLine.indexOf('Union Square'); // union square on starting line array
    const tempStartIndex = destLine.indexOf('Union Square'); // union square on ending line array

    // multi trips startIndex -> tempDestIndex -> tempStartIndex - > destIndex

    if ( startLine !== destLine ) { // if start & end on different lines
        if ( startIndex < tempDestIndex && tempStartIndex > destIndex ) { 

            for ( let i = startIndex + 1; i <= tempDestIndex; i++ ) {

                tripArr.push(startLine[i]);
            }

            for ( let i = tempStartIndex - 1; i >= destIndex; i-- ) {
                tripArr2.push(destLine[i]);
            }

            console.log(`You must travel through the following stops on the ${ oLine.toUpperCase() } line: ${tripArr.join(', ')}.\nChange at Union Square.\nYour journey continues through the following stops on the ${ dLine.toUpperCase() } line: ${ tripArr2.join(', ')}.\n${ tripArr.length + tripArr2.length } stops in total. `);

        } else if ( startIndex < tempDestIndex && tempStartIndex < destIndex ) {

            for ( let i = startIndex + 1; i <= tempDestIndex; i++ ) {
                tripArr.push(startLine[i]);
            }

            for ( let i = tempStartIndex + 1; i <= destIndex; i++ ) {
                tripArr2.push(destLine[i]);
            }

            console.log(`You must travel through the following stops on the ${ oLine.toUpperCase() } line: ${tripArr.join(', ')}.\nChange at Union Square.\nYour journey continues through the following stops on the ${ dLine.toUpperCase() } line: ${ tripArr2.join(', ')}.\n${ tripArr.length + tripArr2.length } stops in total. `);

        } else if ( startIndex > tempDestIndex && tempStartIndex < destIndex ) {
            
            for ( let i = startIndex - 1; i >= tempDestIndex; i-- ) {
                tripArr.push(startLine[i]);
            }

            for ( let i = tempStartIndex + 1; i <= destIndex; i++ ) {
                tripArr2.push(destLine[i]);
            }

            console.log(`You must travel through the following stops on the ${ oLine.toUpperCase() } line: ${tripArr.join(', ')}.\nChange at Union Square.\nYour journey continues through the following stops on the ${ dLine.toUpperCase() } line: ${ tripArr2.join(', ')}.\n${ tripArr.length + tripArr2.length } stops in total. `);

        } else {

            for ( let i = startIndex - 1; i >= tempDestIndex; i-- ) {
                tripArr.push(startLine[i]);
            }

            for ( let i = tempStartIndex - 1; 1 >= destIndex; i-- ) {
                tripArr2.push(destLine[i]);
            }

            console.log(`You must travel through the following stops on the ${ oLine.toUpperCase() } line: ${tripArr.join(', ')}.\nChange at Union Square.\nYour journey continues through the following stops on the ${ dLine.toUpperCase() } line: ${ tripArr2.join(', ')}.\n${ tripArr.length + tripArr2.length } stops in total. `);
        }

    } else { // if start & end destination on same line 

        if ( startIndex < destIndex) { 

            for ( let i = startIndex + 1; i <= destIndex; i++ ) {
                tripArr.push(startLine[i]);
            }

            console.log(`You must travel through the following stops on the ${ oLine.toUpperCase() } line: ${tripArr.join(', ')}.\n${ tripArr.length } stops in total.`);

        } else {

            for ( let i = startIndex - 1; i >= destIndex; i-- ) {
                tripArr.push(startLine[i]);
            }

            console.log(`You must travel through the following stops on the ${ oLine.toUpperCase() } line: ${tripArr.join(', ')}.\n${ tripArr.length } stops in total.`);

        }

    }
}

planTrip( 'n' , 'Times Square', '6' , '23rd' )
planTrip( '6', '33rd', 'l', '1st' )
planTrip( 'n', 'Times Square', 'n', '8th' );
planTrip( 'l', '8th', 'n', '8th' );


