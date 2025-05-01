function isPalindrome(str) {
  let string = str.split('').reverse().join('')
  if(string === str) {
    return true
  } else {
    return false
  }
}