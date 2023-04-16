// # MTA Lab

// * Create a program that models a simple subway system.
// * The program takes the line and stop that a user is getting on at and the line and stop that user is getting off at and prints the journey and the total number of stops for the trip in the console:

// Glabal variable
const linesMap = {
    N: [ "Times Square" , "34th", "28th", "23rd", "Union Square", "8th" ],
    L: [ "8th", "6th", "Union Square", "3rd", "1st" ],
    6: [ "Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place" ]  
};

const mainTerminal = "Union Square";

// sub function
const getFollowingStops = ( thisStop, lastStop, currentLine ) => {
    const nextStops = [];
    let stopList = linesMap[ currentLine ];

    if ( stopList.indexOf( thisStop ) > stopList.indexOf( lastStop ) ) {
        stopList.reverse();                                                                         // reverse the stop list for right travel direction
    };
    for ( let i = stopList.indexOf( thisStop ) + 1 ; i < stopList.indexOf( lastStop ) + 1; i++ ) {
        nextStops.push( stopList[ i ] );                                                                   // combine required stops
    };
    return nextStops;
};

const printInfo = ( withTransit, stopList1, line1, stopList2, line2 ) => {
    let totalStop = stopList1.length;

    console.log( `You must travel through the following stops on the ${ line1 } line:`,
        `${ stopList1.join(", ") }.` );

    if ( withTransit ) {
        console.log( `Change at Union Square.`);
        
        console.log( `Your journey continues through the following stops on the ${ line2 } line::`,
        `${ stopList2.join(", ") }.` );                                                             // if transit is required, print additional info
        
        totalStop += stopList2.length;                                                              // calculate total stops
    };
    totalStop === 1 ?
        console.log( `${ totalStop } stop in total.` ) :                                            // use "Stop" for only one stop
        console.log( `${ totalStop } stops in total.` );                                            // use "stops" for multiple stops
};

// Main function
const getDirection = ( startLine , startStop, endLine, endStop ) => {
    let transit = false;
    let firstStopList = [];

    if ( startLine === endLine || endStop === mainTerminal ) {                                      // Single line trip "taken tricky input into consideration"
        firstStopList = getFollowingStops( startStop, endStop, startLine );
        
        printInfo( transit, firstStopList, startLine );

        getTrainMap( transit, startStop, firstStopList, startLine );

    } else if ( startStop === mainTerminal ) {                                                      // Tricky input: apply terminal (Union Square) as a stop with any line as reference.
        firstStopList = getFollowingStops( startStop, endStop, endLine );
        
        printInfo( transit, firstStopList, endLine );

        getTrainMap( transit, startStop, firstStopList, startLine );

    } else {                                                                                        // Trips with transit
        transit = true;
        
        firstStopList = getFollowingStops( startStop, mainTerminal, startLine );
        
        const transitStopList = getFollowingStops( mainTerminal, endStop, endLine );
        
        printInfo( transit, firstStopList, startLine, transitStopList, endLine );

        getTrainMap( transit, startStop, firstStopList, startLine, transitStopList, endLine );
    };
};

// Additional code for visually showing the train map.
const getTrainMap = ( withTransit, thisStop, stopList1, line1, stopList2, line2 ) => {
    const mapping = {
        N: { length: 6, 'Times Square': " ", '34th': " ", '28th': " ", '23rd': " ", 'Union Square': " ", '8th': " "},
        L: { length: 5, '8th': " ", '6th': " ", 'Union Square': " ", '3rd': " ", '1st': " "},
        6: { length: 6, 'Grand Central': " ", '33rd': " ", '28th': " ", '23rd': " ", 'Union Square': " ", 'Astor Place': " "},
    };

    let stopCount = 0;
    let unionSquare = " ";
    stopList1.unshift( thisStop );

    for ( i = 0; i < stopList1.length; i++ ) {
        if ( stopList1[ i ] === "Union Square" ) {
            unionSquare = stopCount;
            stopCount++;
        } else {
            mapping[ line1 ][ stopList1[ i ] ] = stopCount;
            stopCount++;
        };
    };
    if ( withTransit ) {
        for ( i = 0; i < stopList2.length; i++ ) {
                mapping[ line2 ][ stopList2[ i ] ] = stopCount;
                stopCount++;
        };
    };

    // graphically present the map by using each line and column as the coordinate
    console.log(`          Times Square      34th          28th          23rd               Astor Place\n
    N line -->    ( ${ mapping['N']['Times Square'] } )---------( ${ mapping['N']['34th'] } )---------( ${ mapping['N']['28th'] } )---------( ${ mapping['N']['23rd'] } )                ( ${ mapping['6']['Astor Place'] } )    <-- 6 line\n
                                                                \\              /\n
                                                                  \\          /\n
                                                                    \\      /\n
                                          8th          6th       Union\\  /Square       3rd           1st\n
                            L line -->    ( ${ mapping['L']['8th'] } )---------( ${ mapping['L']['6th'] } )---------( ${ unionSquare } )---------( ${ mapping['L']['3rd'] } )---------( ${ mapping['L']['1st'] } )    <-- L line\n
                                                                      /   \\ \n
                                                                    /       \\ \n
                                                                  /           \\ \n
             Grand Central     33rd          28th          23rd /               \\ 8th\n
    6 line -->    ( ${ mapping['6']['Grand Central'] } )---------( ${ mapping['6']['33rd'] } )---------( ${ mapping['6']['28th'] } )---------( ${ mapping['6']['23rd'] } )                ( ${ mapping['N']['8th'] } )    <-- N line`);
};

// Input
setTimeout( () => { 
    const promptWords = "N line: Times Square, 34th, 28th, 23rd, Union Square, and 8th.\nL line: 8th, 6th, Union Square, 3rd, and 1st\n6 line: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place."
    let lineA = prompt( `Hi, I am here to assist you with your trip!\nPlease enter your current train list below.\n${ promptWords }`, 'N' );
    let stopA = prompt( `Please enter your current train stop below.\n${ promptWords }`, 'Times Square' );
    let lineB = prompt( `Please enter your destination train line below.\n${ promptWords }`, '6' );
    let stopB = prompt( `Please enter your destination train line below.\n${ promptWords }`, '33rd' );

    getDirection( lineA, stopA, lineB, stopB );
}, 10 );

// getDirection('N', 'Times Square', '6', '33rd');
// getDirection('N', 'Times Square', '6', 'Astor Place');   
// getDirection('L', '1st', 'N', '34th');
// getDirection('L', '3rd', 'N', '8th');
// getDirection('N', 'Union Square', 'N', '34th');
// getDirection('N', 'Union Square', 'N', '23rd');
// getDirection('6', 'Union Square', 'N', '23rd');
// getDirection('6', '33th', 'L', 'Union Square');
// getDirection('6', '33rd', '6', 'Grand Central');
// getDirection('L', '6th', '6', '23rd');



//           Times Square      34th          28th          23rd         Astor Place                 
// N line -->    (   )---------(   )---------(   )---------(   )          (   )    <-- 6 line
//                                                              \       /
//                                                               \     /
//                                                                \   /
//                                     8th          6th       Union Square       3rd           1st
//                      L line -->    (   )---------(   )---------(   )---------(   )---------(   )    <-- L line
//                                                                 / \
//                                                                /   \
//                                                               /     \
//           Grand Central     33th          28th          23rd /       \ 8th
// 6 line -->    (   )---------(   )---------(   )---------(   )         (   )    <-- N line