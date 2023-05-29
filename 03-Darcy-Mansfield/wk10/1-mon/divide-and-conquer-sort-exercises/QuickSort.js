function quickSort(arr){
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr.shift();

  // O(N)
  const lessThan = [];
  const greaterThan = [];
  arr.forEach((element) => {
    if (element < pivot) {
      lessThan.push(element);
    } else {
      greaterThan.push(element);
    }
  });

  return [...quickSort(lessThan), pivot, ...quickSort(greaterThan)] // ... will flatten out the arrays

}

module.exports = quickSort;