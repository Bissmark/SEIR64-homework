// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// const onOff = function (lineA, stopA, lineB, stopB) {
//     const logA = `You must travel through the following stops on the`;
//     const subSysLength = (Object.keys(subwaySystem).length);
//     const lineVar = Object.keys(subwaySystem);
//     const stopsALength = (subwaySystem[lineA].length);
//     const stopsBLength = (subwaySystem[lineB].length);
//     const stopInput = subwaySystem[lineA].indexOf(stopA);
//     const stopReturn = subwaySystem[lineB].indexOf(stopB);
//     let allStopsA = [];
//     const allStopsB = [];
//     let actualStopsA = [];
//     let actualStopsB = [];

//     for (i = 0; i < subSysLength; i++) {
//         if (lineA == lineVar[i].toString()) {
//             for (j = 0; j < stopsALength; j++) {
//                 if(stopA === subwaySystem[lineA][j]) {
//                     //linaA = N
//                     //stopA = timesquare 
//                     if (lineA !== lineB && stopA !== stopB) {
//                         for (l = (stopsALength - 1); l > stopInput; l--) {
//                             stopsArray = (subwaySystem[lineA][l]);
//                             allStopsA.push(stopsArray);
                        
//                         } let firstStops = allStopsA.reverse();
//                         for (m = 0; m < firstStops.length; m++) {
//                             actualStopsA.push(firstStops[m]);
//                             y = actualStopsA.join(', ');
//                             if (firstStops[m] === "union square") {

//                                 for (p = 0; p < (stopsBLength + 1); p++) { //p = 1, p < 7, p++
//                                     stopsArrayReturn = (subwaySystem[lineB][p]);
//                                     allStopsB.push(stopsArrayReturn);


//                                     if (allStopsB[p] === 'union square') {
//                                         allStopsB.pop();
//                                         allStopsRev = allStopsB.reverse();
//                                         if (p !== stopReturn) {
//                                             for (p = 0; p < stopReturn; p++) {
//                                                 allStopsRev.pop();
//                                             }
//                                         if (lineA === 'six') {
//                                             let lineA = '6' }
//                                         if (lineB === 'six') {
//                                             let lineB ='6' }
//                                         }
//                                         z = allStopsRev.join(', ');
//                                         return console.log(`${ logA } ${ lineA } line: ${ y }.\nChange at union square.\nYour journey continues through the following stops: ${ z }\n${ allStopsRev.length + actualStopsA.length } stops in total`)
//                                     } 
//                                 }  
//                             }    
//                         }
//                     }
//                 }
//             }
//         } 
//     }
// };




const subwaySystem = {
    N: ['time square', '34th', '28th', '23rd', 'union square', '8th'],

    L: ['8th', '6th', 'union square', '3rd', '1st'],

    six: ['grand central', '33rd', '28th', '23rd', 'union square', 'astor place'],
};

