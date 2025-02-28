/*Thursday: Palindrome Checker
Declare a function isPalindrome(str) that takes a string as an input.

Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.*/


// declare a function isPalindrome(str)
// let declare a variable which hold value of Palindrome string 
// create a for loop to check if value of newstring is == to old if yes then we give return true else false 

function isPalindrome(word){ // declaired function 
    let newWord = word.toLowerCase().split("").join("") 
      // .split splits the word into an array of substrings by spaces (in case there are any spaces in the string).
  //  join then reassembles the string without spaces.
  // toLowerCase( converts the entire string to lowercase to ensure case-insensitive comparison.


   // 3. Check if the word is a palindrome by comparing characters from both ends:
    for(let i = 0; i < newWord.length/2; i++ ){
        if (newWord[i] !== newWord[newWord.length - i - 1] ){
            return false; // If any character does not match, it's not a palindrome.
        }
    }
    return true;
}

console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello")); // false
console.log(isPalindrome("Racecar")); // true (ignores case)


/*
 racecar 

i          newWord[newWord.length - i - 1]      comparison
O=r         r (6)                                     match
1=a          a  (5)                               match 
2=c           c (4)                               match
3=e            e (3)                                all matched redult True    */