// Wednesday : Search and Replace
// Perform a search and replace the sentence using the arguments provided and return the new sentence.

// The first argument is the sentence to perform the search and replace on.
// The second argument is the word that you will be replacing (before).
// The third argument is what you will be replacing the second argument with (after).
// NOTE: Preserve the case of the original word when you are replacing it.



// For example, if you mean to replace the word "Book" with the word "dog", it should be replaced with "Dog"

// function myReplace(str, before, after) {
//   return str;
// }
// myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");

// dfine a function with three parameters: str, before, after
// string is the The complete sentence where the search and replace will occur,Before: The word in the sentence that needs to be replaced. After: The new word that will replace the old word.
//check If the original word (before) starts with an uppercase letter, then the new word (after) should also start with an uppercase letter
//If it starts with a lowercase letter, then after should start with a lowercase letter
//return the string by changing the original word to the new word.
function myReplace(str, before, after) {
    //checking if the original word starts with an uppercase letter
    if(before[0] === before[0].toUpperCase()){
        // Capitalize the first letter of 'after'
        after = after[0].toUpperCase() + after.slice(1);
    } else {  
        after = after[0].toLowerCase() + after.slice(1);
    }
    return str.replace(before, after);
}


// Example usage:
console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));
// Output: "A quick brown fox leaped over the lazy dog"

// before     after                 Output    
// jumped    j=lowercase So l       leaped                 