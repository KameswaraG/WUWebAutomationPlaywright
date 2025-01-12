

/***
 * All types of Variables are explained in this file 
 * 
 * If a variable is declared with var, we can redeclare the same variables many time and if default value will be undefined if not initialzed.
 * 
 * If a variable declared with let, we can declare only once in life cycle and can reassign multiple times.
 * If same variable declared twice then we get  Identifier 'age' has already been declared error.
 * If a variable declared as const then we can't reassign the variable anytime in the lifetime. It's like final variable in Java. Reassignment is not allowed with const variables.
 * When a const is not initilazed, we face error as SyntaxError: Missing initializer in const declaration
 */

var age;

console.log(age)
age=20;

console.log(age)

var age=30;

console.log(age)

let age1=40;
console.log(age)

age1=50;
console.log(age1)

const noOfDaysInAWeek=7;
console.log(noOfDaysInAWeek)


