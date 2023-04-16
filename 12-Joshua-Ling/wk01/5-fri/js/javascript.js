const trainLines = {
    lineN: ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
    lineL: ["8th", "6th", "Union Square", "3rd", "1st"],
    lineSix: ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
}

const planTrip = (trainLines ,startLine, startStop, destLine, destStop) => {
    const startArr = trainLines[startLine];
    const destArr = trainLines[destLine];
    let startIndex = 0;
    let destIndex = 0;
    let localUnionIndex = 0;
    let destUnionIndex = 0;
    let totalStops = 0;
    let startStationPath="";
    let destStationPath="";
    
    for (let i = 0; i < startArr.length; i++) {
        if (startArr[i] === startStop) {
            startIndex = i;
        }
    }
    for (let i = 0; i < destArr.length; i++) {
        if (destArr[i] === destStop) {
            destIndex = i;
        }
    }

    if(startLine != destLine) {
        for (let i = 0; i < startArr.length; i++) {
            if (startArr[i] === "Union Square") {
                localUnionIndex = i;
            }
        }
        for (let i = 0; i < destArr.length; i++) {
            if (destArr[i] === "Union Square") {
                destUnionIndex = i;
            }
        }

        for (let i = 0; i < startArr.length; i++) {
            if (startArr[i] === startStop) {
                startIndex = i;
            }
        }

        if (startIndex < localUnionIndex) {
            for (let i = startIndex; i <= localUnionIndex; i++) {
                if (i === localUnionIndex) {
                    startStationPath += ` ${startArr[i]}.`; 
                    totalStops += 1;
                }
                else {
                    startStationPath += ` ${startArr[i]} ->`; 
                    totalStops += 1;
                }             
            }
        }
        else {
            for (let i = startIndex; i >= localUnionIndex; i--) {
                if (i === localUnionIndex) {
                    startStationPath += ` ${startArr[i]}.`; 
                    totalStops += 1;
                }
                else {
                    startStationPath += ` ${startArr[i]} ->`;
                    totalStops += 1;
                }      
            }
        }

        if (destIndex > destUnionIndex) {
            for (let i = destUnionIndex; i <= destIndex; i++) {
                if (i === destIndex) {
                    destStationPath += ` ${destArr[i]}.`; 
                    totalStops += 1;
                }
                else {
                    destStationPath += ` ${destArr[i]} ->`; 
                    totalStops += 1;
                }
            }
        }
        else {
            for (let i = destUnionIndex; i >= destIndex; i--) {
                if (i === destIndex) {
                    destStationPath += ` ${destArr[i]}.`; 
                    totalStops += 1;
                }
                else {
                    destStationPath += ` ${destArr[i]} ->`;
                    totalStops += 1;
                }             
            }
        }

        console.log(startStationPath, destStationPath, startIndex, destIndex, localUnionIndex, destUnionIndex);
        console.log("You must travel through the following stops on the", startLine, ":", startStationPath);
        console.log("Change at union square.");
        console.log("You must travel through the following stops on the", destLine, ":", destStationPath);
        console.log(totalStops - 2, "in total.");  //-2 cause of union square duplicates .. fix later
    }
    else {

        if (startIndex < destIndex) {
            for (let i = startIndex; i <= destIndex; i++) {
                if (i === destIndex) {
                    startStationPath += ` ${startArr[i]}.`; 
                    totalStops += 1;
                }
                else {
                    startStationPath += ` ${startArr[i]} ->`; 
                    totalStops += 1;
                }
                
            }
        }
        else {
            for (let i = startIndex; i >= destIndex; i--) {
                if (i === destIndex) {
                    startStationPath += ` ${startArr[i]}.`; 
                    totalStops += 1;
                }
                else {
                    startStationPath += ` ${startArr[i]} ->`;
                    totalStops += 1;
                }
                
            }
        }

        console.log(startStationPath, destStationPath, startIndex, destIndex, localUnionIndex, destUnionIndex);
        console.log("You must travel through the following stops on the", startLine, ":", startStationPath);
        console.log(totalStops -1 , "in total."); //-1 to excude start.. fix later :)
    }
}


planTrip(trainLines, "lineN", "34th", "lineL", "8th");
planTrip(trainLines, "lineN", "34th", "lineN", "23rd");