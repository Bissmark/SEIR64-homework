// // Create a program that models a simple subway system.

// The program takes the line and stop that a user is getting on at and the line and stop that user is getting off at and prints the journey and the total number of stops for the trip in the console:

// planTrip('N', 'Times Square', '6', '33rd'); // This is only a suggested function name and signature.

// console.log() shows output similar to this:


//  Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.

// "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."

// "Change at Union Square."
//  "Your journey continues through the following stops: 23rd, 28th, 33rd."
// "7 stops in total."


const line = {
    N: {
        trainStop: ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'],
    },

    L: {
        trainStop: ['8th', '6th', 'Union Square', '3rd', '1st'],
    },

    6: {
        trainStop: ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place'],
    },
};


const planTrip = function (startLine, tripA, changeLine, tripB) { 
    const trainLine = line[startLine].trainStop // [] to access value in array
    
    if (changeLine === ' ') { // SAME TRAIN LINE
        
        // index of starting point
        let resultA = trainLine.indexOf(tripA); 

        // index of end point
        let resultB = trainLine.indexOf(tripB);

        // 'You must travel through..'
        if (resultA < resultB) {
            console.log(`You must travel through the following stops on the ${ startLine } line: ${ trainLine.slice(resultA + 1, resultB + 1).join(', ') }.`); // show stops travelling forward 
            
        } else {
            console.log(`You must travel through the following stops on the ${ startLine } line: ${ trainLine.slice(resultB, resultA).reverse().join(', ') }.`); // show stops travelling backward
        };
        
        // stops total
        let stopsBetween = (resultB + 1) - (resultA + 1);

        let totalStops = Math.abs(stopsBetween); // // Math.abs negative to positive
        if (totalStops > 1) {
            console.log(`${ totalStops } stops in total.`); // add s if >1 stop
        } else {
            console.log(`${ totalStops } stop in total.`) 
        };

        
    } else { // INTERCHANGE
        // index of start
        let resultA = trainLine.indexOf(tripA); 

        // index of interchange
        let resultB = trainLine.indexOf('Union Square');
        
        // 'You must travel through'
        if (resultA < resultB) {
            console.log(`You must travel through the following stops on the ${ startLine } line: ${ trainLine.slice(resultA + 1, resultB + 1).join(', ') }.`); // show stops travelling forward
            
        } else {
            console.log(`You must travel through the following stops on the ${ startLine } line: ${ trainLine.slice(resultB, resultA).reverse().join(', ') }.`); // show stops travelling backward
        };
        
        // 'change at US'
        console.log(`Change at Union Square.`);
        
        // SECOND ROUTE
        let newTrainLine = line[changeLine].trainStop;
        let resultC = newTrainLine.indexOf('Union Square');
        let resultD = newTrainLine.indexOf(tripB);

        // 'your journey'
        if (resultC < resultD) {
                console.log(`Your journey continues through the following stops: ${ newTrainLine.slice(resultC + 1, resultD + 1).join(', ') }.`); // show stops travelling forward
            } else {
                console.log(`Your journey continues through the following stops: ${ newTrainLine.slice(resultD, resultC).reverse().join(', ') }.`); // show stops travelling backward
        };

        // Stops total -- always more than 1
        let tripTotal = Math.abs(((resultB + 1) - (resultA + 1))) + Math.abs(((resultC + 1) - (resultD + 1)));
        console.log(`${ Math.abs(tripTotal) } stops in total.`);

    };
};

// POP UP PROMPT - fix
// const popUp = prompt('Enter "starting line", "starting station", "change line", "final stop"');

// planTrip('N', 'Times Square', ' ', '28th'); //  forward
// planTrip('L', '8th', ' ', '3rd') //  forward
// planTrip('6', '33rd', ' ', 'Astor Place'); //  forward

// // planTrip('N', '23rd', ' ', '34th'); //  backward
// // planTrip('L', '1st', ' ', '6th'); //  backward
// // planTrip('6', 'Astor Place', ' ', 'Grand Central'); //  backward


planTrip('N', 'Times Square', '6', '33rd'); // forward and backward
// planTrip('N', '8th', '6', 'Astor Place') // backward and forward
// planTrip('N', '8th', '6', 'Grand Central') // backward and backward
// planTrip('L', '8th', 'N', 'Times Square'); // forward and backward
// planTrip('6', 'Grand Central', 'L', '1st'); // forward and forward






    // const planTrip = function (startLine, tripA, changeLine, tripB)


    // getting array # from resultA and B to log stops in between. 
    // for (i = 0; i< network.nLine.length; i++) 
