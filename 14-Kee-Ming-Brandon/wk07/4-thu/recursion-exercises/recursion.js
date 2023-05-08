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

function letterCombinations( Arr ){


    // Check if array include highest degree combination which include everything single letter
    const checkNumbOfLetter = ( arr, numb ) => {
        arr.forEach(str => {
            if ( str.length === numb ) return turn; 
        });
        return false;
    };

    // display combination 
    const combine = ( combArr, basicArr ) => {
        let output = new Array;
        basicArr.forEach(basicChar => {
            combArr.forEach(combChar => {
                if ( !combChar.includes(basicChar) ) output.push( combChar + basicChar );
            });
        });
        return output;
    };

    // const getCombination = ( Arr, n ) => {

    //     return checkNumbOfLetter( combArr, n ) ? combArr:
    //         combArr = combine( combArr, basicArr ).concat( basicArr, basicArr )    getCombination( n - 1 )

    // // return checkNumbOfLetter( combArr, n ) ? combArr: 
    // //     combArr = combine( combArr, basicArr ).concat( basicArr, basicArr ) ;
    // };

    if ( basicArr[0] === 1 ) {
        const data = {
            1: basicArr
        };
    } else {
        data.
    }


    if ( checkNumbOfLetter( basicArr, 1 ) ) {
        prevArr;
    } else {
        letterCombinations( basicArr )
    };
}

module.exports = {
    findMax,
    factorial,
    fibonacci,
    coinFlips,
    letterCombinations
}