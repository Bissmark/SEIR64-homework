function planTrip(startLine, startStation, endLine, endStation) {
  var lines = {
    'N': ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'],
    'L': ['8th', '6th', 'Union Square', '3rd', '1st'],
    '6': ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place']
  };

  var stops, startLineStops, endLineStops, startStationIndex, endStationIndex;

  if (startLine === endLine) {
    stops = lines[startLine];
    startStationIndex = stops.indexOf(startStation);
    endStationIndex = stops.indexOf(endStation);
    var journeyStops = stops.slice(startStationIndex, endStationIndex + 1);
    var numStops = journeyStops.length - 1;
    console.log(`You must travel through the following stops on the ${startLine} line: ${journeyStops.join(', ')}.`);
    console.log(`${numStops} stops in total.`);
  } else {
    startLineStops = lines[startLine];
    startStationIndex = startLineStops.indexOf(startStation);
    var startLineUnionSquareIndex = startLineStops.indexOf('Union Square');
    var startJourneyStops = startLineStops.slice(startStationIndex, startLineUnionSquareIndex + 1);
    var startNumStops = startJourneyStops.length - 1;

    endLineStops = lines[endLine];
    endStationIndex = endLineStops.indexOf(endStation);
    var endLineUnionSquareIndex = endLineStops.indexOf('Union Square');
    var endJourneyStops = endLineStops.slice(endLineUnionSquareIndex, endStationIndex + 1);
    var endNumStops = endJourneyStops.length - 1;

    var numStops = startNumStops + endNumStops;
    console.log(`You must travel through the following stops on the ${startLine} line: ${startJourneyStops.join(', ')}.`);
    console.log(`Change at Union Square.`);
    console.log(`Your journey continues through the following stops: ${endJourneyStops.join(', ')}.`);
    console.log(`${numStops} stops in total.`);
  }
}


planTrip('N', 'Times Square', '6', 'Astor Place');