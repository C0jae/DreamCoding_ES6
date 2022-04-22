# DreamCoding_ES6
## 데이터 타입 - 22.04.20.(variable.js)
### Variable(변수)
```Javascript
// 2. Variable
// let (added in ES6, Mutable data)
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

// 3. Constants(Immutable data)
const daysInWeek = 7;
const maxNumber = 5;
```
* let : ES6에서 추가된 타입
* var : 현재는 쓰지 않는 타입(Hoisting을 하기때문, 전역변수 / 지역변수의 개념이 없다)
  * hoisting : 변수를 어디에 선언하더라도 항상 위로 끌어올려서 먼저 선언한 것처럼 작동
* cons(Constants) : 한번 값을 정하면 다시는 변경할 수 없는 타입
  * 후에도 값을 변경할 상황이 없는 변수의 경우 const 타입을 이용하는게 좋다.(보안, 쓰레드, 개인실수 등의 이유)     

### NumberType
``` Javascript
const count = 17;
const size = 17.3;
console.log(`value : ${count}, type : ${typeof count}`);    // type : number
console.log(`value : ${size}, type : ${typeof size}`);      // type : number
```
* Js에서는 숫자의 타입이 전부 number이다.
* 단, 1/0 => Infinity, -1/0 => nagativeInfinity, 'not a number' => NaN로 타입이 표시된다.     

### Dynamic Typing
``` Javascript
 // 5. Dynamic typing
let text = 'helo';
console.log(`value : ${text}, type : ${typeof text}`);      // type : string
text = 1;
console.log(`value : ${size}, type : ${typeof size}`);      // type : number
text = '7' + 5;
console.log(`value : ${size}, type : ${typeof size}`);      // value : 75, type : string
text = '8' / '2'
console.log(`value : ${size}, type : ${typeof size}`);      // value : 4 type : number
```
* Js는 변수의 타입을 유동적으로 바꿀 수 있다.
* 바뀌기 전 타입을 적용시켜 코드를 작성하면 에러가 뜨므로 위험할 수 있다.
  * 이러한 위험을 줄이기 위해 TypeScript를 사용

***

## operator, if, for loop - 22.04.21.(operator.js)
### Logical operator
``` Javascript
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
```
* or 함수는 순서대로 분석하다 true가 나오게 되면 즉시 분석을 멈춘다.(and 함수의 경우는 false가 나오는 순간 정지)
  * 코드를 구성할 때 가능한 로직이 긴 함수를 뒤쪽으로 배치한다.(효율성)      

### Equality
``` Javascript
// Equality
const numberFive = 5;
const stringFive = '5';

// loose equality
console.log(numberFive == stringFive);  // true

// strict equality
console.log(numberFive === stringFive); // false
```
* loose equality( == ) : 값만 비교할 뿐 타입은 비교하지 않는다.
* strict equality ( === ) : 값과 타입 둘 다 비교한다.
* 가능한 ( === )를 이용해준다.     

### Object equality
``` Javascript
const ellie1 = { name : 'ellie' };
const ellie2 = { name : 'ellie' };
const ellie3 = ellie1;
console.log(ellie1 == ellie2);  // false
console.log(ellie1 === ellie2); // false
console.log(ellie1 == ellie3);  // true
```
* ellie1과 ellie2는 애초에 서로 다른 reference를 가지고 있기 때문에 false이다.
* ellie1과 ellie3는 같은 reference를 사용하고 있기 때문에 true이다.

***

## Arrow Function - 22.04.22.(function.js)
### Default Parameter
``` Javascript
// Default parameters
function showMessage(message, from) {
    console.log(`${message} by ${from}`);
}
showMessage("Hi!"); // Hi! by undefined
```
* ES6에 새롭게 추가된 기능
* 함수에 필요한 파라미터가 들어오지 않았을 경우 해당 파라미터의 자리는 'undefined'로 표시된다.     

### Rest Parameters
``` Javascript
// Rest Parameters
function printAll(...args) {
    for (let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }

    for (const arg of args) {
        console.log(arg);
    }

    args.forEach(arg => {
        console.log(arg);
    });
}
printAll('a', 'b', 'c');
// a
// b
// c
```
* 파라미터 변수 앞에 ' ... ' 을 추가하게 되면 배열 형태로 전달되어진다.