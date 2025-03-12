// Friday: Sum All Odd Fibonacci
// Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

// The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5, and 8.

// For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than 10 are 1, 1, 3, and 5.



// function sumFibs(num) {


//   return num;
// }
// sumFibs(4);

//we have integer 
// have to find all odd nubers 
// add he add odd numbers in fibonacci sequence

//create 2 functions ne is for to create fib sequence and another to check nub is odd
// define first function which takes a number as parameter
// define a variable who takes 0, 1 as first two number of fib seqvwnce as an array
// create a for loop start from  index 2 till the number
// update  current number as the addition of previous 2 numbers
// return the fib sequene
// define 2nd function who takes number as parameeter
// define new variable is equal to first function
// definr new variable to sum the odd numbers
// define for loop start with 0 and till the new fib length
//check if the newfib number id odd if it is then  update the sum plus current number 
// return the sum




function sumFibs(num) {
   let fib = [0,1];
  for(let i = 2; i <= num; i++ ) {
    fib[i] = fib[i-1] + fib[i-2];

  }
  return fib;
}
function sumOddFib(n) {
  let newFib = sumFibs(n);
  let sum = 0;
  for (let i = 0; i <newFib.length ; i++) {
    if (newFib[i] % 2 !== 0) {
      sum += newFib[i];
    }
  }
  return sum;
}

console.log(sumOddFib(4));

//   newfib=  sumfibs 4

// sumfibs 4
// i    fib
// 0    0
// 1    1
// 2   1+0=1
// 3  1 + 1=2
// 4  2 + 1 =3
 
// newfib = 0, 1, 1, 2, 3

// i          newFib[i] % 2 !==0          sum = newFib[i]+sum
// 0 = 0                -                    0
// 1 = 1      [1] % 2 !== 0  true          0 = 0 + 1 == 1
// 2 =1       1  % 2 !== 0  true           1 = 1 + 1 == 2
// 3=2        2 % 2 !== 0   false          
// 4 = 3        3 % 2 !== 0   true            2 = 3 + 2 == 5

// return 5