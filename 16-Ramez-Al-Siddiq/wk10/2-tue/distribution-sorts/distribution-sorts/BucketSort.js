function bucketSort(items) {
  // Find the maximum value in the array
  const max = Math.max(...items);
  
  // Create buckets
  const bucketSize = Math.floor(max / 5) + 1;
  const buckets = Array.from({ length: bucketSize }, () => []);

  // Distribute items into buckets
  for (let i = 0; i < items.length; i++) {
    const index = Math.floor(items[i] / 5);
    buckets[index].push(items[i]);
  }

  // Sort each bucket and concatenate the sorted buckets
  const sorted = [];
  for (let i = 0; i < buckets.length; i++) {
    buckets[i].sort((a, b) => a - b);
    sorted.push(...buckets[i]);
  }

  return sorted;
}

module.exports = bucketSort;
