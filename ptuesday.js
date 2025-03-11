// Tuesday: Magic Squares
// A 3x3 magic square is a 3x3 grid of the numbers 1-9 such that each row, column, and major diagonal adds up to 15. Here's an example:

// <code>
// 8 1 6
// 3 5 7
// 4 9 2
// </code>
// The major diagonals in this example are 8 + 5 + 2 and 6 + 5 + 4.

// Write a function that, given a grid containing the numbers 1-9, determines whether it's a magic square. Use whatever format you want for the grid, such as a 2-dimensional array, or a 1-dimensional array of length 9, or a function that takes 9 arguments. You do not need to parse the grid from the program's input, but you can if you want to. You don't need to check that each of the 9 numbers appears in the grid: assume this to be true.



// Example inputs/outputs

// <code>[8, 1, 6, 3, 5, 7, 4, 9, 2] => true
// [2, 7, 6, 9, 5, 1, 4, 3, 8] => true
// [3, 5, 7, 8, 1, 6, 4, 9, 2] => false
// [8, 1, 6, 7, 5, 3, 4, 9, 2] => false
// </code><div>
// </div>
//define a fuction who takes array of numbers as a parameter
// create 2 for loops for rows and columns  where i start fom 0 and end at 3
    // check if sum of numbers in row, column or  and return true if it is and false otherwise
    //check the sum of diagonals is 15 and return true if it is and false otherwise
    // return true if all checks passed otherwise false


function isMagicSquare(grid) {
  // check rows
  for(let i=0; i<3; i++){
if(grid [i] + grid[i+1] + grid[i+2] !== 15){
  return false;
   
 }
}
  // check columns
  for(let i=0; i<3; i++){
   if (grid [i] + grid [i + 3] + grid[i + 4] !== 15){
    return false;
    }
 }
  // check  diagonals
  if (grid[0] + grid[4] + grid[8] !== 15) {
    return false;
  }
  if (grid[2] + grid[4] + grid[6]!== 15) {
    return false;
  }

  return true;

}
  console.log(isMagicSquare([8, 1, 6, 3, 5, 7, 4, 9, 2])); // true

// // [2, 7, 6, 
// // 9, 5, 1, 
// // 4, 3, 8] => true
// for lops
// index    rows     columns       result     
// 0     2+7+6        2+9+4          true
// 1   9+5+1          7+5+3            true
// 2   4+3+8          6+1+8           true

// diagonals 

//    diagonals      result
//     2+5+8          true
//      6+5+4          true                                   

// overall result = true   // All checks passed, the grid is a magic square.


















  