//Wednesday : Title Case a Sentence
//Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lowercase.

//For the purpose of this exercise, you should also capitalize on connecting words like "the" and "of".

//For this algorithm, you can use the split() method.



titleCase("I'm a little tea pot")  // should return a string.
titleCase("I'm a little tea pot")  // should return "I'm A Little Tea Pot".
titleCase("sHoRt AnD sToUt")  // should return "Short And Stout".
// define a function title case which take string as a parameter 
// define a variable which give  string into lowercase and change to array
// for loop to itrrrate through given array 
//change to first letter of the  each  element in the array to capital (to Uppercase , slice to add other letters)
// return the array transformed to the string 


function titleCase(words) {
    let word = words.toLowerCase().split(' ');
    for (let i = 0; i < word.length; i++){
        word [i] = word[i][0].toUpperCase() + word[i].slice(1);
   
 }
 return word.join(' ');
}
console.log(titleCase("I'm a little tea pot")); //"I'm A Little Tea Pot"
console.log(titleCase("sHoRt AnD sToUt")); // "Short And Stout"




/* 
word       i                          changin word
i'm      O =  i'm   / I + m            I'm
a        1=  a  / A                    A
little   2 = little / L + ittle        Little
tea     3 = tea / T + ea                Tea 
pot     4 = pot  /P +ot                Pot

loop ends 

return - I'm  A Little Tea  Pot

*/