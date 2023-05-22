// Activity
// Create a program that models a simple subway system.

// The program takes the line and stop that a user is getting on at and the line and stop that user is getting off at and prints the journey and the total number of stops for the trip in the console:

// planTrip('N', 'Times Square', '6', '33rd'); // This is only a suggested function name and signature.

// // console.log() shows output similar to this:
// // "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
// // "Change at Union Square."
// // "Your journey continues through the following stops: 23rd, 28th, 33rd."
// // "7 stops in total."

// There are 3 subway lines:
// The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
// The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
// The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.

// All 3 subway lines intersect at Union Square, but there are no other intersection points. (For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line, so you'll have to differentiate this when you name your stops in the arrays.)
// Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.

var lines = {
    N: ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
    L: ["8th", "6th", "Union Square", "3rd", "1st"],
    6: ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"],
    R: [
      "Gotham",
      "9th",
      "Crown Station",
      "Union Square",
      "Cyprus Hills",
      "Jeezy Pent"
    ],
    D: [
      "East Side Masiff",
      "Union Square",
      "Penny",
      "Jam Station",
      "14th"
    ],
    T: [
      "God Station",
      "Metro Boomin",
      "Union Square",
      "Late Afrika Station",
      "Octopus Square",
      "YaDigg Spot"
    ]
  };
  
  function firstLeg(line, station) {
    var tripLine = lines[line];
    var stationIndex = lines[line].indexOf(station);
    var unionIndex = tripLine.indexOf("Union Square");

    if (stationIndex > unionIndex) {
      return compareStationToUnion(tripLine, unionIndex, stationIndex);
    }
  
    return tripLine.slice(stationIndex, unionIndex + 1);
  }
