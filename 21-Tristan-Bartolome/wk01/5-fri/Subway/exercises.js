const cLog = console.log;
// # MTA Lab
const lines = {
    N: ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'],
    6: ['8th', '6th', 'Union Square', '3rd', '1st'],
    L: ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place']
   }

const planTrip = function (startingLine, startingStation, endLine, endStation) {
    let currentLine = lines[startingLine];
    let firstStopIndex = currentLine.indexOf(startingStation); //getting the index of startingStation(Times Square) from the currentLine and calling it firstStopIndex
    let endStopIndex = currentLine.indexOf(endStation);
    let interchange = 'Union Square';

    if(endStopIndex >= 0) {
        //look for stations in current line from start station to end station
        for (let i = firstStopIndex; i <= endStopIndex ; i++) {  //the user is moving straight through the line up until Union Square
            let currentStopOnCurrentLine = currentLine[i]; // getting the element from currentLine using index and calling it currentStopOnCurrentLine
            cLog(currentStopOnCurrentLine);   
        }
        for (let i = endStopIndex -1; i >= firstStopIndex; i--) { //user is now at Union Square but is going back down the same line
            let currentStopOnCurrentLine = currentLine[i];
            cLog(currentStopOnCurrentLine);
        }
    } else {
        let interchangeIndex = currentLine.indexOf(interchange); //getting the index of interchange from the current line and calling it interchangeIndex.
        for (let i = firstStopIndex; i <= interchangeIndex; i++) {
            let currentStopOnCurrentLine = currentLine[i]; //getting the element from currentLine using [i] and calling it currentStopOnCurrentLine
            cLog(currentStopOnCurrentLine);
        }
        for (let i = firstStopIndex; i >= interchangeIndex; i--) {
            let currentStopOnCurrentLine = currentLine[i];
            cLog(currentStopOnCurrentLine);  
        }
        currentLine = lines[endLine];
        currentStopOnCurrentLine = currentLine.indexOf(interchange);
        endStopIndex = currentLine.indexOf(endStation);
        for (let i = currentStopOnCurrentLine; i >= endStopIndex; i--) {
            let currentStopOnCurrentLine = currentLine[i];
            cLog(currentStopOnCurrentLine);
        } 
        for (let i = currentStopOnCurrentLine; i <= endStopIndex; i++) {
            let currentStopOnCurrentLine = currentLine[i];
            cLog(currentStopOnCurrentLine);
        }
        
        
    }
}
cLog(planTrip("N", "Times Square", "L", "Grand Central"));
    


// First Line
        // - Find Index of StartStation
        // - Find Index of 'Union Square'
        //1.look for stations in first line and starting station up to union square
        //step1. find the index of starting station and find the index of end station.
        // let firstStopIndex = currentLine.indexOf(startingStation);
        // let currentStopOnCurrentLine = currentLine.indexOf('Union Square');
        // let interchange = currentStopOnCurrentLine;
        //2.switch lines
        //3.look for stations on the new line from union square get to the end
//prints the journey and the total number of stops for the trip in the console
    //get first station and then go to the station and print it out and repeat until endStation and endLine is reached.
 
 //cLog(planTrip("N", "Times Square", "6", "1st"));

 
// console.log(`${('8th', '6th', 'Union Square', '3rd', '1st')}`)
// console.log(`${('Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place')}`)
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