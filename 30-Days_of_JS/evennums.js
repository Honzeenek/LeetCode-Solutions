function getEvens(arr) {
  const evennums = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evennums.push(arr[i]);
      return evennums;
    }
  }
}
