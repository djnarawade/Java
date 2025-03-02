/*Firday: 3rd Highest Number in Array
Having an array of numbers, write an algorithm that will return the 3rd highest number in the array. Your algorithm should do only one iteration of the array (just one for/while loop).

Example:

//Using the array 
const arr = [5, 2, 8, 20, -2, 0, 11, 7, 3, 9, 31]
//The correct answer is : 11*/


// we declair function 
// in that function we declare value of first number ,second number , third numer is 0 
// we create for loop to check each number 
// in that loop we chack if third no i value is > assumed first ,second third which is 0 
// check through loop and as per change value of fn ,sn ,tn
// we will return third number value 

const arr = [5, 2, 8, 20, -2, 0, 11, 7, 3, 9, 31]

function thirdHighest(arr) {
 let firstNumber = arr[0] ; let secondNumber = arr[0] ; let thirdNumber = arr[0];

for (let i = 1 ; i < arr.length; i++ ){
    if (arr[i] > firstNumber ){
       thirdNumber = secondNumber  ; 
       secondNumber= firstNumber ;
        firstNumber = arr[i];

    } else if (arr[i] >  secondNumber && arr[i] < firstNumber){
        thirdNumber = secondNumber;
        secondNumber = arr[i];


    }else if(arr[i] > thirdNumber && arr[i] < secondNumber ){
        thirdNumber = arr[i];

}

}
return thirdNumber;
}

console.log(thirdHighest(arr));  // 11


//Iteration	Current Number	First Number	Second Number	Third Number
//1	             5	            5           	5	         5
//2	                 2	         5	           5          	5
//3	                 8            8          	5         	5
//4	              20	          20	          8       	5
//5	            -2	              20	          8          5
//6	              0	              20	         8           5





