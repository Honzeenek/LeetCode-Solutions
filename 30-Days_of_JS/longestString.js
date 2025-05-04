function longestString(arr) {
  let longest = "";
  for (let word of arr) {
    if (word.length > longest.length) {
      longest = word
    }
  }
  return longest;
}

// longestString(["apple", "banana", "cherry", "kiwi"]) ➞ "banana"
// longestString(["dog", "cat", "elephant", "tiger"]) ➞ "elephant"
