//make an array of lines or make nLine to US? 2 arr for each line
// const nLine = ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'];
// const lLine = ['8th', '6th', 'Union Square', '3rd', '1st'];
const line6 = ['Grand Central','33rd', '28th', '23rd', 'Union Square', 'Astor Place'];

//find out the position(which is known as 'index') of the first stop  in array:usign  printout function


// const findIndexOfStop = function (nameOfStop){
//        return line6.indexOf(nameOfStop);
// }

// console.log(findIndexOfStop("Grand Central"));
// console.log(findIndexOfStop("28th"));
// console.log(findIndexOfStop("union"));

const directionOfTravel = function(startingStationIndex, endingStationIndex) {
    if(startingStationIndex < endingStationIndex){
        return "Right";
    }
    else if(startingStationIndex > endingStationIndex){
        return "Left";
    }
    return "Starting station has to be different from the ending station.";
}

const printOut = function(firstLine, startingStation, secondLine, endingStation ){
    const startingStationIndex = firstLine.indexOf(startingStation)
    const endingStationIndex = secondLine.indexOf(endingStation);
    const direction = directionOfTravel(startingStationIndex, endingStationIndex);
    if(direction === "Right"){
        for (let i = startingStationIndex; i <= endingStationIndex; i++){
            console.log(firstLine[i]);
        }
    }
    else if (direction === "Left"){
        for (let i = startingStationIndex; i >= endingStationIndex; i--){
            console.log(firstLine[i]);
        } 
    }
    
}
printOut(line6, "28th", line6, "Astor Place" );
console.log("hello");
printOut(line6, "Astor Place", line6, "28th" );



