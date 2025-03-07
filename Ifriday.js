// Friday: Fibonacci Sequence
// A great friend of yours, Fibonacci, just came up with a sequence of numbers that is really easy to compute. However, his time allows him to calculate by hand only the first 10-15 terms of the sequence; of course, he is busy trying to come up with some other interesting sequence. So he gives you the first terms and asks you to write an algorithm that will return the n-th term in the sequence.

// His sequence looks like this: 1 1 2 3 5 8 13 21 34 ...



// Immediately you find the pattern: setting the first two terms to be 1, any other term is the sum of the two previous terms. 1+1=2, 1+2=3, 2+3=5, 3+5=8, 5+8=13 and so on.

// In this way, if n would be equal to 4 your result should be 3; but if n is 7, then the result is 13.

// But these are small numbers, which can be computed by hand. What about bigger numbers? Let's see what results you will get for the following n's:

// n = 43 -> x
// n = 101 -> x
// n = 227 -> x
// n = 491 -> x
// n = 881 -> x

// define a function which take number as a parameter
// define a three variable and set one variable 1 
// define for loop  start from 2 and end at given number
// shift the value of one variable is sume of first 2 vriables 
// return the current valriable which hold sum 


function fib(num){
    seq = 1;
    seq1= 0;
    seq2= 0;
    for (let i=2; i<=num; i++){
        seq2= seq1
        seq1= seq
        seq = seq1+seq2;
    }
    return seq;
}

console.log(fib(4)); //3
console.log(fib(43)); // 433494437
console.log(fib(101)); //573147844013817200000
console.log(fib(227)); //1.2322798146364122e+47
console.log(fib(491)); //1.8341986124518392e+102
console.log(fib(881)); // 5.869837224475641e+183

//  index       seq 2     seq1      seq
//               0          0        1
//     2        0           1        0+1=1
//     3         1         1          1+1=2
//     4         1        2            2+1=3

//     return = 3
