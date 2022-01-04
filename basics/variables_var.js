/*
var variable type
It's properties
it's scoping
Interview trick questions
*/

// declaration
var one = 1;
console.log(one);

// in global scope
two = 2;
console.log(two);
// console.log(globalThis); // ** Stays in the global scope

// var 3 = 3; // ! invalid - throws error
// var 3three = 3; // ! invalid - throws error

var _3three = 3; // Valid

var _3three = 5; // allows redeclaration

console.log(_3three);

_3three = 'three'; // allows type changing;

console.log(_3three);

// Initial values
// difference in undefined and not defined
var check;
console.log(check); // gives undefined;
// console.log(check2); // ! not defined - throws error

// scoping - var has function scope,
// which means the scope is tied to the function it's defined in

var outside = 'outside'; // defined in a global scope
// this in turn means that, when node executes this code all of this is actually wrapped inside a parent function
// which can also be called a global function to which this variable is scoped, also known as the "window" object in the browser

function f1() {
  console.log(outside);
  outside = 'outside function';
  var inside = 'inside';
  console.log(inside);
}
f1();
console.log(outside);
// console.log(inside); // ! throws error

// catches the closest one
function f2() {
  var outside = 'same name variable';
  console.log(outside);
}

f2();
console.log(outside);

//Trick questions

function f3() {
  outside = outside;
  var outside;
  console.log(outside);
  inside = 'inside';
  console.log(inside);
}
f3();
console.log(outside);
console.log(inside);
