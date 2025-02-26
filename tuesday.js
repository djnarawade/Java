
//1. Addition

//Add all the values between 200 and 2700 (inclusively) that are divisible by 3 or 5, but not both 3 and 5. To solve this task you might want to use the modulus operator.

// get a variable to hold the sum of numbers
// create for loop from 200 to 2700
// give condition of te numbers are are divisible by 3 or 5 nut not bot 3 and 5
//add sum of numbers 
// print  result 

let sum = 0
for (let i = 200; i <=2700; i++ ){
    if((i % 3===0 || i % 5=== 0) && !(i % 3===0 && i % 5=== 0)){
        sum+= i
    }
}
console.log(sum)

// index    condition    result
//    200       true     0+200=200
//   201       TRUE       200+201=402
// 240          false      sum..




//2. Shift the Values

//Given any array X, for example [2,1,6,4,-7], create an algorithm that shifts each number by one to the front. When your program is done the output for array [2,1,6,4,-7] should be [-7,4,6,1,2].

// create a new empty array to hold the value of new array 
// create for loop to gor though each elemet , and use unshift to put value of new element to front of i 
// get result of new array 

let X = [2,1,6,4,-7];
let newarray = [];
for (let i = 0; i < X.length; i++ ){
    newarray.unshift(X[i]);
}
console.log(newarray);

// index    newarray
// 0         2
// 1         1,2
// 2        6,1,2












//3. FizzBuzz

//Create an algorithm that inserts the numbers from 1 to 135 into an array, while replacing the values that are divisible by 3 with the word "Fizz", the numbers that are divisible by 5 with the word "Buzz", and the numbers that are divisible with 3 and 5 with the word "FizzBuzz".

//Your output should look like [1,2, 'Fizz',4, 'Buzz', 'Fizz',7, 8, ...]

// define a new array which is empty
// for loop from 1 to 135
// check condition if  the numbers that are divisible with 3 and 5 replace  with the word "FizzBuzz"
// else if divisible by 3 replace with the word "Fizz"
// else if divisible by 5 replace with the word "Buzz"
//else print the i 

let array = [];
for (let i = 1; i <=135; i++ ) {
    if(i % 3 ===0  &&  i % 5 === 0 ) {
        array [i] =  "FizzBuzz"
    } else if (i % 3 ===0 ){
         array [i] =  "Fizz"
    } else if (i % 5 ===0 ){
        array [i] =  "Buzz"
   }else {
    array [i] = i
   }
}
console.log(array)

// index      first    second     third      result 
//     1      false    -                         1  
//     2      false                              2
//     3       true      true                   fizz
//     4       false                            4
















//4. Fibonacci

//For a Fibonacci sequence starting at 0 and 1 add up all the values below 1,000,000.

//A Fibonacci sequence is an infinite series of numbers that is created by adding the last two numbers in the series. A series would start with the numbers 0 and 1 in place, followed by 1 (0+1), 2 (1+1), 3 (1+2), 5 (3+2), etc.

//0 1 1 2 3 5 8 13 21...

// we will use fibonacci sequence using aaray 
// we wiil stast with function fibseries,and define a variable which hold sequence of first 2 numbers of fibonacci 
//To generate the next number in the Fibonacci sequence, each number is the sum of the two previous numbers. We use a loop to compute each number iteratively, storing it in the array.
// store each value of sequence we will push it into array
// we will get result in array of fib 

function fibseries( n ){
    let fib = [0,1]

    for ( let i = 2; i < n; i++){
        fib[i] = fib[i-1] + fib[i - 2];
    }
   return fib;
}
 
console.log(fibseries( 1000000));


 
//    i           fib i                                                         result array
//    2            1+0=1                                            0,1(already in the arra add 1 it become 0,1,1 )
//     3           1+1=2 (we add the values which on that indes )                0 1 1 2
//    4            2+1=3                                                        0 1 1 2 3




//5. Remove the Negative

//Given any array X, for example [1,-2,4,1], remove the negative numbers, so that the output becomes: [1,4,1].

// define x array 
// define arrya of positive number with using filter 
// we will get output 

let X = [1,-2,4,1];
let positive = X.filter(i => i >= 0);

console.log(positive);

// X[i]          condition         result 
//   1              1>0 true            1
//   -2                 false            discarded 
//    4                true              4
//    1                true               1







//6. Communist Censorship

//Given the array of strings X = ['Man', 'I','Love','The','Matrix','Program'], replace every letter of the word Program with *, so the output would be ['Man', 'I','Love','The','Matrix','*******']. Then make your algorithm work for any word of your choice

// define variable wich holde the word which we want to deleate 
// define the empty string which holds new values or updated values 
// create for loop for new string to go through each loop 
// create for loop for string which go through x 

let X = ['Man', 'I','Love','The','Matrix','Program'];
let deleatwords =  'Love';
let Y = '';
for ( let i = 0 ; i < deleatwords.length; i++ ){
   Y+= '*';
}
for (let i = 0; i < X.length; i++ ){
    if (deleatwords == X[i]){
        X[i] = Y;
    }
   
}
console.log(X);

//  i   condition      result 
//  0     false        man 
//  1      false       I
//  2       true       ****