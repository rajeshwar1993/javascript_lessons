// swtich statements and caviats

// helps in checking multiple conditions for a single value

let day = 'Monday';
let message = 'I believe today is ';

switch (day) {
  case 'Monday':
    message = message + 'a weekday';
    break;

  case 'Tuesday':
    message = message + 'a weekday';
    break;

  case 'Wednesday':
    message = message + 'a weekday';
    break;

  case 'Thrusday':
    message = message + 'a weekday';
    break;

  case 'Friday':
    message = message + 'a weekday';
    break;

  case 'Saturday':
    message = message + 'a weekday';
    break;

  case 'Sunday':
    message = message + 'a weekday';
    break;

  default:
    message = message + 'a day I am sure of';
}

console.log(message);

// ********************

let operation = 'ADD';
let a = 5,
  b = 4;
let ans;

switch (operation) {
  case 'ADD':
    ans = a + b;
    break;

  case 'SUB':
    ans = a - b;
    break;

  case 'MUL':
    ans = a * b;
    break;

  default:
    ans = 0;
}

console.log(ans);

// ******************** SPECIAL

let operation = 'ADD';
let a = 5,
  b = 4;
let ans;

switch (true) {
  case !!'ADD':
    ans = a + b;
    break;

  case 'SUB':
    ans = a - b;
    break;

  case 'MUL':
    ans = a * b;
    break;

  default:
    ans = 0;
}

console.log(ans);
