function planTrip(startLine, startStation, endLine, endStation) {
    // to Define the subway lines and stations
    var subwaySystem = {
      'N': ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'],
      'L': ['8th', '6th', 'Union Square', '3rd', '1st'],
      '6': ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place']
    };
  
    // to Find the index of the starting and ending stations on their respective lines
    var startIndex = subwaySystem[startLine].indexOf(startStation);
    var endIndex = subwaySystem[endLine].indexOf(endStation);
  
    if (startLine === endLine) {
      // User is traveling on one line
      var stops = subwaySystem[startLine].slice(startIndex, endIndex + 1);
      console.log("You must travel through the following stops on the " + startLine + " line: " + stops.join(', ') + ".");
    } else {
      // coz the User needs to change lines
      var intersection = 'Union Square';
      var startLineStops = subwaySystem[startLine].slice(startIndex, subwaySystem[startLine].indexOf(intersection) + 1);
      var endLineStops = subwaySystem[endLine].slice(subwaySystem[endLine].indexOf(intersection), endIndex + 1);
      console.log("You must travel through the following stops on the " + startLine + " line: " + startLineStops.join(', ') + ".");
      console.log("Change at " + intersection + ".");
      console.log("Your journey continues through the following stops on the " + endLine + " line: " + endLineStops.join(', ') + ".");
    }
  
    // to Calculate the number of stops in total
    var numStops = Math.abs(endIndex - startIndex) + 1;
    console.log(numStops + " stops in total.");
  }
  
  
  
  
  
  
  