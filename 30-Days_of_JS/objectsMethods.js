// countVowels('hello') // ➞ 2
// countVowels('xyz')   // ➞ 0
// countVowels('Aeiou') // ➞ 5

const countVowels = (string) => {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;

    for(let char of string.toLowerCase()) {
        if(vowels.includes(char)) {
            count++;
        }
    }


}
