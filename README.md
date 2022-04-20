# DreamCoding_ES6
### 데이터 타입 - 22.04.20.
Variable(변수)
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

NumberType
``` Javascript
const count = 17;
const size = 17.3;
console.log(`value : ${count}, type : ${typeof count}`);    // type : number
console.log(`value : ${size}, type : ${typeof size}`);      // type : number
```
* Js에서는 숫자의 타입이 전부 number이다.
* 단, 1/0 => Infinity, -1/0 => nagativeInfinity, 'not a number' => NaN로 타입이 표시된다.     

Dynamic Typing
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
