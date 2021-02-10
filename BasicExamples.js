//Type Coercion
const typeCoercion1 = (a, b) => {
 const val1 = b + a;
 const val2 = a + b;
 const val3 = a - b;
 return {
  a: { type: typeof val1, value: val1 },
  b: { type: typeof val2, value: val2 },
  c: { type: typeof val3, value: val3 },
 };
};

console.log(typeCoercion1(3, "3"));

//Exploring the Dynamic typing of JavaScript
const name = "christian";
const number = 45;

console.log(name);
console.log(number);

//Defining this by exploring how it operates in the global object
function doSomething() {
 console.log(this);
}

doSomething();

var obj = {
 name: "christian",
 getName: function () {
  console.log(this.name);
 },
};

obj.getName();

//examples of call() apply() and bind()
//call()
function sayHello() {
 return "Hello " + this.name;
}

let obj1 = { name: "Christian" };

console.log(sayHello.call(obj1));

//call() accepts arguments
function saySomthing(message) {
 return this.name + " is " + message;
}

let person = { name: "Christian" };
console.log(saySomthing.call(person, "learning how to code."));

//bind()
let computerDetails = {
 displayDetails: function (RAM, SSD, HD) {
  return (
   "The " +
   this.make +
   " laptop offers 18GBs of " +
   RAM +
   ", 256 GBs of " +
   SSD +
   ", and 1TB of " +
   HD +
   "."
  );
 },
};

let computer = { make: "MAC" };
let detaialsOfComputer = computerDetails.displayDetails.bind(
 computer,
 "RAM",
 "SSD",
 "HD",
);

console.log(detaialsOfComputer());

//Coding example of a closure
var Person = function (personName) {
 var name = personName;

 this.getName = function () {
  return name;
 };
};

var person1 = new Person("Christian");
console.log(person1.getName());

//Second example of how closures work
function randomFunction() {
 var personObject = { name: "Christian", age: 30 };

 return function () {
  return personObject.name + " is awesome!"; // Has access to "personObject" even when the randomFunc function is executed
 };
}

let initialiseClosure = randomFunction(); // Retruns a function
console.log(initialiseClosure());

//Example of callback functions
const divideInTwo = (sum) => {
 console.log(sum / 2);
};
const multiplyByTwo = (sum) => {
 console.log(sum * 2);
};
const operationOnSum = (num1, num2) => {
 return (sum = num1 + num2);
};

console.log(operationOnSum(3, 301, divideInTwo));
console.log(operationOnSum(3, 9, multiplyByTwo));

//Recursion example
const add = (number) => {
 return number <= 0 ? 0 : number + add(number - 1);
};

//function add(number) {
//    if(number <= 0) {
//        return 0
//    } else {
//        return number + add(number - 1)
//    }
//}

console.log(add(3));

//Constructor function example
function Person(name, age, gender) {
 (this.name = name), (this.age = age), (this.gender = gender);
}

var person1 = new Person("Christian", 30, "male");
var person2 = new Person("Lindsey", 29, "female");
var person3 = new Person("Ana", 32, "female");
