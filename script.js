///////////////////
// 0. Js introduction
///////////////////

console.log(`Hello Mindaugas from console!`);

let age = 18;

if (age > 18) {
	console.log("You are allowed!");
} else {
	console.log("You are not allowed!");
}

///////////////////
// 1. Js data types
//////////////////

// object literal (does not exist in Java)
let person = { age: 55, name: "John" };

// array literal containing object literals in JSON (array literals exist in Java)
let people = [
	{ age: 55, name: "John", married: true },
	{ age: 66, name: "Peter" },
];

///////////////////
// 2. Js variables
///////////////////

// let vs. var

// ... redeclaration is not allowed
// let game = 2;
// let game = 1;

// ... scoping rules are different
// if (10 > 5) {
// 	let x = 999;
// }

// console.log(x);

// ... const is a constat that is immutable

// const moneyAmount = 550;
// moneyAmount = 56; // produces error
// console.log(moneyAmount);

// scope

let workExperience = 5;

if (workExperience > 18) {
	console.log(`You are very experienced due to working for ${workExperience} years!`);
} else {
	console.log(`You are are getting there, but not yet ... only ${workExperience} years of experience!`);
}

function someRandomFunction() {
	console.log(`>>>> Will I be able to reach a varaible from global scope: ${workExperience}`);
}

someRandomFunction();

function functionScope() {
	// var funVariable = "function variable";
	let funVariable = "function variable";
	console.log(funVariable);
}

functionScope();

// console.log(funVariable); // error

// we already mentioned the block scopes when talking about var vs. let

// hoisting
console.log(foo);
var foo = "Lorem ipsum";

///////////////////
// 3. Js loops
///////////////////

// foreach
let table = [1, 2, 3];
table.forEach(function (e, idx) {
	console.log(`Element idx: ${idx} has a value: ${e}`);
});

///////////////////
// 4. Js Functions
///////////////////

// arrow functions
let someExampleVar = ">>>>";
table.forEach((e, idx) => console.log(`Element idx: ${idx} ${someExampleVar} has a value: ${e}`));

// anonymous self-executing function
console.log(
	(function (a, b) {
		return a + b;
	})(10, 20)
);
// ... crazy looking code, do not use it

const multiply = function (i, j) {
	return i * j;
};

console.log(multiply(9, 6));

// const divide = (i, j) => { return i / j };
const divide = (i, j) => {
	if (j === 0) throw "Division by 0";
	return i / j;
};
// console.log(divide(12, 0));

// default parameter values

const greet = (identifier, greetingMessage = `Hello`) => {
	console.log(greetingMessage + " " + identifier);
};

greet("Mindaugas", `Nice to see you again`);
greet("John");
greet(); // Hello undefined

///////////////////
// 5. Js Arrays
///////////////////

const arr = [];
for (let i = 0; i < 10; i++) arr.push(`Item: ${i}`);
console.log(arr);

console.log(arr[4]);

console.log(arr.length);
console.log(arr.pop());
console.log(arr.length);

arr.unshift(">>>>");
console.log(arr);

console.log(arr.join(", "));

console.log([5, 3, 1, 10].sort((a, b) => a - b));

let arr1 = [1, 2];
let arr2 = [3, 4];
console.log(arr2.concat(arr1));
console.log(arr1.concat(arr1));

// higher order methods: forEach, map, filter, reduce

arr1.forEach((e) => console.log(e + (e / 100) * 10));

["A", "B"].map((e) => e + "!").forEach((e) => console.log(e));

// splice
let arrayToSplice = [0, 1, 2, 3, 4, 5, 6]; // [0, 1, 5, 6];
console.log(arrayToSplice);
console.log(arrayToSplice.splice(2, 3, ...[9, 9, 9])); // array spread used to pass the 3rd parameter to splice function
console.log(arrayToSplice);

///////////////////
// 6. JS Objects
///////////////////

const human1 = new Object();
human1.firstName = "John";
human1.lastName = "Doe";

console.log(human1);

class Person {
	constructor(firstName, lastName) {
		this.firstName = firstName;
		this.lastName = lastName;
	}
}

const human2 = new Person("John", "Doe");
console.log(human2);

["first", "last"].forEach((prefix) => console.log(human2[`${prefix}Name`]));

///////////////////
// 7. DOM
///////////////////

console.log(document.location.href);

// there multiple ways to do it ...

// 0.
// document.getElementById("button-1").onclick = () => {
// 	let colors = ["blue", "red", "violet"];
// 	let choice = Math.floor(Math.random() * colors.length);
// 	document.getElementsByTagName("p")[0].style.color = colors[choice];
// 	// document.getElementsByTagName("p")[0].style.display = "none";
// };

// 1.
// document.getElementById("button-1").addEventListener("click", () => {
// 	let colors = ["blue", "red", "violet"];
// 	let choice = Math.floor(Math.random() * colors.length);
// 	document.getElementsByTagName("p")[0].style.color = colors[choice];
// });

// 2.
// const changeParagraphColor = () => {
// 	let colors = ["blue", "red", "violet"];
// 	let choice = Math.floor(Math.random() * colors.length);
// 	document.getElementsByTagName("p")[0].style.color = colors[choice];
// };

// document.getElementById("button-1").addEventListener("click", changeParagraphColor);

const changeElementColor = (cssSelector) => {
	let colors = ["blue", "red", "violet"];
	let choice = Math.floor(Math.random() * colors.length);
	document.querySelector(cssSelector).style.color = colors[choice];
};

// Multiple ways to pass in arguments to event handlers
// https://stackoverflow.com/questions/256754/how-to-pass-arguments-to-addeventlistener-listener-function
// document.getElementById("button-1").addEventListener("click", () => changeElementColor("#button-1"));
document.getElementById("button-1").addEventListener("click", () => changeElementColor("p"));
