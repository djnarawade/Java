/* # study matetial 
Feature	                     Old Way (ES5)	                         New Way (ES6)
Variable Declaration	     var             	                     let, const
Functions	               function sum(a, b) { return a + b; }	      const sum = (a, b) => a + b;
String Concatenation	        "Hello " + name	                          `Hello ${name}`
Conditionals	                if-else	                                 ? : (Ternary Operator)
Array Looping	                              for	                      map() when you want to transform each item in an array.
Filtering Data	                          for + if	                      filter() to remove unwanted values from an array.
Browser Support	                Works everywhere             	          Needs Babel */













/*Exercise 1
//We have a simple object:

let user = {
  name: "John",
  years: 30
}
Write the destructuring assignment that reads:

name property into the variable name.
years property into the variable age.
isAdmin property into the variable isAdmin (false if absent)*/

let user = {
  name: "John",
  years: 30
}


let{ name, years:age, isAdmin = false} = user;


console.log(name);    // John
console.log(age);     // 30
console.log(isAdmin); // false (default value)





/*Exercise 2
Give the right name:

Create the variable with the name of our planet. How would you name such a variable?
Create the variable to store the name of the current visitor. How would you name that variable?*/

let ourPlanet = 'Earth';
let currentVisiter = 'john';












/*Exercise 3
Look at the code. What will be the result of the call at the last line and why? */

let phrase = "Hello"

if (true) {
  let user = "John";
  function sayHi() {
    alert(`${phrase}, ${user}`)
  }
}
sayHi()

// the result will be error 
// as we see sayHi is declare inside the block so its can not acessed ouside the block 
// functions declared inside blocks (if, for, etc.) are block-scoped when using let or const.


let phrase = "Hello";
let user = "John";   

function sayHi() {
  console.log(`${phrase}, ${user}`);
}

sayHi();
    

















/*Exercise 4
Write the code, one line for each action: */

//Create an empty object user.
let user = {};

//Add the property name with the value John.
let user = {
  name: "john"
}
//Add the property surname with the value Smith.
let user = {
  name: "john",
  surname: " Smith"
}
//Change the value of the name to Pete.
user.name = "pete";
console.log(user); //{ name: 'pete', surname: ' Smith' }

//Remove the property name from the object.
delete user.name;
console.log(user); //{ surname: ' Smith' }











/*Exercise 5
Is it possible to change an object declared with const, how do you think and why?*/

// the const values are not be reassigned and redeclared as per javascript rules hence the bellow user value will not be changed through out the code 
const user = {
  name: "John"
}

// does it work?
user.name = "Pete"
// no this will show error as the const value remail name = john though out the code .















/*Exercise 6
We have an object storing the salaries of our team:*/

let salaries = {
  Fred: 100,
  Ted: 160,
  Ghaith: 130
}
//Write a code to sum all salaries and store in the variable sum. If salaries is empty, then the result must be 0.

let sum = Object.values(salaries).reduce((acc, salary) => acc + salary, 0);


















/*Exercise 7
Rewrite this if using the ternary operator '?':

if (a + b < 4) {
  result = 'Below';
} else {
  result = 'Over';*/
            
  result = (a + b < 4) ?  'Below' :  'Over';












/*Exercise 8
Rewrite if..else using multiple ternary operators '?'.

let message;

if (login == 'Employee') {
  message = 'Hello';
} else if (login == 'Director') {
  message = 'Greetings';
} else if (login == '') {
  message = 'No login';
} else {
  message = '';
}*/

message = login == 'Employee'? 'Hello' : 
          login == 'Director' ? 'Greetings': 
          login == '' ?  'No login': '';