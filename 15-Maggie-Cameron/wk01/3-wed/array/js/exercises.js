console.log("is this thing on?")

// max two numbers 
const maxOfTwoNumbers = function (num1, num2) {
    if (num1 > num2) {
        return num1;
    } else { 
    return num2;
}
};
console.log(`The greater number of 5 and 10 is ${ maxOfTwoNumbers(5, 10) }.`);
console.log(`The greater number of 10 and 5 is ${ maxOfTwoNumbers(10, 5) }.`);
console.log(`The greater number of 23 and 23 is ${ maxOfTwoNumbers(23, 23) }`);
console.log(`The greater number of -10 and -100 is ${ maxOfTwoNumbers(-10, -100) }.`);


// max of three numbers 
const maxOfThreeNumbers = function (num1, num2, num3) {
    if (num1 > num2, num1 >num3) {
        return num1;
    } else if (num2 > num1, num2 > num3){
    return num2;
    } else { (num3 > num1, num3 > num2)
        return num3;
}
};
console.log(`The greater number of 5, 10 and 20 is ${ maxOfThreeNumbers(5, 10, 20) }.`);
console.log(`The greater number of 11, 4 and 3 is ${ maxOfThreeNumbers(11, 4, 3) }.`);
console.log(`The greater number of 23, 44 and 72 is ${ maxOfThreeNumbers(23, 44, 72) }.`);
console.log(`The greater number of 3, 40 and 9 is ${ maxOfThreeNumbers(3, 40, 9) }.`);


//VOWEL FINDER
const vowelFinder =  function(a){
        if (a === 'a' || a ==='e'|| a ==='i'|| a ==='o'|| a ==='u') {
           return 'true'; 
        } else { 
            return 'false';
        }
}
    console.log(vowelFinder("o"));  



//CANNOT GET ANYTHING BELOW TO WORK :(
    

/*
//SUM ARRAY
    const sumArray = [1,2,3,4]
    for (let i= 0; i < sumArray.length; i ++) {
    console.log(sumArray[i] + length)
    }


//filter long words
const filterLongWords = function (arr,num)*/