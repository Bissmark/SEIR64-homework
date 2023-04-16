const trip = ['lineN', 'Times Square', 'line6', '33rd']
const lineN = ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th']
const lineL = ['1st', '3rd', 'Union Square', '6th', '8th']
const line6 = ['Astor Place', 'Union Square', '23rd', '28th', '33rd', 'Grand Central']

const lineNR = ['8th', 'Union Square', '23rd', '28th', '34th', 'Times Square']
const lineLR = ['8th', '6th', 'Union Square', '3rd', '1st']
const line6R = ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place']

function tripFind (trip) {
    let x = []
    let y = []
    let z = 0
    if (trip[0] === 'lineN' && trip[2] === 'lineN' && lineN.indexOf(trip[1]) <= lineN.indexOf(trip[3])) {
        for (i = (lineN.indexOf(trip[1]) + 1); i <= lineN.indexOf(trip[3]); i++)
        x.push([lineN[i]])
        console.log (`You must travel through the following stops on the N [${x}]`)
        z = x.length
        console.log(`${z} stops in total`)
    }  
        else if (trip[0] === 'lineN' && trip[2] === 'lineN' && lineN.indexOf(trip[1]) >= lineN.indexOf(trip[3])) {
        for (i = (lineNR.indexOf(trip[1]) + 1); i <= lineNR.indexOf(trip[3]); i++)
        x.push([lineNR[i]])
        console.log (`You must travel through the following stops on the N [${x}]`)
        z = x.length
        console.log(`${z} stops in total`)
    }   
        else if (trip[0] === 'lineN' && trip[2] === 'lineL' && lineN.indexOf(trip[1]) <= lineN.indexOf('Union Square') && lineL.indexOf('Union Square') <= lineL.indexOf(trip[3])) {
        for (i = (lineN.indexOf(trip[1]) + 1); i <= lineN.indexOf(`Union Square`); i++)
        x.push([lineN[i]])
        console.log (`You must travel through the following stops on the N [${x}]`)
        console.log (`Change at Union Square`)
        for (j = (lineL.indexOf(`Union Square`) + 1); j <= lineL.indexOf(trip[3]);j++)
        y.push([lineL[j]])
        console.log (`Your journey continues through the following stops: [${y}]`)
        z = x.length + y.length
        console.log(`${z} stops in total`)
    }   
        else if (trip[0] === 'lineN' && trip[2] === 'lineL' && lineN.indexOf(trip[1]) <= lineN.indexOf('Union Square') && lineL.indexOf('Union Square') >= lineL.indexOf(trip[3])) {
        for (i = (lineN.indexOf(trip[1]) + 1); i <= lineN.indexOf(`Union Square`); i++)
        x.push([lineN[i]])
        console.log (`You must travel through the following stops on the N [${x}]`)
        console.log (`Change at Union Square`)
        for (j = (lineLR.indexOf(`Union Square`) + 1); j <= lineLR.indexOf(trip[3]);j++)
        y.push([lineLR[j]])
        console.log (`Your journey continues through the following stops: [${y}]`)
        z = x.length + y.length
        console.log(`${z} stops in total`)
    }   
        else if (trip[0] === 'lineN' && trip[2] === 'lineL' && lineN.indexOf(trip[1]) >= lineN.indexOf('Union Square') && lineL.indexOf('Union Square') <= lineL.indexOf(trip[3])) {
        for (i = (lineNR.indexOf(trip[1]) + 1); i <= lineNR.indexOf(`Union Square`); i++)
        x.push([lineNR[i]])
        console.log (`You must travel through the following stops on the N [${x}]`)
        console.log (`Change at Union Square`)
        for (j = (lineL.indexOf(`Union Square`) + 1); j <= lineL.indexOf(trip[3]);j++)
        y.push([lineL[j]])
        console.log (`Your journey continues through the following stops: [${y}]`)
        z = x.length + y.length
        console.log(`${z} stops in total`)
    }   
        else if (trip[0] === 'lineN' && trip[2] === 'lineL' && lineN.indexOf(trip[1]) >= lineN.indexOf('Union Square') && lineL.indexOf('Union Square') >= lineL.indexOf(trip[3])) {
        for (i = (lineNR.indexOf(trip[1]) + 1); i <= lineNR.indexOf(`Union Square`); i++)
        x.push([lineNR[i]])
        console.log (`You must travel through the following stops on the N [${x}]`)
        console.log (`Change at Union Square`)
        for (j = (lineLR.indexOf(`Union Square`) + 1); j <= lineLR.indexOf(trip[3]);j++)
        y.push([lineLR[j]])
        console.log (`Your journey continues through the following stops: [${y}]`)
        z = x.length + y.length
        console.log(`${z} stops in total`)
    }   
        else if (trip[0] === 'lineN' && trip[2] === 'line6' && lineN.indexOf(trip[1]) <= lineN.indexOf('Union Square') && line6.indexOf('Union Square') <= line6.indexOf(trip[3])) {
        for (i = (lineN.indexOf(trip[1]) + 1); i <= lineN.indexOf(`Union Square`); i++)
        x.push([lineN[i]])
        console.log (`You must travel through the following stops on the N [${x}]`)
        console.log (`Change at Union Square`)
        for (j = (line6.indexOf(`Union Square`) + 1); j <= line6.indexOf(trip[3]);j++)
        y.push([line6[j]])
        console.log (`Your journey continues through the following stops: [${y}]`)
        z = x.length + y.length
        console.log(`${z} stops in total`)
    }   
        else if (trip[0] === 'lineN' && trip[2] === 'line6' && lineN.indexOf(trip[1]) <= lineN.indexOf('Union Square') && line6.indexOf('Union Square') >= line6.indexOf(trip[3])) {
        for (i = (lineN.indexOf(trip[1]) + 1); i <= lineN.indexOf(`Union Square`); i++)
        x.push([lineN[i]])
        console.log (`You must travel through the following stops on the N [${x}]`)
        console.log (`Change at Union Square`)
        for (j = (line6R.indexOf(`Union Square`) + 1); j <= line6R.indexOf(trip[3]);j++)
        y.push([line6R[j]])
        console.log (`Your journey continues through the following stops: [${y}]`)
        z = x.length + y.length
        console.log(`${z} stops in total`)
    }   
        else if (trip[0] === 'lineN' && trip[2] === 'line6' && lineN.indexOf(trip[1]) >= lineN.indexOf('Union Square') && line6.indexOf('Union Square') <= line6.indexOf(trip[3])) {
        for (i = (lineNR.indexOf(trip[1]) + 1); i <= lineNR.indexOf(`Union Square`); i++)
        x.push([lineNR[i]])
        console.log (`You must travel through the following stops on the N [${x}]`)
        console.log (`Change at Union Square`)
        for (j = (line6.indexOf(`Union Square`) + 1); j <= line6.indexOf(trip[3]);j++)
        y.push([line6[j]])
        console.log (`Your journey continues through the following stops: [${y}]`)
        z = x.length + y.length
        console.log(`${z} stops in total`)
    }   
        else if (trip[0] === 'lineN' && trip[2] === 'line6' && lineN.indexOf(trip[1]) >= lineN.indexOf('Union Square') && line6.indexOf('Union Square') >= line6.indexOf(trip[3])) {
        for (i = (lineNR.indexOf(trip[1]) + 1); i <= lineN.indexOf(`Union Square`); i++)
        x.push([lineNR[i]])
        console.log (`You must travel through the following stops on the N [${x}]`)
        console.log (`Change at Union Square`)
        for (j = (line6R.indexOf(`Union Square`) + 1); j <= line6R.indexOf(trip[3]);j++)
        y.push([line6R[j]])
        console.log (`Your journey continues through the following stops: [${y}]`)
        z = x.length + y.length
        console.log(`${z} stops in total`)
    





    }  else if (trip[0] === 'lineL' && trip[2] === 'lineL' && lineL.indexOf(trip[1]) <= lineL.indexOf(trip[3])) {
        for (i = (lineL.indexOf(trip[1]) + 1); i <= lineL.indexOf(trip[3]); i++)
        x.push([lineL[i]])
        console.log (`You must travel through the following stops on the L [${x}]`)
        z = x.length
        console.log(`${z} stops in total`)
    }  
        else if (trip[0] === 'lineL' && trip[2] === 'lineL' && lineL.indexOf(trip[1]) >= lineL.indexOf(trip[3])) {
        for (i = (lineLR.indexOf(trip[1]) + 1); i <= lineLR.indexOf(trip[3]); i++)
        x.push([lineLR[i]])
        console.log (`You must travel through the following stops on the L [${x}]`)
        z = x.length
        console.log(`${z} stops in total`)
    }   
        else if (trip[0] === 'lineL' && trip[2] === 'lineN' && lineL.indexOf(trip[1]) <= lineL.indexOf('Union Square') && lineN.indexOf('Union Square') <= lineN.indexOf(trip[3])) {
        for (i = (lineL.indexOf(trip[1]) + 1); i <= lineL.indexOf(`Union Square`); i++)
        x.push([lineL[i]])
        console.log (`You must travel through the following stops on the L [${x}]`)
        console.log (`Change at Union Square`)
        for (j = (lineN.indexOf(`Union Square`) + 1); j <= lineN.indexOf(trip[3]);j++)
        y.push([lineN[j]])
        console.log (`Your journey continues through the following stops: [${y}]`)
        z = x.length + y.length
        console.log(`${z} stops in total`)
    }   
        else if (trip[0] === 'lineL' && trip[2] === 'lineN' && lineL.indexOf(trip[1]) <= lineL.indexOf('Union Square') && lineN.indexOf('Union Square') >= lineN.indexOf(trip[3])) {
        for (i = (lineL.indexOf(trip[1]) + 1); i <= lineL.indexOf(`Union Square`); i++)
        x.push([lineL[i]])
        console.log (`You must travel through the following stops on the L [${x}]`)
        console.log (`Change at Union Square`)
        for (j = (lineNR.indexOf(`Union Square`) + 1); j <= lineNR.indexOf(trip[3]);j++)
        y.push([lineNR[j]])
        console.log (`Your journey continues through the following stops: [${y}]`)
        z = x.length + y.length
        console.log(`${z} stops in total`)
    }   
        else if (trip[0] === 'lineL' && trip[2] === 'lineN' && lineL.indexOf(trip[1]) >= lineL.indexOf('Union Square') && lineN.indexOf('Union Square') <= lineN.indexOf(trip[3])) {
        for (i = (lineLR.indexOf(trip[1]) + 1); i <= lineLR.indexOf(`Union Square`); i++)
        x.push([lineLR[i]])
        console.log (`You must travel through the following stops on the N [${x}]`)
        console.log (`Change at Union Square`)
        for (j = (lineN.indexOf(`Union Square`) + 1); j <= lineN.indexOf(trip[3]);j++)
        y.push([lineN[j]])
        console.log (`Your journey continues through the following stops: [${y}]`)
        z = x.length + y.length
        console.log(`${z} stops in total`)
    }   
        else if (trip[0] === 'lineL' && trip[2] === 'lineN' && lineL.indexOf(trip[1]) >= lineL.indexOf('Union Square') && lineN.indexOf('Union Square') >= lineN.indexOf(trip[3])) {
        for (i = (lineLR.indexOf(trip[1]) + 1); i <= lineLR.indexOf(`Union Square`); i++)
        x.push([lineLR[i]])
        console.log (`You must travel through the following stops on the N [${x}]`)
        console.log (`Change at Union Square`)
        for (j = (lineNR.indexOf(`Union Square`) + 1); j <= lineNR.indexOf(trip[3]);j++)
        y.push([lineNR[j]])
        console.log (`Your journey continues through the following stops: [${y}]`)
        z = x.length + y.length
        console.log(`${z} stops in total`)
    }   
        else if (trip[0] === 'lineL' && trip[2] === 'line6' && lineL.indexOf(trip[1]) <= lineL.indexOf('Union Square') && line6.indexOf('Union Square') <= line6.indexOf(trip[3])) {
        for (i = (lineL.indexOf(trip[1]) + 1); i <= lineL.indexOf(`Union Square`); i++)
        x.push([lineL[i]])
        console.log (`You must travel through the following stops on the N [${x}]`)
        console.log (`Change at Union Square`)
        for (j = (line6.indexOf(`Union Square`) + 1); j <= line6.indexOf(trip[3]);j++)
        y.push([line6[j]])
        console.log (`Your journey continues through the following stops: [${y}]`)
        z = x.length + y.length
        console.log(`${z} stops in total`)
    }   
        else if (trip[0] === 'lineL' && trip[2] === 'line6' && lineL.indexOf(trip[1]) <= lineL.indexOf('Union Square') && line6.indexOf('Union Square') >= line6.indexOf(trip[3])) {
        for (i = (lineL.indexOf(trip[1]) + 1); i <= lineL.indexOf(`Union Square`); i++)
        x.push([lineL[i]])
        console.log (`You must travel through the following stops on the N [${x}]`)
        console.log (`Change at Union Square`)
        for (j = (line6R.indexOf(`Union Square`) + 1); j <= line6R.indexOf(trip[3]);j++)
        y.push([line6R[j]])
        console.log (`Your journey continues through the following stops: [${y}]`)
        z = x.length + y.length
        console.log(`${z} stops in total`)
    }   
        else if (trip[0] === 'lineL' && trip[2] === 'line6' && lineL.indexOf(trip[1]) >= lineL.indexOf('Union Square') && line6.indexOf('Union Square') <= line6.indexOf(trip[3])) {
        for (i = (lineLR.indexOf(trip[1]) + 1); i <= lineLR.indexOf(`Union Square`); i++)
        x.push([lineLR[i]])
        console.log (`You must travel through the following stops on the N [${x}]`)
        console.log (`Change at Union Square`)
        for (j = (line6.indexOf(`Union Square`) + 1); j <= line6.indexOf(trip[3]);j++)
        y.push([line6[j]])
        console.log (`Your journey continues through the following stops: [${y}]`)
        z = x.length + y.length
        console.log(`${z} stops in total`)
    }   
        else if (trip[0] === 'lineL' && trip[2] === 'line6' && lineL.indexOf(trip[1]) >= lineL.indexOf('Union Square') && line6.indexOf('Union Square') >= line6.indexOf(trip[3])) {
        for (i = (lineLR.indexOf(trip[1]) + 1); i <= lineL.indexOf(`Union Square`); i++)
        x.push([lineLR[i]])
        console.log (`You must travel through the following stops on the N [${x}]`)
        console.log (`Change at Union Square`)
        for (j = (line6R.indexOf(`Union Square`) + 1); j <= line6R.indexOf(trip[3]);j++)
        y.push([line6R[j]])
        console.log (`Your journey continues through the following stops: [${y}]`)      
        z = x.length + y.length
        console.log(`${z} stops in total`)
    }   
    
    
        else if (trip[0] === 'line6' && trip[2] === 'line6' && line6.indexOf(trip[1]) <= line6.indexOf(trip[3])) {
        for (i = (line6.indexOf(trip[1]) + 1); i <= line6.indexOf(trip[3]); i++)
        x.push([line6[i]])
        console.log (`You must travel through the following stops on the 6 [${x}]`)
        z = x.length
        console.log(`${z} stops in total`)
    }   
        else if (trip[0] === 'line6' && trip[2] === 'line6' && line6.indexOf(trip[1]) >= line6.indexOf(trip[3])) {
        for (i = (line6R.indexOf(trip[1]) + 1); i <= line6R.indexOf(trip[3]); i++)
        x.push([line6R[i]])
        console.log (`You must travel through the following stops on the 6 [${x}]`)
        z = x.length
        console.log(`${z} stops in total`)
    }  
        else if (trip[0] === 'line6' && trip[2] === 'lineN' && line6.indexOf(trip[1]) <= line6.indexOf('Union Square') && lineN.indexOf('Union Square') <= lineN.indexOf(trip[3])) {
        for (i = (line6.indexOf(trip[1]) + 1); i <= line6.indexOf(`Union Square`); i++)
        x.push([line6[i]])
        console.log (`You must travel through the following stops on the N [${x}]`)
        console.log (`Change at Union Square`)
        for (j = (lineN.indexOf(`Union Square`) + 1); j <= lineN.indexOf(trip[3]);j++)
        y.push([lineN[j]])
        console.log (`Your journey continues through the following stops: [${y}]`)
        z = x.length + y.length
        console.log(`${z} stops in total`)
    }   
        else if (trip[0] === 'line6' && trip[2] === 'lineN' && line6.indexOf(trip[1]) <= line6.indexOf('Union Square') && lineN.indexOf('Union Square') >= lineN.indexOf(trip[3])) {
        for (i = (line6.indexOf(trip[1]) + 1); i <= line6.indexOf(`Union Square`); i++)
        x.push([line6[i]])
        console.log (`You must travel through the following stops on the N [${x}]`)
        console.log (`Change at Union Square`)
        for (j = (lineNR.indexOf(`Union Square`) + 1); j <= lineNR.indexOf(trip[3]);j++)
        y.push([lineNR[j]])
        console.log (`Your journey continues through the following stops: [${y}]`)
        z = x.length + y.length
        console.log(`${z} stops in total`)
    }   
        else if (trip[0] === 'line6' && trip[2] === 'lineN' && line6.indexOf(trip[1]) >= line6.indexOf('Union Square') && lineN.indexOf('Union Square') <= lineN.indexOf(trip[3])) {
        for (i = (line6R.indexOf(trip[1]) + 1); i <= line6R.indexOf(`Union Square`); i++)
        x.push([line6R[i]])
        console.log (`You must travel through the following stops on the N [${x}]`)
        console.log (`Change at Union Square`)
        for (j = (lineN.indexOf(`Union Square`) + 1); j <= lineN.indexOf(trip[3]);j++)
        y.push([lineN[j]])
        console.log (`Your journey continues through the following stops: [${y}]`)
        z = x.length + y.length
        console.log(`${z} stops in total`)
    }   
        else if (trip[0] === 'line6' && trip[2] === 'lineN' && line6.indexOf(trip[1]) >= line6.indexOf('Union Square') && lineN.indexOf('Union Square') >= lineN.indexOf(trip[3])) {
        for (i = (line6R.indexOf(trip[1]) + 1); i <= line6R.indexOf(`Union Square`); i++)
        x.push([line6R[i]])
        console.log (`You must travel through the following stops on the N [${x}]`)
        console.log (`Change at Union Square`)
        for (j = (lineNR.indexOf(`Union Square`) + 1); j <= lineNR.indexOf(trip[3]);j++)
        y.push([lineNR[j]])
        console.log (`Your journey continues through the following stops: [${y}]`)
        z = x.length + y.length
        console.log(`${z} stops in total`)
    }   
        else if (trip[0] === 'line6' && trip[2] === 'lineL' && line6.indexOf(trip[1]) <= line6.indexOf('Union Square') && lineL.indexOf('Union Square') <= lineL.indexOf(trip[3])) {
        for (i = (line6.indexOf(trip[1]) + 1); i <= line6.indexOf(`Union Square`); i++)
        x.push([line6[i]])
        console.log (`You must travel through the following stops on the N [${x}]`)
        console.log (`Change at Union Square`)
        for (j = (lineL.indexOf(`Union Square`) + 1); j <= lineL.indexOf(trip[3]);j++)
        y.push([lineL[j]])
        console.log (`Your journey continues through the following stops: [${y}]`)
        z = x.length + y.length
        console.log(`${z} stops in total`)
    }   
        else if (trip[0] === 'line6' && trip[2] === 'lineL' && line6.indexOf(trip[1]) <= line6.indexOf('Union Square') && lineL.indexOf('Union Square') >= lineL.indexOf(trip[3])) {
        for (i = (line6.indexOf(trip[1]) + 1); i <= line6.indexOf(`Union Square`); i++)
        x.push([line6[i]])
        console.log (`You must travel through the following stops on the N [${x}]`)
        console.log (`Change at Union Square`)
        for (j = (lineLR.indexOf(`Union Square`) + 1); j <= lineLR.indexOf(trip[3]);j++)
        y.push([lineLR[j]])
        console.log (`Your journey continues through the following stops: [${y}]`)
        z = x.length + y.length
        console.log(`${z} stops in total`)
    }   
        else if (trip[0] === 'line6' && trip[2] === 'lineL' && line6.indexOf(trip[1]) >= line6.indexOf('Union Square') && lineL.indexOf('Union Square') <= lineL.indexOf(trip[3])) {
        for (i = (line6R.indexOf(trip[1]) + 1); i <= line6R.indexOf(`Union Square`); i++)
        x.push([line6R[i]])
        console.log (`You must travel through the following stops on the N [${x}]`)
        console.log (`Change at Union Square`)
        for (j = (lineL.indexOf(`Union Square`) + 1); j <= lineL.indexOf(trip[3]);j++)
        y.push([lineL[j]])
        console.log (`Your journey continues through the following stops: [${y}]`)
        z = x.length + y.length
        console.log(`${z} stops in total`)
    }   
        else if (trip[0] === 'line6' && trip[2] === 'lineL' && line6.indexOf(trip[1]) >= line6.indexOf('Union Square') && lineL.indexOf('Union Square') >= lineL.indexOf(trip[3])) {
        for (i = (line6R.indexOf(trip[1]) + 1); i <= line6R.indexOf(`Union Square`); i++)
        x.push([line6R[i]])
        console.log (`You must travel through the following stops on the N [${x}]`)
        console.log (`Change at Union Square`)
        for (j = (lineLR.indexOf(`Union Square`) + 1); j <= lineLR.indexOf(trip[3]);j++)
        y.push([lineLR[j]])
        console.log (`Your journey continues through the following stops: [${y}]`)  
        z = x.length + y.length
        console.log(`${z} stops in total`)
    }   else {
        return false
    }
}