// countOccurrences([1, 2, 3, 2, 4, 2], 2) ➞ 3
// countOccurrences([5, 5, 5, 5], 5) ➞ 4
// countOccurrences([1, 2, 3], 4) ➞ 0

const countOccurences = (arr, num) => {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      count++;
    }
  }
  return count;
};
