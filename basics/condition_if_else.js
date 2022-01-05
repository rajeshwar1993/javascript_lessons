// IF ELSE
// checks a boolean value

// example

let today = 'Sunday';

if (today === 'Sunday') {
  console.log('I will sleep till noon!');
} else {
  console.log('Need to be up early, have work!');
}

// variable complare

let check = 'ddnotcheck';

if (check === 'check') {
  console.log('this is true');
} else if (check === 'notcheck') {
  console.log('notcheck block');
} else {
  console.log('Everything else');
}

// evaluation process - checks only once if else if is there

let check2 = 'check2';

if (check2 === 'check2') {
  console.log('First block');
} else if (check2 === 'check2') {
  console.log('Second Block');
}
if (check2 === 'check2') {
  console.log('Third Block');
} else {
  console.log('Everything else');
}

// which else blongs to which if

let check3 = 'check3';

if (check3 === 'check3') {
  console.log('First block');
} else if (check3 === 'check3') {
  console.log('Second Block');
}
if (check3 === 'something') {
  console.log('Third Block');
} else {
  console.log('Everything else');
}

// if no brackets

let check4 = 'check4';

if (check4 !== 'check4') console.log('First');
console.log('Second');

// special keywrods - true, false

if (true) {
  console.log(true);
}

if (false) {
  console.log(false);
}

// ******************* SEPARATE VIDEO *************************

// comparison ops == === ! != !== > < >= <= || &&

let testN = 4;
let testS = '4';

if (testN == testS) {
  // ignores type
  console.log('== passed');
}
if (testN === testS) {
  // checks type
  console.log('=== passed');
}

if (!(testN === testS)) {
  console.log('=== passed due to !');
}

if (testN != testS) {
  console.log('!= passed');
}

if (testN !== testS) {
  console.log('!== passed');
}

if (testN < testS) {
  console.log('< passed');
}

if (testN > testS) {
  console.log('> passed');
}

if (testN <= testS) {
  console.log('<= passed');
}

if (testN >= testS) {
  console.log('>= passed');
}

if (testN == testS && 'Something else') {
  console.log('>= passed');
}

if (testN == testS || 'Something else') {
  console.log('>= passed');
}

// what all is considered true

// true:
// 1. Any non-empty String
// 2. Any non-zero Number
// 3. empty objects or array

// false:
// 1. false values :P
// 2. empty strings
// 3. zero  // TODO BONUS: console.log(false)
// 4. null, undefined

let isTrue = 'Hello';

if (isTrue) {
  console.log('Yes, its true');
} else {
  console.log('Nope, its not');
}

// special cases

let obj = {};

if (obj == {}) {
  console.log('Its equal!!');
}

if ({} == {}) {
  console.log('Its equal!!');
}

if ([] == []) {
  console.log('Its equal!!');
}

let obj2 = obj;

if (obj == obj2) {
  console.log('Its equal!!');
}
