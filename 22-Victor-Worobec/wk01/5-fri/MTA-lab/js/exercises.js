const cLog = console.log;

const trainLines = {
    N: [`Times Square`, `34th`, `28th`, `23rd`, `Union Square`],
    L: [`8th`, `6th`, `Union Square`, `3rd`, `1st`],
    6: [`Grand Central`, `33rd`, `28th`, `23rd`, `Union Square`, `Astor Place`]
}

const printList = function (listOfStations, intersectingStation = 0) { //defaulting argument - sets intersectingStation to 0 unless parsed in
    if (listOfStations.length === 1) { //if user has not traveled at all (will have beginning station pushed into list, hence the conditional against `1`)
        cLog(`There is no need to catch a train as your starting station and destination station are the same.`);
    } 
    else {
        if (intersectingStation === 0) { //if trip is on same line
            cLog(`This is your journey beginning at the first station and ending at the last station. \n${ listOfStations.join(`\n`) }`); //print list of stations 
            cLog(`Total stations of travel: ${ listOfStations.length - 1 }.`); //return length of stations minus 1 because the starting position is part of the list
        }
        else { //if trip is on different line
            cLog(`This is your journey beginning at the first station and ending at the last station. Your journey requires you to change lines at "${ intersectingStation }". \n${ listOfStations.join(`\n`) }\n`); //print list of stations
            cLog(`Total stations of travel: ${ listOfStations.length - 1 }.`); //return length of station minus 1 because the starting position is part of the list
        }
    }

    cLog(`\n\n`); //for readability between different tests
}

const planTrip = function (currentLine, currentStation, destinationLine, destinationStation) {
    //defensive programming
    currentLine = currentLine.toUpperCase(); //if user types lowercase current line into prompt
    destinationLine = destinationLine.toUpperCase(); //if user types lowercase destination line into prompt

    const trainLineNames = Object.keys(trainLines); //convert train lines in array
    const trainStationsArrays = Object.values(trainLines); //convert train line stations arrays into another array (2D array)
    const intersectingStation = `Union Square`;

    let currentLineIndex = trainLineNames.indexOf(currentLine); //track the current stop line index
    let currentStationIndex = trainStationsArrays[currentLineIndex].indexOf(currentStation); //track the current stop index within above array
    let destinationLineIndex = trainLineNames.indexOf(destinationLine); //track the destination line index
    let destinationStationIndex = trainStationsArrays[destinationLineIndex].indexOf(destinationStation); //track the destination stop index within above array
    let travelList = []; //make an array list to pop stations into for display of overall trip later

    if (currentLineIndex === destinationLineIndex && currentStationIndex !== destinationStationIndex) { //if on same line and not same station
        for (; currentStationIndex < destinationStationIndex; currentStationIndex++) { //if destination is further, "travel forward" (increment the index)
            travelList.push(`Line: ${ trainLineNames[currentLineIndex] }, Station: ${ trainStationsArrays[currentLineIndex][currentStationIndex] }`); //Pop locations into list
        }

        for (; currentStationIndex > destinationStationIndex; currentStationIndex--) { //if destination is backward, "travel the other direction" (decrement the index)
            travelList.push(`Line: ${ trainLineNames[currentLineIndex] }, Station: ${ trainStationsArrays[currentLineIndex][currentStationIndex] }`); //Pop locations into list
        }

        //Pop final location into list for display
        travelList.push(`Line: ${ trainLineNames[currentLineIndex] }, Station: ${ trainStationsArrays[currentLineIndex][currentStationIndex] }`);
        printList(travelList);
    }
    else { //if on different line
        if (currentStation === intersectingStation) { //if user has specified different line but is already at connecting station

            //change lines
            currentLineIndex = destinationLineIndex; //switch train lines
            currentStationIndex = trainStationsArrays[destinationLineIndex].indexOf(intersectingStation); //switch train station to new lines train station

            travelList.push(`Line: ${ trainLineNames[currentLineIndex] }, Station: ${ trainStationsArrays[currentLineIndex][currentStationIndex] }`); //Pop starting location into list

            //travel up new line
            for (; currentStationIndex < destinationStationIndex; currentStationIndex++) { //if destination is further, "travel forward" (increment the index)
                travelList.push(`Line: ${ trainLineNames[currentLineIndex] }, Station: ${ trainStationsArrays[currentLineIndex][currentStationIndex + 1] }`); //Pop locations into list (next location because we print change line earlier)
            }
            //travel down new line
            for (; currentStationIndex > destinationStationIndex; currentStationIndex--) { //if destination is backward, "travel the other direction" (decrement the index)
                travelList.push(`Line: ${ trainLineNames[currentLineIndex] }, Station: ${ trainStationsArrays[currentLineIndex][currentStationIndex - 1] }`); //Pop locations into list (next location because we print change line earlier)
            }
            printList(travelList);
        }
        else { //if not at connecting station, calculate trip on first line, otherwise change lines straight away and calculate trip
            //if destination is further, "travel forward" (increment the index)
            for (; currentStationIndex < trainStationsArrays[currentLineIndex].indexOf(intersectingStation); currentStationIndex++) { 
                travelList.push(`Line: ${ trainLineNames[currentLineIndex] }, Station: ${ trainStationsArrays[currentLineIndex][currentStationIndex] }`); //Pop locations into list
            }

            //if destination is backward, "travel the other direction" (decrement the index)
            for (; currentStationIndex > trainStationsArrays[currentLineIndex].indexOf(intersectingStation); currentStationIndex--) { 
                travelList.push(`Line: ${ trainLineNames[currentLineIndex] }, Station: ${ trainStationsArrays[currentLineIndex][currentStationIndex] }`); //Pop locations into list
            }

            //add arrival of intersecting station
            travelList.push(`Line: ${ trainLineNames[currentLineIndex] }, Station: ${ trainStationsArrays[currentLineIndex][currentStationIndex] }`); //Pop locations into list

            //change lines
            currentLineIndex = destinationLineIndex; //switch train lines
            currentStationIndex = trainStationsArrays[destinationLineIndex].indexOf(intersectingStation); //switch train station to new lines train station

            //travel up new line
            for (; currentStationIndex < destinationStationIndex; currentStationIndex++) { //if destination is further, "travel forward" (increment the index)
                travelList.push(`Line: ${ trainLineNames[currentLineIndex] }, Station: ${ trainStationsArrays[currentLineIndex][currentStationIndex + 1] }`); //Pop locations into list (next location because we print change line earlier)
            }
            //travel down new line
            for (; currentStationIndex > destinationStationIndex; currentStationIndex--) { //if destination is backward, "travel the other direction" (decrement the index)
                travelList.push(`Line: ${ trainLineNames[currentLineIndex] }, Station: ${ trainStationsArrays[currentLineIndex][currentStationIndex - 1] }`); //Pop locations into list (next location because we print change line earlier)
            }
            printList(travelList, intersectingStation);
        }
    }
}

