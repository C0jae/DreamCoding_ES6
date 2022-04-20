// 1. Use strict
// 타입스크립트를 사용하지 않는한 'use strict'을 사용하는것이 좋다.
// 선언하지 않은 변수의 사용 등 Js의 위험성을 에러로 처리해 준다.
'use strict';

// 2. Variable
// let (added in ES6)
let globalName = 'globalName';
{
let name = 'ellie';
console.log(name);
name = 'helo';
console.log(name);
console.log(globalName);    // 출력(전역변수)
}
console.log(name);          // 비출력(지역변수)
console.log(globalName);    // 출력(전역변수)

// 3. Constants
// favor immutable data type always for a fer reasons
//  - security
//  - thread safety
//  - reduce human mistake
const daysInWeek = 7;
const maxNumber = 5;

// 4. Variable types
const count = 17;
const size = 17.3;
console.log(`value : ${count}, type : ${typeof count}`);    // type : number
console.log(`value : ${size}, type : ${typeof size}`);      // type : number

// 5. Dynamic typing
let text = 'helo';
console.log(`value : ${text}, type : ${typeof text}`);      // type : string
text = 1;
console.log(`value : ${size}, type : ${typeof size}`);      // type : number
text = '7' + 5;
console.log(`value : ${size}, type : ${typeof size}`);      // value : 75, type : string
text = '8' / '2'
console.log(`value : ${size}, type : ${typeof size}`);      // value : 4 type : number