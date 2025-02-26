
//Declare a function factorialize(n) that takes an integer n as input and returns the factorial of the provided integer.

//If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.

//Factorials are often represented with the shorthand notation n!

//For example: 5! = 1 * 2 * 3 * 4 * 5 = 120



//Example Outputs:

//factorialize(0) should return 1.
//factorialize(10) should return 3628800.
//factorialize(20) should return 2432902008176640000.

// study material :
    //Factorial of a number is just multiplying it by all the numbers before it down to 1.
    //Special Rule: 0! = 1 (by definition, factorial of 0 is always 1).
    // 5! (read as "5 factorial") means:5 × 4 × 3 × 2 × 1 = 120
    //Multiply by n, then by n-1, then by n-2, all the way down to 1.




//initiate function factorialize(n)
// set factor value to 1 as anything muLtiply by 1 is same vale 
// create for loop wich start with n and end with 1 and set i-- for decreasing i value to one by one 
// multiply the factor with current i value 
// return the factor value 
// for result  callout console .log wih the number we want 

function factorialize (n){
    let fac = 1;   // multiplication needs a starting value.If we don’t start with 1, the multiplication won’t work correctly.
    for (let i = n; i > 0; i--) { // used i = n because i start from nth value and i>0 meand i ends till 1 ,i -- i decreasing from  nth value
    fac = fac * i ; 
 }  return fac;
}   
console.log(factorialize (0)); //  output  1
console.log(factorialize (10)); //output  3628800 
console.log(factorialize (20)); // output 2432902008176640000

//DECREASINGi      loop                                                                
//10               10 *1  =10                                                               
//9                10*9=90
//8                 8*90=720  


//JUST FOR 0

//0     not work the loop as 0 not >0 hence we did not change fac value                1
     