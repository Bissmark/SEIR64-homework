console.log("this is going to suck")

// const planTrip = function (stop1, stop,2)
// function to list and count number of stops 
// need to determine direction of travel
//if statement 
// if contains union square 
// return list of stops and change notification at union square
// else return 
// to original function re†urn of list and number of stops 

// return a list of stops
// a change notifcation (if neccessary)
// another list of stops to complete the trip
// count the number of stops in total


//was able to count stops on indidividual lines however 
//difficult to intergrate lines and change @ UNION 
//also difficult to determine the difference between stops with the same name on different lines 
// decided to use objects in the array as there is more functionality for later 

function stopsBetweenStations(startStop, endStop) {
    
    const nLine = [
      { name: "Times Square" },
      { name: "34th" },
      { name: "28th" },
      { name: "23rd" },
      { name: "UNION SQUARE" },
      { name: "8th" }
    ];
    
    const startIndex = nLine.findIndex(stop => stop.name === startStop); // find location of first stop
    const endIndex = nLine.findIndex(stop => stop.name === endStop); // find location in the object of last stop 
       
    if (startIndex === -1 || endIndex === -1) {  // check if stop is valid
      return "Error: Invalid stop(s)";
    }
        
    const direction = endIndex > startIndex ? 1 : -1; // check direction of travel 
        
    const stopsBetween = []; // empty array to push and count stops in between and return count 
        for (let i = startIndex + direction; i !== endIndex; i += direction) {
      stopsBetween.push(nLine[i].name);
    }
    
        return `Stops between ${startStop} and ${endStop}:
                ${stopsBetween.join(", ")}. 
                Total stops: ${stopsBetween.length}`;
  }

  console.log(stopsBetweenStations("34th", "23rd"));
  console.log(stopsBetweenStations("Times Square", "8th"));
  console.log(stopsBetweenStations("8th", "28th"));

//L Line 

function stopsBetweenStationsl(startStop, endStop) {
    
    const lLine = [
      { name: "8th" },
      { name: "6th" },
      { name: "UNION SQUARE" },
      { name: "3rd" },
      { name: "1st" },
    ];
    
    const startIndex = lLine.findIndex(stop => stop.name === startStop); // find location of first stop
    const endIndex = lLine.findIndex(stop => stop.name === endStop); // find location in the object of last stop 
       
    if (startIndex === -1 || endIndex === -1) {  // check if stop is valid
      return "Error: Invalid stop(s)";
    }
        
    const direction = endIndex > startIndex ? 1 : -1; // check direction of travel 
        
    const stopsBetweenl = []; // empty array to push and count stops in between and return count 
        for (let i = startIndex + direction; i !== endIndex; i += direction) {
      stopsBetweenl.push(lLine[i].name);
    }
    
        return `Stops between ${startStop} and ${endStop}:
                ${stopsBetweenl.join(", ")}. 
                Total stops: ${stopsBetweenl.length}`;
}

console.log(stopsBetweenStationsl("8th", "UNION SQUARE"));
console.log(stopsBetweenStationsl("1st", "6th"))

// sixLine

function stopsBetweenStationsSix(startStop, endStop) {
    
    const sixLine = [
        { name: "Grand Central" },
        { name: "33rd" },
        { name: "28th" },
        { name: "23rd" },
        { name: "UNION SQUARE" },
        { name: "Astor Place " }
    ];
    
    const startIndex = sixLine.findIndex(stop => stop.name === startStop); // find location of first stop
    const endIndex = sixLine.findIndex(stop => stop.name === endStop); // find location in the object of last stop 
       
    if (startIndex === -1 || endIndex === -1) {  // check if stop is valid
      return "Error: Invalid stop(s)";
    }
        
    const direction = endIndex > startIndex ? 1 : -1; // check direction of travel 
        
    const stopsBetweenStationsSix = []; // empty array to push and count stops in between and return count
        for (let i = startIndex + direction; i !== endIndex; i += direction) {
            stopsBetweenStationsSix.push(sixLine[i].name);
    }
    
        return `Stops between ${startStop} and ${endStop}:
                ${stopsBetweenStationsSix.join(", ")}. 
                Total stops: ${stopsBetweenStationsSix.length}`;
}

console.log(stopsBetweenStationsSix("Grand Central", "UNION SQUARE"));
console.log(stopsBetweenStationsSix("Astor Place ", "28th"));