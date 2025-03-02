




//Exercise 1
//The following function returns true if the parameter age is greater than 18.

//Otherwise, it asks for a confirmation and returns its result.

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Do you have your parents permission to access this page?');
  }
}
//Rewrite it, to perform the same, but without if...else, and use the arrow function.

const  checkAge = (age) => (age > 18) ?true : confirm('Do you have your parents permission to access this page?');
    


//Exercise 2
//Write a function pow(x,n) that returns x in power n. Or, in other words, multiplies x by itself n times and returns the result.

//pow(3, 2) = 3 * 3 = 9
//pow(3, 3) = 3 * 3 * 3 = 27
//pow(1, 100) = 1 * 1 * ...* 1 = 1
//P.S. In this task, the function should support only the natural values of n: integers up from 1.

const  pow=(x,n) => Math.pow(x,n);

console.log(pow(3, 2)); //9

console.log(pow(3, 44)); //984770902183611200000











//Exercise 3
//Replace Function Expressions with arrow functions in the code:

function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no()
}

ask(
  "Do you agree?",
  function() { alert("You agreed.") },
  function() { alert("You canceled the execution.") }
)

//Ans-

const ask = (question, yes, no) => confirm(question)? yes(): no();

ask (
     "Do you agree?",
      () => alert("You agreed."),
      () =>  alert("You canceled the execution.") 

);









//Exercise 4
//Create an object calculator with three methods:

//read() prompts for two values and saves them as object properties.
//sum() returns the sum of saved values.
//mul() multiplies saved values and returns the result.
let calculator = {
  read: function() {
    this.a = +prompt("Enter the first number:", 0); // Use + to convert the input to a number
    this.b = +prompt("Enter the second number:", 0); // Same here
  },

  // Method to return the sum of the saved values
  sum: function() {
    return this.a + this.b;
  },

  // Method to return the product of the saved values
  mul: function() {
    return this.a * this.b;
  }
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );
                









//Exercise 5
//Write a function min(a,b) which returns the least of two numbers a and b. Use the arrow function along with the question mark operator ?
const min = (a, b) => a < b ? a : b;
console.log(min(3, 5)); // Output: 3
console.log(min(10, 2)); // Output: 2
