function binarySearch(arr, num) {
    let left = 0;
    let right = arr.length - 1;
  
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
  
      if (arr[mid] === num) {
        return mid;
      } else if (arr[mid] < num) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  
    return -1;
}

function recursiveBinarySearch(arr, num, left = 0, right = arr.length - 1) {
    if (left > right) {
      return -1;
    }
  
    let mid = Math.floor((left + right) / 2);
  
    if (arr[mid] === num) {
      return mid;
    } else if (arr[mid] < num) {
      return recursiveBinarySearch(arr, num, mid + 1, right);
    } else {
      return recursiveBinarySearch(arr, num, left, mid - 1);
    }
}
  

module.exports = {
    binarySearch,
    recursiveBinarySearch
}