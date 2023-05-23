

function binarySearch(arr, element){

    
    let end = arr.length - 1
    let start = 0

    while (start <= end) {

        let middle = Math.floor((start + end) / 2)

        if (arr[middle] === element) {
            return middle
        } else if (arr[middle] < element)
            start = middle + 1
        else {
            end = middle - 1
        }
    }
    return -1
}

function recursiveBinarySearch(arr, element, start=0, end=arr.length - 1) {
    
    if ( start > end ) {
        return -1
    }

    let middle = Math.floor((start + end) / 2)

    if ( element === arr[middle] ) {
        return middle
    }

    if ( element < arr[middle] ) {
        end = middle - 1
    } else {
        start = middle + 1
    }

    return recursiveBinarySearch(arr, element, start, end)
}

module.exports = {
    binarySearch,
    recursiveBinarySearch
}