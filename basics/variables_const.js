/*
const variable type
It's properties
it's scoping
Interview trick questions
*/

// declaration
const one = 1;
console.log(one);

// const 3 = 3; // ! invalid - throws error
// const 3three = 3; // ! invalid - throws error

const _3three = 3; // Valid

// const _3three = 5; // ! doesnt allows redeclaration

console.log(_3three);

// _3three = 'three'; // ! doest allows any changing;

// Initial values
// difference in undefined and not defined
// const check; // ! needs to be initialized on declatation
// console.log(check); // gives undefined;
// console.log(check2); // ! not defined - throws error

// scoping - const has block scope, same as let
// which means the scope is tied to the block it's defined in

// something to note
// the variable pointer cannot be changed, but any comples data structure can be mutated

const arr = [1, 2, 4];
arr.push(3); // valid

const obj = { first: 1 };
obj.first = 2;

// obj = 3; // ! not allowed

// assingning complex values

const obj2 = obj;
obj2.first = 4;
console.log(obj);
