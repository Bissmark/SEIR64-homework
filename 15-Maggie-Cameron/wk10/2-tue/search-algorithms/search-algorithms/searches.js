function binarySearch(arr, element){
    let start = 0;
    let end = arr.length -1;

    while (start <= end) {
        let middle = Math.floor((start + end ) / 2);

        if (arr[middle] === element) {
            return middle;
        }  else if (arr[middle] < element) {
            start = middle + 1;
        } else {
            end = middle -1;
        }
    };
    //  search through the array non-recursively for the element
    //  if the element is not found, return -1
    //  if the element is found, return the index at which it was found
    
    return -1 
};


function recursiveBinarySearch(arr, element, start, end){
    if (start === undefined) {
        start = 0;
    };
    if (end === undefined) {
        end = arr.length -1;
    };
    if (start > end) {
        return -1;
    };

    let middle = Math.floor((start + end) / 2)

    if (arr[middle] === element) {
        return middle;
    }  else if (arr[middle] < element) {
        return recursiveBinarySearch(arr, element, middle + 1, end);
    }   else {
        return recursiveBinarySearch(arr, element, start, middle -1);
    }

    //  search through the array recursively for the element
    //  you may need to add more parameters to this function!
    //  if the element is not found, return -1
    //  if the element is found, return the index at which it was found
}

module.exports = {
    binarySearch,
    recursiveBinarySearch
}