function bucketSort(arr) {
  let min = Math.min(...arr);
  let max = Math.max(...arr);

  let bucket = Array(max - min + 1).fill(0);

  for (let i = 0; i < arr.length; i++) {
    let index = arr[i] - min;
    bucket[index]++;
  }

  let sortedArr = [];
  for (let i = 0; i < bucket.length; i++) {
    while (bucket[i] > 0) {
      sortedArr.push(i + min);
      bucket[i]--;
    }
  }

  return sortedArr;
}


module.exports = bucketSort;
