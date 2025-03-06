//Thursday: Sum All Numbers in a Range
//W//e'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.

// define a function who holds a parameter of number , let that number be x and y
// we condition if x > y then x, y = y, x  
// define a variable which hold sum of the number 
// define a for loop to go through the number from start to end 
// and we undate the sum as  sum plus the current number 
// we reurn sum 



function sumAll([x,y]) {
    if(x > y){
      [x , y] = [y,x]; // to swap the values  properly
    }
   let sum = 0;
 for (let i = x;i <= y; i++){
    sum += i ;
 }
 return sum;
}

console.log(sumAll([4, 1]));//10




//The lowest number will not always come first.


sumAll([4, 1])  // should return 10.
sumAll([5, 10])  // should return 45.


/* 
    condition     index        sum 
   true 1, 4     0 = 1       0 + 1= 1
                 1=  2       1 + 2 = 3
                 2=   3      3 +  3= 6
                 3 =  4       6 + 4 = 10 

                                             return = 10

*/