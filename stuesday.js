// Tuesday : Selection Sort
// how does it work: This is very simple. Go through the array, find the index of the lowest element swap the lowest element with the first element. Hence first element is the lowest element in the array.

// Now go through the rest of the array (excluding the first element) find the index of the lowest and swap it with the second element.

// That is how it continues to select (find out) the lowest element of the array and put it on the left until it hits the last element.

// define  a function who take array  as a parameter
// define a variable who take  first index as a minumum value of all
//define for loop which start from 0 till length - 1
//define another for loop which start from i + 1 till length
// if current element value is less than min value  then we assing  current element value  is min value
// also we check if the min valuse in not eqaul to current value then we swap them
// return the aarsy

function  selectionSort(arr){
   
    for (let i = 0; i < arr.length - 1; i++){
         let min = i;
        for (let j = i + 1; j < arr.length; j++){
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        if (min !== i) {
            [arr[i], arr[min]]  = [arr[min], arr[i]];
        }
    }
    return arr;
}
console.log(selectionSort([5, 3, 2, 7, ]));//[ 2, 3, 5, 7 ]

// index   inner loop     min       array
// 0    1(arr1=3<arr0=5)   `1`      [5,3,2,7]
//        min =1
//      2(arr2=2<arr1=3)   `2`      [5,3,2,7]
//      update
//     3(arr3=7<arr2=2)   `2`      [5,3,2,7]

// swap  arr[0] with arr[2][2, 3, 5, 7] 

// 1    2(arr2=5<arr1=3)   1       [2, 3, 5, 7]
