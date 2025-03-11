// Monday: Game of 3s
// We want to play a "Game of 3s". Here's how you play it:

// First, you pick a random number. Then, repeatedly do the following:

// If the number is divisible by 3, divide it by 3.
// If it's not, either add 1 or subtract 1 (to make it divisible by 3), then divide it by 3.
// The game stops when you reach "1".



// Challenge Description
// The input is a single number: the number at which the game starts. Write a program that plays the 3s game, and outputs a valid sequence of steps you need to take to get to 1. Each step should be output as the number you start at, followed by either -1 or 1 (if you are adding/subtracting 1 before dividing), or 0 (if you are just dividing). The last line should simply be 1.



// Input Description
// The input is a single number: the number at which the game starts.

// gameOfThree(100);

// Output Description
// The output is a list of valid steps that must be taken to play the game. Each step is represented by the number you start at, followed by either -1 or 1 (if you are adding/subtracting 1 before dividing), or 0 (if you are just dividing). The last line should simply be 1.

// //OUTPUT:
// 100 -1
// 33 0
// 11 1
// 4 -1
// 1

//define a fuction gameOfThree that takes a number n as argument
    // define a while loop that continues as long as n is not equal to 1
    //define adjustment variable as 0 considering it devisible by 3 we adjust this value later
    // inside the loop, check if n is divisible by 3
        // if it is, divide n by 3 and have reminder 1 then set adjustment to -1 also
        //if the remainder is 2, the set the adjustment to 1
        // lastly we print n and adjustment value and the n 
        //before printing n we add the adjustment value to n and devide it by 3 
    // after the loop ends, print 1
function gameOfThree(n) {
    while (n !== 1) {
        let adjustment = 0;  // Keep reducing n until it becomes 1 n !== 1 means "as long as n is NOT 1"
        if (n % 3 === 1) {
           adjustment = -1;
        }else if (n % 3 === 2) {  
            adjustment = 1; 
        }
           console.log(n ,adjustment); 
                n = (n + adjustment) / 3;
        }
        console.log(1);
    }
    gameOfThree(100);
   // 100 -1
    // 33 0
    // 11 1
    // 4 -1
     // 1
    // currentnumber    remainder adjustment      n
    // 100                  1         -1       99/3=   33
    // 33                   0         0        	33 / 3 = 11
    // 11                   2         1          12 / 3 = 4
    //   4                  1         -1           3 / 3 = 1
    //  1                   -         -          1
     
     
  