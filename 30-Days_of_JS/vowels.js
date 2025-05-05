function countVowels(str) {
  const vowels = ["a", "e", "i", "o", "u"]; // Vowels array
  let count = 0; // To keep track of the vowel count

  for (let char of str.toLowerCase()) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}
