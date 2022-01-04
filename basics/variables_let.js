/*
let variable type
It's properties
it's scoping
Interview trick questions
*/

// declaration
let one = 1;
console.log(one);

// let 3 = 3; // ! invalid - throws error
// let 3three = 3; // ! invalid - throws error

let _3three = 3; // Valid

// let _3three = 5; // ! does not allows redeclaration - throws error

console.log(_3three);

_3three = 'three'; // allows type changing;

console.log(_3three);

// Initial values
// difference in undefined and not defined
let check;
console.log(check); // gives undefined;
// console.log(check2); // ! not defined - throws error

// scoping - let has block scope,
// which means the scope is tied to the function it's defined in

let outside = 'outside';
if (true) {
  console.log(outside);
  let inside = 'inside';
  console.log(inside);
}

console.log(outside);
// console.log(inside); // ! throws error

// catches the closest one
if (!false) {
  let outside = 'same name letiable';
  console.log(outside);
}

console.log(outside);
