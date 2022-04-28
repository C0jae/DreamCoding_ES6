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

// Fields(public, private)
class Experiment {
    publicFields = 2;
    #privateFields = 0;
}

const experiment = new Experiment();
console.log(experiment.publicFields);   // 2
console.log(experiment.privateFields);  // undefined

// Inheritance
class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw() {
        console.log(`drawing ${this.color} color of`);
    }

    getArea() {
        return this.width * this.height;
    }
}

// 상속
class Rectangle extends Shape { }
class Triangle extends Shape {
    draw() {
        super.draw();
        console.log("abc");
    }
    getArea() {
        return this.width * this.height / 2;
    }
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();   // drawing blue color of
console.log(rectangle.getArea());   // 400

const triangle = new Rectangle(20, 20, 'red');
triangle.draw();    // drawing red color of <= super.draw() : 부모 클래스의 draw()
                    // abc : 자식 클래스의 draw() 재정의, 오버라이딩
console.log(triangle.getArea());    // 200 : 자식클래스의 getArea 재정의