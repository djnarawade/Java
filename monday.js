/*1. Print 1 - 135

Write a program using JavaScript that will print all the numbers from 1 to 135.*/

// we will write a for loop.
// this for loop start with 1 and ends at 135 
for (let i = 1 ; i <= 135; i++ ){
    console.log(i);
}

//i    i <= 135   print   i++ 
//1     true      print1  2
//2     true       2      3
//3
//.
//.
//.                  135   136
//136    false      stop








/*2. Print Odd Numbers 1 - 135

Write a program using JavaScript that will print all the odd numbers from 1 to 135.*/

// we will create a for loop 
// then we add inside condition that if this condition true print it
// this will get us a result

for (let i = 1 ; i <= 135 ; i++) {
    if(i % 2 !== 0){
        console.log(i);
    }
}

/*i        i<=135         i%2 !==0    print     i++
1         true           true          1       2
2         true            false                3
3         true             true        3       4
                                               136
136       false (condition stop)  */




/*3. Sum of Printed Numbers

Write a program that will print all the numbers from 1 to 135 AND the sum of the numbers that have been printed so far. Your output should look similar to this:

Number is: 0 Sum: 0
Number is: 1 Sum: 1
Number is: 2 Sum: 3
Number is: 3 Sum: 6
...
Note: You are NOT allowed to use an array to solve this exercise.*/

/*
we will assign a sum variable to hold the the addition of numbers 
for loop from 1 to 135 
printing number and sum of the number 

*/
let sum = 0
for ( let i = 1; i <= 135; i++){
    sum = sum + i
    console.log(`number is: ${i}  Sum: ${sum}`);
}

/*
i        i<=135      sum        print        i++
1          true       1       1 ,1            2
2          true       3        2,3            3
3           true      6        3,6            4
4          true      10         4,10           5
                                             136
136        false ( consition stops)*/






//4. Print the elements of an array

//Given an array X = [1,4,2,12], write a program that will iterate through the array and print all numbers on the screen. Your program should work with arrays of all sizes.

//we will write a for loop 
//for loop started with 0 and ended to legth of the array
// print result
X = [1,4,2,12];
for(let i= 0; i < X.length; i++){
    console.log(X[i]);
}

/*
i            i< X.length     X[i])print    i++
0            true             1             1
1              true            4            2
2              true            2             3
3              true            12            4
4              false( stop) */



//5. Find Max

//Given an array X, write a program that would find the maximum value of the array. Your program should work also work with negative values (eg. X = [2,-3,-1]) and zero.

//define a value that hold max value 
//create for loop , to go throught the array
// write a condition if the the havle is greater than max value 
// print the solution 

let X =[2,-3,-1];
 let Max =X[0];
for ( let i = 0 ; i < X.length; i++){
    if ( X[i] > Max){
        Max = X[i];
    }
   
} console.log("Max value is:", Max);
/*
i      i < X.length   X[i] > Max   Max = X[i]       print max value   i++
0       true           true          2                 2               1
1        true           false                                          2
2         true            false                                        3
3          false (loop ends)*/




//6. Get Average

//Given an array X, write a program that will return the average value of all elements in the array. For example, for array X = [2,1,3] your output should be 2.

//we have array 
// create the variable wich holds sum and count 
// create for loop to go through each element in the array 
// give the result as sum / count 
        
let X = [2,1,3];
let count = 0; //to count the number of element 
let sum = 0; // to sum of the element values 
for( let i = 0; i < X.length; i++ ){
    count = i + 1;
    sum = sum + X[i];

}
console.log(sum/count);

/*
 i    i < X.length;  count   sum       result    i++ 
0      true           1      0+2 =2                1
1      true           1+1=2   2+1=3                2
2      true            2+1=3  3+3=6                3
3      false (loop end)
                                         6/3=2 */









//7. Eliminate the Negatives

//Given an array X, write a program that will remove all negative numbers and replace them with a 0. For example, for array X = [2,-1,4,-3] the output of your program should be

//[2,0,4,0]

//  create a for loop to go through each elemet 
// create variable which hold O
//print element only i > 0 else put O on that place

let X = [2,-1,4,-3];
let Y = 0;
for( let i = 0 ; i < X.length; i++ ){
    if (X[i] < 0) {
        console.log (Y);
    }  else {
        console.log(X[i]);    
    }
}
// i     i < X.length;   (X[i] < 0)        result        i++ 
// 0      true             false            2             1
// 1      true             true             0             2
// 2      true              false           4             3
// 3      true             true             0             4
// 4      false ( loop stops)



//8. Number to String

//Write a program that takes an array of numbers and turns the negative values into strings.

//For example,

// For array 
//const x= [1,-4,0,-1]  
// The output should be [1,'Turing,0,'Turing'].

// take x array 
// create for loop , to go through each element 
// give condition if element X[i]is less than 0 the result should be 'Turing' else print X[i]

const X = [1,-4,0,-1];
for( let i = 0 ;  i < X.length; i++){
    if(X[i] < 0){
        console.log('Turing');
    } else {
        console.log(X[i]);
    }
    }
    // i   i < X.length  (X[i] < 0)  result  i++
    // 0       true       false       1      1
    // 1       true        true       turing  2
    //2         true        false     0       3
    //3        true          true     turing   4
    //4        false (loop stops)