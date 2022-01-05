// Ternary operator

let val = 5;

if (val > 4) {
  console.log('Value is more than 4');
} else {
  console.log('Value is less than 4');
}

let res = val > 4 ? 'Value is more than 4' : 'Value is less than 4';

console.log(res);

// Complex

let res2 =
  val == 4
    ? 'Value is equal  4'
    : val > 4
    ? 'Value is more than 4'
    : 'Value is less than 4';

console.log(res2);

// Complex

let assign;

let res3 =
  val == 4
    ? (assign = 'EQUAL')
    : val > 4
    ? (assign = 'MORE')
    : (assign = 'LESS');

console.log(res3);
console.log(assign);
