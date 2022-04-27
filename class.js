'use strict';

// 클래스 선언
class Person {
    // constructor
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // method
    speak() {
        console.log(`${this.name}: hello!`);
    }
}

const ellie = new Person('ellie', 20);
console.log(ellie.name);    // ellie
console.log(ellie.age);     // 20
console.log(ellie.speak)    // ellie: hello!


// Getter Setter
class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age
    }

    get age() {
        return this._age;
    }

    set age(value) {
        this._age = value < 0 ? 0 : value;
    }
}

const user1 = new User('steve', 'job', -1);
console.log(user1.age); // -1