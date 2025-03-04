//Tuesday: Find the longest Word in a String
//Return the length of the longest word in the provided sentence.

//Your response should be a number. For these algorithms, you are allowed to use the split() method.



findLongestWord("The quick brown fox jumped over the lazy dog")  // should return a number.
findLongestWord("The quick brown fox jumped over the lazy dog"). // should return 6.
findLongestWord("May the force be with you")  // should return 5.


// define a function of findLongestWord with String as a parameter 
// define variable wich convert string to array
// define  a variable wich holds large number of words 
// create a for loop to go through array 
// we gave condition if to check to the length 
// if true assign the word length to the variable 
// return the large number variable

function findLongestWord(str) {
    let word = str.split(" "); // convert string to array 
    let large = 0; // Start with 0 as the longest word length

    for ( let i = 0; i < word.length; i++){
        if ( word[i].length > large ){
            large = word[i].length;
        }

    }
  return large;
}

console.log(findLongestWord("May the force be with you")) // return 5.
console.log (findLongestWord("The quick brown fox jumped over the lazy dog")) // 6

/*
  word       word length        condition         large            return 
  may           3                3>0  true         3
  the           3                3> 3 false        3
  force          5               5> 3   treu       5 updated 
  be            2                 2> 5   false      5
  with          4                 4> 5   false      5
  you          3                  3> 5 false        5                5 
*/