Exercises 2 /* */
/* Solve the following exercises and submit your answers on GitHub under array_processing_exercises. */



/* Exercise 1
Write a function filterRange(arr, a, b) that gets an array arr, looks for elements between a and b in it and returns an array of them.

The function should not modify the array. It should return the new array. For instance:

let arr = [5, 3, 8, 1]

let filtered = filterRange(arr, 1, 4)

alert( filtered )  // 3,1 (matching values)

alert( arr )      // 5,3,8,1 (not modified)*/

function filterRange(arr, a, b) {
  // Create a new array to store the filtered values
  let result = [];

  // Loop through each element of the input array
  for (let i = 0; i < arr.length; i++) {
    // Check if the current element is between a and b (inclusive)
    if (arr[i] >= a && arr[i] <= b) {
      // If so, add it to the result array
      result.push(arr[i]);
    }
  }

  // Return the new array with filtered values
  return result;
}

// Example usage:
let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);

alert(filtered);  // Output: [3, 1] (values between 1 and 4)
alert(arr);       // Output: [5, 3, 8, 1] (original array is not modified)









/* Exercises 2
You have an array of user objects, each one has user.name. Write the code that converts it into an array of names.*/

For instance:

let john = { name: "John", age: 25 }
let pete = { name: "Pete", age: 30 } 
let mary = { name: "Mary", age: 28 }

let users = [ john, pete, mary ]

 // Using .map() to extract the names
let names = users.map(user => user.name);

console.log( names ) // John, Pete, Mary 












/* 

Exercises 3
Write the function getAverageAge(users) that gets an array of objects with property age and gets the average.

The formula for the average is (age1 + age2 + ... + ageN) / N. For instance:*/

let john = { name: "John", age: 25 }
let pete = { name: "Pete", age: 30 }
let mary = { name: "Mary", age: 29 }

let arr = [ john, pete, mary ]

//alert( getAverageAge(arr) )   // (25 + 30 + 29) / 3 = 28  



function getAverageAge(users) {
  // Sum all the ages using reduce()
  let totalAge = users.reduce((sum, user) => sum + user.age, 0);

  // Divide by the number of users to get the average
  return totalAge / users.length;
}

console.log(getAverageAge(arr)); // Output: 28
