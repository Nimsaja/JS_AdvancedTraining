// ES5:

console.log("js geladen");

// Constructor (Klasse)
function Person(firstName, age) {
    this.firstName = firstName;
    this.age = age;

    // Methoden
    this.sayHello = function() {
        console.log("Hallo, ich bin " + this.firstName);
    }
    this.tellAge = function() {
        console.log("Ich bin " + this.age + " Jahre alt");
    }
}

// person1, person2 -> Instanz
var person1 = new Person("Anna", 11);
var person2 = new Person("Bert", 22);
person1.sayHello();
person2.sayHello();
person2.tellAge();

// global Function
function greet(p) {
    console.log("Say Hello to "+p.firstName);
}

greet(person1);
greet(person2);

// ES6:

class Cat {
    constructor (firstName, age) {
        this.firstName = firstName;
        this.age = age;
    }

    makeSound = function () {
        console.log("Miau ", this.firstName+", "+this.age);
    }
}

let cat1 = new Cat("Miez", 2);
let cat2 = new Cat("Miau", 3);
cat1.makeSound();
cat2.makeSound();

console.log(cat1);
console.log(cat2);