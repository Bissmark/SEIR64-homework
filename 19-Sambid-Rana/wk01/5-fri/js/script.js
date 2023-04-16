// MTA Lab

// The program  takes the LINE AND STOP that a user is GEETTING ON AT and the LINE AND STOP that user is GETTING OFF AT and PRINTS the JOURNEY and the TOTAL NUMBER OF STOPS for the trip in the console:


// There are 3 subway lines:

// The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th

// The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st

// The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.

// All 3 subway lines intersect at Union Square, but there are no other intersection points. (For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line, so you'll have to differentiate this when you name your stops in the arrays.)

// Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.

// The key to the lab is finding the index positions of each stop. (hint: indexOf())

// planTrip('N', 'Times Square', '6', '33rd');


//lines array - trying on one array first
const lineL = ["8th", "6th", "Union Square", "3rd", "1st"]



//find distance going forward
const frwdDistance = function (firstStop, lastStop) {
    return lastStop - firstStop;
}

//find distance backwards // no logic behind it.
const reverseDistance = function (firstStop, lastStop) {
    return Math.abs(firstStop - lastStop);
}



//Lines object
const stops = {
    lineN: ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
    lineL: ["8th", "6th", "Union Square", "3rd", "1st"],
    line6: [ "Grand Central", "33rd", "28th", "23rd", "Union Square"," Astor Place"]
}

// console.log(frwdDistance(stops.lineL.indexOf("1st"), stops.lineL.indexOf("8th")))
// console.log(reverseDistance(stops.lineL.indexOf("1st"), stops.lineL.indexOf("8th")))

const planTrip = function (firstLine, firstStop, lastLine, lastStop) {
    let indexFirstStop = stops[firstLine].indexOf(firstStop);
    let indexLastStop = stops[lastLine].indexOf(lastStop);
    // const noOfStops = indexLastStop - indexFirstStop;
    let noOfStops;

    if (indexFirstStop < indexLastStop) {
        noOfStops = frwdDistance(indexFirstStop, indexLastStop)
        console.log(noOfStops)
    } else if (indexFirstStop > indexLastStop) {
        noOfStops = reverseDistance(indexFirstStop, indexLastStop) //no clue as to what i'm doing or suppose to do.
        console.log(noOfStops)
    }


    return `first stop is ${indexFirstStop} and last stop is ${indexLastStop}. The no of stops b/w them is ${noOfStops}  `
}

console.log(planTrip("lineL", "8th", "lineL", "1st"))
console.log(planTrip("lineL", "1st", "lineL", "6th"))



