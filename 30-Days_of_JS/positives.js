function filterPositives(arr) {
  const positives = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      positives.push(arr[i])
    }
  }
  return positives;
}
