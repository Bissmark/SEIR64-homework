function sumArrayOfNums(arr){
    let index = 0;
    let sum = 0;
    // Notice the lack of parameters in rSum!
    function rSum(){
      if(index === arr.length){
        return sum;
      }
      sum += arr[index];
      index++;
      return rSum();
    }
    // Once you’ve defined the helper function, make sure you call it!
    return rSum();
  }
  console.log(sumArrayOfNums([2, 4, 5, 8]))
