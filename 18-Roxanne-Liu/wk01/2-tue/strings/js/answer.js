// DrEvil
function drEvil(amount) {
    if (amount === 1000000) {
        console.log(`${ amount } dollars (pinky).`);
    } else {
        console.log(`${ amount } dollars.`);
    }
};
drEvil(1000);

// MixUp
function mixUp(strA, strB) {
    let mix1 = strB.slice(0, 2) + strA.slice(2); 
    let mix2 = strA.slice(0, 2) + strB.slice(2);
    console.log(`${ mix1 } ${ mix2 }`);
};
mixUp('James', 'Bond');

// FixStart
// i can't figure out the logic...
// function FixStart(str) {
//     for(let i=1; i<str.length; i++) {
//         if (str.indexOf(str.)) {
//             newStart = str.replace(str[0], "*");
//         }
//     }
// };
// fixStart('lollipop');

// Verbing
function verbing(str) {
    if (str.length >= 3) {
        if (str.slice(-3) === 'ing') {
            console.log(`${ str }ly`);
        } else {
            console.log(`${ str }ing`);
        }
    } else {
        console.log(`${ str }`);
    }
};
verbing('fly');

// NotBad
function notBad(str) {
    let notIndex = str.indexOf('not');
    let badIndex = str.indexOf('bad');
    if (badIndex > notIndex) {
        console.log(`${ str.slice(0, notIndex) } good${ str.slice(badIndex + 3)}`);
    } else {
        console.log(`${ str }`);
    }
};
notBad("Today's weather is not so bad.");