planTrip(`N`, `34th`, `N`, `Union Square`); //testing backward traversal, same line
planTrip(`6`, `33rd`, `L`, `8th`); //testing different line traversal
planTrip(`L`, `Union Square`, `N`, `34th`); //testing different line traversal, but already at connecting station
planTrip(`L`, `Union Square`, `L`, `Union Square`); // testing same station
planTrip(`L`, `Union Square`, `N`, `Union Square`); // testing same station, different line

const startLine = prompt(`Please select which line (uppercase or lowercase) you are on:`);
const startStation = prompt(`Please select which station you are at:`);
const destinationLine = prompt(`Please select which line (uppercase or lowercase) you would like to go to:`);
const destinationStation = prompt(`Please select which station you would like to go to:`);

if (startLine !== null && startStation !== null && destinationLine !== null && destinationStation !== null) {
    planTrip(startLine, startStation, destinationLine, destinationStation); //testing user input
} else {
    cLog(`You did not type a value for every prompt message...`);
}

// # MTA Lab

// ## Objectives:
// * Apply your knowledge of Javascript to solve a real world problem.
// * Get really good at array manipulation.

// #### Activity
// * Create a program that models a simple subway system.

// * The program takes the line and stop that a user is getting on at and the line
// and stop that user is getting off at and prints the journey and the total number of stops for the trip in the console:

// ```javascript
// planTrip('N', 'Times Square', '6', '33rd'); // This is only a suggested function name and signature.

// // console.log() shows output similar to this:
// // "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
// // "Change at Union Square."
// // "Your journey continues through the following stops: 23rd, 28th, 33rd."
// // "7 stops in total."
// ```

// * There are 3 subway lines:
//   * The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
//   * The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
//   * The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
//   * All 3 subway lines intersect at Union Square, but there are no other intersection points. (For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line, so you'll have to differentiate this when you name your stops in the arrays.)
// * Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.


// #### Hints:
// * Work out how you would do it on paper first! Then start to explain that process in Javascript.
// * Get the program to work for a single line before trying to tackle multiple lines.
// * Don't worry about prompting the user for input. Hard code some values to get it working. You can use ```prompt()``` later to make it more interactive.
// * Consider diagramming the lines by sketching out the subway lines and their stops and intersection.
// * The key to the lab is finding the index positions of each stop. (hint: ```indexOf()```)
// * Make sure the stops that are the same for different lines have different names (i.e. 23rd on the N and on the 6 need to be differentiated)