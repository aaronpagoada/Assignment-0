function isPalindrome(word) {
  let lowerCaseWord = word.toLowerCase();
  let length = word.length;
  
  for(let i = 0; i < length / 2; i++){
    if(lowerCaseWord[i] !== lowerCaseWord[length - i - 1]){
      return false;
    }
  }

  return true;
}

// Do not edit this line;
module.exports = isPalindrome;