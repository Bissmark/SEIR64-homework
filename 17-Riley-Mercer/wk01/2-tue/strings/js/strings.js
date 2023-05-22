// Create a function called DrEvil. It should take a single argument, an amount, and return ' dollars', except it will add '(pinky)' at the end if the amount is 1 million.
const DrEvil = function(dollars){
    if (dollars === 1000000) {
        result = `${dollars} dollars (evil).`;
    }    else {
        result = `${dollars} dollars`;
    }
    return result;    
}

console.log(DrEvil(1000000))

// Create a function called mixUp. It should take in two strings, and return the concatenation of the two strings (separated by a space) slicing out and swapping the first 2 characters of each. You can assume that the strings are at least 2 characters long. For example:
const mixUp = function(stringOne, stringTwo){
    const firstLetterStringOne = stringOne.charAt(0);
    const firstLetterStringTwo = stringTwo.charAt(0);
    const remainderStringOne = stringOne.substring(1);
    const remainderStringTwo = stringTwo.substring(1);
    const result = firstLetterStringOne.concat(remainderStringTwo, " ", firstLetterStringTwo, remainderStringTwo);
    return result;
}

console.log(mixUp("Hello World", "Goodnight World"))

// Create a function called fixStart. It should take a single argument, a string, and return a version where all occurences of its first character have been replaced with '*', except for the first character itself. You can assume that the string is at least one character long.

const fixStart = function(theString) {
    theStringFirst = theString.charAt(0);
    resultOne = theString.replaceAll(theStringFirst, "*");
    resultTwo = resultOne.replace("*", theStringFirst);
    return resultTwo;
}
console.log(fixStart("Paper Plane"));

// Create a function called verbing. It should take a single argument, a string. If its length is at least 3, it should add 'ing' to its end, unless it already ends in 'ing', in which case it should add 'ly' instead. If the string length is less than 3, it should leave it unchanged.


const verbing = function(verb){
let verbresult = null;
    if (verb.length >= 3 && verb.endsWith("ing")){
    verbresult = `${verb}ly`;
    } else if (verb.length >= 3) {
    verbresult = `${verb}ing`;
    } else {
        verbresult = verb;
    }
    return verbresult
}

console.log(verbing("runn"))

// Create a function called notBad that takes a single argument, a string.
//     It should find the first appearance of the substring 'not' and 'bad'.
//     If the 'bad' follows the 'not', then it should replace the whole 'not'...'bad' substring with 'good' and return the result.
//     If it doesn't find 'not' and 'bad' in the right sequence (or at all), just return the original sentence.

const notBad = function(searchString){
    if (searchString.indexOf('bad') > searchString.indexOf('not')){
        stringResult = searchString.replace('not bad', 'good');
    }
    return stringResult;
}
console.log(notBad("this soup is not bad"))