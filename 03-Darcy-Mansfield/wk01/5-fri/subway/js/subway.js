

const plannedTripA = ['N', '8th', 'N', 'Times Square'];
const plannedTripB = ['N', '34th', 'L', '1st'];
const plannedTripC = ['L', '3rd', '6', '33rd'];

const line = {
    'N': ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'],
    'L': ['8th', '6th', 'Union Square', '3rd', '1st'],
    '6': ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place']
}

const planTrip = function(trip) {

    const line1 = line[trip[0]];
    const line2 = line[trip[2]];
    const line1Start = line1.indexOf(trip[1]);
    const line2End = line2.indexOf(trip[3]);
    
    if (!(trip[0] in line) || 
        !(trip[2] in line) ||
        !(line1.includes(trip[1])) ||
        !(line2.includes(trip[3]))) {

        console.log("Mate, you're cooked. Choose some valid train lines and stations next time.");
        return

    } 
     
    let line1Stops = []; 
    let line2Stops = []; 

    if (trip[0] === trip [2]) {

        // For trips on the same line

        if (line2End > line1Start) {

            for (i=line1Start+1; i<=line1Int; i++) {
                line1Stops.push(line1[i]);
            }

        } else {

            for (i=line1Start-1; i>=line2End; i--) {
                line1Stops.push(line1[i]);
            }

        }

        console.log(`You must travel through the following stops: ${line1Stops.join(', ')}.`);
        console.log(`This will be ${line1Stops.length} stops in total.`);
        return

    } else { 

        // For trips on different lines

        const intersect = 'Union Square';

        line1Int = line1.indexOf(intersect);
        line2Int = line2.indexOf(intersect);

        if (line1Int > line1Start) {

            for (i=line1Start+1; i<=line1Int; i++) {
                line1Stops.push(line1[i]);
            }

        } else {

            for (i=line1Start-1; i>=line1Int; i--) {
                line1Stops.push(line1[i]);
            }

        }

        if (line2Int < line2End) {

            for (i=line2Int+1; i<=line2End; i++) {
                line2Stops.push(line2[i]);
            }

        } else {

            for (i=line2Int-1; i>=line2End; i--) {
                line2Stops.push(line2[i]);
            }

        }

    }

    console.log(`You must travel through the following stops on the ${trip[0]} line: ${line1Stops.join(', ')}.`);
    console.log(`Please change at Union Square.`);
    console.log(`You're journey continues through the following stops on the ${trip[2]} line: ${line2Stops.join(', ')}.`);
    console.log(`This will be ${line1Stops.length + line2Stops.length} stops in total.`);

}

planTrip(plannedTripA);
planTrip(plannedTripB);
planTrip(plannedTripC);
