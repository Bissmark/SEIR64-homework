function binarySearch(arr, element){
    //  search through the array non-recursively for the element
    let arrIndex = 0
    for(let i = 0; i< arr.length; i++){
        if(element === false){
            return arrIndex = -1
        }
        else{
            return arr.indexOf(element);
        }
    }
    //  if the element is not found, return -1
    //  if the element is found, return the index at which it was found
}

function recursiveBinarySearch(arr, element){
    let arrIndex=0;
    if(arr.length <= 1 && element === false){
        return arrIndex = -1;
    }
    let middle = Math.floor(arr.length / 2);
    let left = arr.slice(0, middle);
    let right = arr.slice(middle);

}
    

    
    //  search through the array recursively for the element
    //  you may need to add more parameters to this function!
    //  if the element is not found, return -1
    //  if the element is found, return the index at which it was found


module.exports = {
    binarySearch,
    recursiveBinarySearch
}