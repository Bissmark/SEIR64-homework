// Write code inside the functions
// You will have to figure out what parameters to include
// All functions must use recursion

function findMax( arr ){
    return  arr.length === 1? arr[0]: 
        Math.max( arr[arr.length-1], findMax( arr.slice(0,-1) ) );
};

function factorial( numb ){
    return numb === 1? 1: 
        numb * factorial( numb - 1 );
}

function fibonacci( n ){
    return n === 0? 0:
        n === 1? 1:
        fibonacci( n - 1 ) + fibonacci( n - 2 );
}

function coinFlips( n ){

    recursion = ( n ) => {
        let output = new Array;
        coinFlips( n - 1 ).map( face => {
            output.push(face +'H', face +'T');      // cobine posibilities
         });
         return output;
    };

    return n === 1? ['H', 'T']: recursion( n );
}

function letterCombinations( arr ){
    const basicArr = arr;

    // display combination for two arrays
    const combine = ( combArr, basicArr ) => {
        let output = new Array;
        basicArr.forEach(basicChar => {
            combArr.forEach(combChar => {
                // combination without repeating the same letter
                if ( !combChar.includes(basicChar) ) output.push( combChar + basicChar );
            });
        });
        return output;
    };

    // recursion for letter combination
    const accumulateComb = (n, newArr = basicArr ) => {
        if ( n === 0 ) {
            // define base letters
            return newArr;
        } else {
            // n x (n-1)  ,  n x (n - 1) x (n - 2)  , ... ,   n x (n - 1) x (n - 2) ... 1 
            return newArr.concat( resursion( n-1, combine( newArr, basicArr) ) );
        };
    };

    // call recursion function
    return accumulateComb( arr.length, arr );
}

module.exports = {
    findMax,
    factorial,
    fibonacci,
    coinFlips,
    letterCombinations
}