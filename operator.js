// String concatenation
console.log('my' + ' car');  // my car
console.log('1' + 2);       // 12
console.log(`string literals : ${1 + 3}`);  // string literals : 4

// Logical operator
const value1 = false;
const value2 = 4 < 2;

function check() {
    for (let i = 0; i < 10; i++) {
        console.log('ㅎㅇ');
    }
    return true
}

// or
console.log(`or : ${value1} || ${value2} || ${check}`)  // true

// Equality
const numberFive = 5;
const stringFive = '5';

// loose equality
console.log(numberFive == stringFive);  // true

// strict equality
console.log(numberFive === stringFive); // false

// object equality
const ellie1 = { name : 'ellie' };
const ellie2 = { name : 'ellie' };
const ellie3 = ellie1;
console.log(ellie1 == ellie2);  // false
console.log(ellie1 === ellie2); // false
console.log(ellie1 == ellie3);  // true
