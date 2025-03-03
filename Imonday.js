//Monday: Largest Number in Arrays
//Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

//Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].

//inside function we define empty variable wich holds value of the largest number
// we define for loop to go through arr [i]
// we push value of i to new array 
// we definr for loop to go through sub arr[i]
// in second for lop we gave condition if  sub arr is > arr i then  arr i = sub arr [i]
// we return array 







function largestOfFour(arr) {
     let newArray = [];
     for ( let i = 0 ; i < arr.length; i++){
         newArray.push(arr[i][0]);
       for ( let j = 0; j < arr[i].length ; j++ ){
        if (newArray[i]  < arr[i][j] ){
            newArray[i] = arr[i][j];
        }
       }  
     }

  return newArray;
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));

//Returns [5,27,39,1001]

/*
i            first loop              second loop        new array       condition                             
0       0 = 4 5 1 2  0 = 4          j= 0 = 4               4          4 < arr 4 false              
             0 = 5                     1= 5                5            4 < 5 tue update new arr                
             0 = 1                    2= 1                              5 < 1 false
             0 = 2                    3 =2                 [5]              5 < 2 false 
1       1= 13, 27, 18, 26           j=0 = 13              5,13                13 < 13 false 
          1=  27                      1= 27                5,27                 13 < 27 true update newarray        
           1= 18                       2= 18                5,27                  27< 18 false 
           1 = 26                     3= 26                 [5,27]                  27 < 26 false 
*/                  