// sumOfSquares([1, 2, 3]) ➞ 14  // 1² + 2² + 3² = 1 + 4 + 9 = 14
// sumOfSquares([4, 5]) ➞ 41     // 4² + 5² = 16 + 25 = 41

const sumOfSquares = (arr) => {
    let sum = 0;
    for(let i = 0; i < arr.length; i++ ) {
        sum += arr[i] * arr[i]
    }
    return sum;
}