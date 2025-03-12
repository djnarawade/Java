// Monday: Bubble Sort
// There are many many sorting algorithms available to a programmer: insertion sort, bubble sort, merge sort, heap sort, quick sort, etc. For a cool animation of sorting, follow this link.

// Bubble sort it's one of the easiest to learn at the beginning, so we're going to focus on this one. The main idea of a bubble sort algorithm is to sort an array using bubbles of elements. How it does do that? Its underlying mechanism can be summarised as follows:



// While the array is not sorted, the code would do the following steps:

// Take each pair of 2 adjacent numbers and compare them.
// If their order is not correct, switch them.
// The very important step is to keep in mind that these steps are repeated over and over until the array gets to its final sorted state.

// Let's take an example and show how the steps are applied to a specific array. Given is the following array and we need to sort it in ascending order: 5 1 9 4 3 7

// Take the first pair of numbers and compare them (5 and 1).
// Here, 5 > 1, so we switch them, getting the following array 1 5 9 4 3 7
// Move to the next pair of numbers and compare them: 5 and 9 (take care that we are using the modified array)
// In this case, 5 < 9; their order is ok and we move further.
// The next pair is 9 and 4. Comparing them, we see that 9 > 4, so we switch and get 1 5 4 9 3 7
// Moving further, we have 9 and 3. Again, their order is not correct and they are interchanged 1 5 4 3 9 7
// The last pair in this round is 9 and 7. We see that again, 9 > 7, and switching them gives the array 1 5 4 3 7 9
// Observe that at the end of this list of steps, the array is not yet sorted (not all of it), so we have to go again and apply the same techniques until it reaches this point 1 3 4 5 7 9


// define a function  who take number of array as a parameter
// define for loop start from 0 to array length -1
// in that define another for loop start from 0 to array length - i - 1
// give condition if j element is greater than j + 1 then swap them
// return array

function bubbleSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [ arr[j],arr[j+1]] = [arr[j+1],arr[j]]
            }
        }
    }
    return arr;
}
console.log(bubbleSort([5, 1, 9, 4, 3, 7])); // [1, 3, 4, 5, 7,9]

// i     j       conditio     swap      updated array
// 0=5    0=5     5 > 1      swap     [1, 5, 9, 4, 3, 7]
// 0      1=5     5 > 9     false       [1, 5, 9, 4, 3, 7]
// 0      2=9      9 > 4     swap        [1,5,4,9,3,7]
// 0      3 =9     9 > 3     swap        [1,5,4,3,9,7]
// 0      4 =9     9 > 7     swap        [1, 5,4,3,7,9]

//1= 1    0=1     1 > 5     false        [1, 5,4,3,7,9]
//        1=5     5>4       swap        [1, 4,5,3,7,9]
//        2=5     5>3       swap        [1, 4,3,5,7,9]
//        3=3     5>7       fase        [1, 4,3,5,7,9]