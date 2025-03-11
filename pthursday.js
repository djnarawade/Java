// Thursday: Sum All Primes
// Sum all the prime numbers up to and including the provided number.

// A prime number is defined as a number greater than one and having only two divisors, one and itself. For example, 2 is a prime number because it's only divisible by one and two.

// The provided number may not be a prime.



// function sumPrimes(num) {
//   return num;
// }
// sumPrimes(10);


// The results should be like :

// sumPrimes(10)  // should return a number.
// sumPrimes(10) // should return 17.
// sumPrimes(977)  // should return 73156.

//define a fuction who take number as a parameter  to check number is prime or not 
//check if less than 2 then return false
// create a for loop start from 2 till less than n-1 th value 
// if n divisible by i have remainder 0 then return false
// else return true
// define a function who take number as a parameter to sum all prime numbers up to and including the provided number
//define a variable sum as 0
//create a for loop start from 2 till less than equal to n th value 
//check if the number is prime 
// if  yes then add it to sum
//update sum plus current i prime value 
// return sum
function isPrime(n){
 if (n < 2) return false;
 for(i=2; i<n; i++){
    if(n % i=== 0){
        return false;
    }
   
 }
 return true;
}

function sumPrimes(num){
    let sum =0;
    for(let i=2; i<=num; i++){
        if(isPrime(i)){
            sum += i;
        } 
    }
    return sum;
}


console.log(sumPrimes(10)); // return 17

console.log(sumPrimes(977)); // return 73156

// num    loop    isPrime(i)loop      sum 
// 10   i= 2        true             2
//      i=3        true              3+2=5
//      i=4        false            -
//      i=5        true            5+5 =10
//      i=6        false            -
//      i=7        true            10+7 =17
//      i=8        false            -
//      i=9        false           17
//      i=10       false           17
