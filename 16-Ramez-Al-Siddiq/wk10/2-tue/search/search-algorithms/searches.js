function binarySearch(arr, element) {
    let start = 0;
    let end = arr.length - 1;
  
    while (start <= end) {
      const mid = Math.floor((start + end) / 2);
  
      if (arr[mid] === element) {
        return mid; // Element found, return the index
      } else if (arr[mid] < element) {
        start = mid + 1; // Element is in the right half of the array
      } else {
        end = mid - 1; // Element is in the left half of the array
      }
    }
  
    return -1; // Element not found
  }
  
  function recursiveBinarySearch(arr, element, start = 0, end = arr.length - 1) {
    if (start > end) {
      return -1; // Element not found
    }
  
    const mid = Math.floor((start + end) / 2);
  
    if (arr[mid] === element) {
      return mid; // Element found, return the index
    } else if (arr[mid] < element) {
      return recursiveBinarySearch(arr, element, mid + 1, end); // Search the right half
    } else {
      return recursiveBinarySearch(arr, element, start, mid - 1); // Search the left half
    }
  }
  
  module.exports = {
    binarySearch,
    recursiveBinarySearch
  };
  