const onOff = function (lineA, stopA, lineB, stopB) {
    const logA = `You must travel through the following stops on the`;
    const subSysLength = (Object.keys(subwaySystem).length);
    const lineVar = Object.keys(subwaySystem);
    const stopsALength = (subwaySystem[lineA].length);
    const stopsBLength = (subwaySystem[lineB].length);
    const stopInput = subwaySystem[lineA].indexOf(stopA);
    const stopReturn = subwaySystem[lineB].indexOf(stopB);
    const unionVal = (subwaySystem[lineB].indexOf('union square'));
    let allStopsA = [];
    let allStopsB = [];
    let actualStopsA = [];
    let actualStopsB = [];
    let sameLineStops = [];
    let sameLineStopsRev = [];

    for (i = 0; i < subSysLength; i++) {
        if (lineA == lineVar[i].toString()) {
            for (j = 0; j < stopsALength; j++) {
                if(stopA === subwaySystem[lineA][j]) {
                    //linaA = N
                    //stopA = timesquare 
                    if (lineA !== lineB && stopA !== stopB && unionVal > stopInput) {
                        for (l = (stopsALength); l > stopInput; l--) {
                            stopsArray = (subwaySystem[lineA][l]);
                            allStopsA.push(stopsArray);
                        
                        } let firstStops = allStopsA.reverse();
                        for (m = 0; m < firstStops.length; m++) {
                            actualStopsA.push(firstStops[m]);
                            y = actualStopsA.join(', ');
                            if (firstStops[m] === "union square") {

                                for (p = 0; p < (stopsBLength); p++) { //p = 1, p < 7, p++
                                    stopsArrayReturn = (subwaySystem[lineB][p]);
                                    allStopsB.push(stopsArrayReturn);


                                    if (allStopsB[p] === 'union square') {
                                        if (stopReturn < unionVal) {
                                        allStopsB.pop();
                                        allStopsRev = allStopsB.reverse();
                                        if (p !== stopReturn) {
                                            for (p = 0; p < stopReturn; p++) {
                                                allStopsRev.pop();
                                            }
                                        }
                                        z = allStopsRev.join(', ');
                                        return console.log(`${ logA } ${ lineA } line: ${ y }.\nChange at union square.\nYour journey continues through the following stops: ${ z }\n${ allStopsRev.length + actualStopsA.length } stops in total`)
                                        } else if (stopReturn > unionVal) {
                                            for (o = unionVal + 1; o < stopsBLength; o++) {
                                                actualStopsB.push(subwaySystem[lineB][o]);
                                                x = actualStopsB.join(', ');
                                            }return console.log(`${ logA } ${ lineA } line: ${ y }.\nChange at union square.\nYour journey continues through the following stops: ${ x }\n${ actualStopsA.length + actualStopsB.length } stops in total`)
                                        }
                                    } 
                                }  
                            }    
                        }
                        } else if (lineB === lineA && stopA !== stopB && stopInput < stopReturn) {
                            for (q = stopInput + 1; q <= stopReturn; q++) {
                                sameLineStops.push(subwaySystem[lineB][q]);
                                w = sameLineStops.join(', ');
                                
                            } return console.log(`${ logA } ${ lineA } line: ${ w }.\nNo need to change lines and you will reach your destination with a total of ${ sameLineStops.length } stops`);
                        } else if (lineB === lineA && stopA !== stopB && stopInput > stopReturn) {
                            for (q = stopInput - 1; q >= stopReturn; q--) {
                                actualStopsA.push(subwaySystem[lineA][q]);
                            }
                        } else if ((lineB !== lineA) && (stopA !== stopB) && (stopInput > stopReturn)) {
                                    for (p = (stopsALength - 1); p > unionVal; p--) { //p = 1, p < 7, p++
                                        stopsArrayReturn = (subwaySystem[lineA][p]);
                                        allStopsA.push(stopsArrayReturn);
                                        
                                    } h = allStopsA;
                                    for (m = unionVal; m >= 0; m--) {
                                            actualStopsB.push(subwaySystem[lineB][m]);
                                        if (subwaySystem[lineB][m + unionVal] === "union square") {
                                            
                                            allStopsRev = actualStopsB.reverse();
                                            allStopsRev.pop();
                                            allStopsRev.reverse();
                                            allStopsRev.pop();
                                            let y = allStopsRev.join(', ');
                                            // allStopsRev.reverse();
                                            // let x = allstopsRev.join(', ')


                                            if (stopReturn > unionVal) {
                                            allStopsB.pop();
                                            allStopsRev = allStopsB.reverse();
                                            if (m !== stopReturn) {
                                                for (r = stopReturn; r > 0; r--) {
                                                    allStopsRev.pop();
                                                }
                                            }
                                            return console.log(`${ logA } ${ lineA } line: ${ h }.\nChange at union square.\nYour journey continues through the following stops: ${ y }\n${ h.length + allStopsRev.length } stops in total`)
                                            } else if (stopReturn < unionVal) {
                                                allStopsRev.pop()
                                                for (o = unionVal + 1; o < stopsBLength; o++) {
                                                    actualStopsB.push(subwaySystem[lineB][o]);
                                                    
                                                }
                                                return console.log(`${ logA } ${ lineA } line: ${ h }.\nChange at union square.\nYour journey continues through the following stops: ${ y }\n${ h.length + allStopsRev.length } stops in total`)
                                            } 
                                    }  
                                }    
                        } 
                        y = actualStopsA.join(', ');
                            // return y
                            return console.log(`${ logA } ${ lineA } line: ${ y }.\nNo need to change lines and you will reach your destination with a total of ${ actualStopsA.length } stops`);
                }
            }
        }
    }
};