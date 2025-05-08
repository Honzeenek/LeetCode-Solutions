function filterPositives(arr) {
  const positives = [];
  for (let i = 0; i < arr.length; i++) {
    arr[i] > 0 ? positives.push(arr[i]) : null
  }
  return positives;
}
