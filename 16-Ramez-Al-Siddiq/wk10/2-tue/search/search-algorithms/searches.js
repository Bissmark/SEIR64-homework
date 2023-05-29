function binarySearch(arr, element) {
    let start = 0;
    let end = arr.length - 1;
  
    while (start <= end) {
      const mid = Math.floor((start + end) / 2);
  
      if (arr[mid] === element) {
        return mid; 
      } else if (arr[mid] < element) {
        start = mid + 1; 
      } else {
        end = mid - 1; 
      }
    }
  
    return -1; 
  }
  
  function recursiveBinarySearch(arr, element, start = 0, end = arr.length - 1) {
    if (start > end) {
      return -1; 
    }
  
    const mid = Math.floor((start + end) / 2);
  
    if (arr[mid] === element) {
      return mid; 
    } else if (arr[mid] < element) {
      return recursiveBinarySearch(arr, element, mid + 1, end); 
    } else {
      return recursiveBinarySearch(arr, element, start, mid - 1); 
    }
  }
  
  module.exports = {
    binarySearch,
    recursiveBinarySearch
  };
  

