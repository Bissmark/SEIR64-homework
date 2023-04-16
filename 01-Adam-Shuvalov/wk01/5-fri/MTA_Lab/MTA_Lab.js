console.log("MTA Lab\n\n");

const line_N = ["Times Square", "34th", "28th-N", "23rd-N", "Union Square", "8th-N"];
const line_L = ["8th-L", "6th", "Union Square", "3rd", "1st"];
const line_6 = [ "Grand Central", "33rd", "28th-6", "23rd-6", "Union Square", "Astor Place"];

const subwayNav = function (originLine, originStop, desLine, desStop) {
    let originIndex = originLine.indexOf(originStop);
    let desIndex = desLine.indexOf(desStop);
    let line1Route = "";
    let line2Route = "";
    let noOfStops = 0;
    let commonStation = "";
    let commonOriginStationIndex = 0;
    let commonDesStationIndex = 0;
    let originLName = "";
    let desLName = "";
//Allows me to give the array a name as a string so it can be logged. There's definitely a nicer to do this
    if (originLine === line_N) {
        originLName = "N";
    } else if (originLine === line_L) {
        originLName = "L"
    } else if (originLine === line_6) {
        originLName = "6"
    }

    if (desLine === line_N) {
        desLName = "N";
    } else if (desLine === line_L) {
        desLName = "L"
    } else if (desLine === line_6) {
        desLName = "6"
    }
//Determines if destination is on different line, if so, finds the indices of the common station in the array of both lines
    if (desLine !== originLine) {
        for (let i = 0; i < originLine.length; i++) {
            for (let j = 0; j < desLine.length; j++) {
                if (originLine[i] === desLine[j]) {
                    commonStation = originLine[i];
                    commonOriginStationIndex = originLine.indexOf(commonStation);
                    commonDesStationIndex = desLine.indexOf(commonStation);
                    break;
                }
            }
            if (commonStation) {
                break;
            }
//Finds and logs the route to a destination on a different line from the origin line.
        }
        if (originIndex < commonOriginStationIndex) {
            for (let i = originIndex + 1; i <= commonOriginStationIndex; i++) {
                line1Route += `${originLine[i]} `;
                noOfStops++;
            }
            if (commonDesStationIndex < desIndex) {
                for (let i = commonDesStationIndex + 1; i <= desIndex; i++) {
                    line2Route += `${desLine[i]} `;
                    noOfStops++;
                } 
            } else {
                for (let i = commonDesStationIndex - 1; i >= desIndex; i--) {
                    line2Route += `${desLine[i]} `;
                    noOfStops++; 
                } 
            } 
        } else {
            for (let i = originIndex - 1; i >= commonOriginStationIndex; i--) {
                line1Route += `${originLine[i]} `;
                noOfStops++;
            }
            if (commonDesStationIndex < desIndex) {
                for (let i = commonDesStationIndex + 1; i <= desIndex; i++) {
                    line2Route += `${desLine[i]} `;
                    noOfStops++;
                } 
            } else {
                for (let i = commonDesStationIndex - 1; i >= desIndex; i--) {
                    line2Route += `${desLine[i]} `;
                    noOfStops++; 
                } 
            }
        }
        console.log( `You have to take the following stops on the ${originLName} line: ${line1Route}\nChange at ${commonStation}\nThen, take the following stops on the ${desLName} Line: ${line2Route}\nTotal stops: ${noOfStops}\n\n`);
//Finds and logs the route to a destination on the same line as the origin line.
    } else {
        if (originIndex < desIndex) {
            for (let i = originIndex + 1; i <= desIndex; i++) {
                line1Route += `${originLine[i]} `;
                noOfStops++;
            }
        } else {
            for (let i = originIndex - 1; i >= desIndex; i--) {
                line1Route += `${originLine[i]} `;
                noOfStops++;
            }
        }
        console.log(`You have to take the following stops on the ${originLName} line: ${line1Route}\nTotal stops: ${noOfStops}\n\n`)
    }
}

subwayNav(line_L, "8th-L", line_6, "Astor Place");

subwayNav(line_N, "8th-N", line_6, "Grand Central");

subwayNav(line_6, "33rd", line_N, "Times Square");

subwayNav(line_6, "Grand Central", line_6, "Astor Place");

subwayNav(line_N, "8th", line_N, "34th");

subwayNav(line_6, "Union Square", line_L, "8th-L");

subwayNav(line_N, "Times Square", line_L, "8th-L");