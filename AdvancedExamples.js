//Regular functions Vs ES6 Arrow functions

//Regular function
function add1(a, b) {
 return a + b;
}
//Arrow function
const add2 = (a, b) => a + b;

console.log(add1(1, 3));
console.log(add2(5, 3));

//Handling the "this" keyword
const obj1 = {
 valueOfthis: function () {
  return this;
 },
};

const obj2 = {
 valueOfthis: () => {
  return this;
 },
};

console.log(obj1.valueOfthis());
console.log(obj2.valueOfthis());

//Const
const x = {
 name: "christian",
};
x.name = "Lindsey";
console.log(x.name); //you can change the value of a property but cannot change the variable itself

//Rest paramater & spread opertator
const args = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function extractingArgs(...args) {
 return args[4];
}

console.log(extractingArgs(...args));

//Using spread operator to add all elements in an array (using them as arguments)

const newArgs = [77, 11, 45, 10, 5, 63, -11];

function addAllArgs(...newArgs) {
 let sum = 0;
 let i = 0;
 while (i < newArgs.length) {
  sum += newArgs[i];
  i++;
 }
 return sum;
}

console.log(addAllArgs(...newArgs));
