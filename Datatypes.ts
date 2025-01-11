// Basic types:
// . Primitive Type : number, string, boolean
// . Reference type : address of primitive type,eg..{},(),[]
// . Array
// . Tuples
// . Enums
// . Any, Unknown,Void, Null, Undefined, Never

// Primitive types:
// const a=10;
let m = 30;
let bhai = true;

// Reference types:
// If any changes made in child variable then parent variable will be affected.

// let m =30;
let n = m;
n = +5;
console.log(m);

// output:  m = 35

// Array:

let aar = [1, 2, 3, "Surya", true];
let m1 = [null, undefined, 10, "Surya", true, false];

// It extract types of each data inside the array. You can call it combination of different types of datatypes.

let arr = ["Hammar", 12.5, { number: 123 }, { number: 2025 }];

// Tupples: It is fixed key and value of array.

let arr2: [string, number] = ["shubham", 52]; // It will take only 2 values.

// Enumerations: its more like that of objects in javascript.

enum user {
  name = "Abhinav",
  skill = "developer",
  age = 25,
}
user.skill; // output: developer

// Any: It this array can have any type of data.

let m2 = [];
let m3: any = [];
m3.push(1);
m3.push("Surya");
m3.push(true);
m3.push({ name: "Aman" });
console.log(m3); // output: [1,"Surya",true]

//  Unknown: It is similar to any but it is more secure than any.

let s = 10;
//  s=20; // error because s is already declared.
let s1: unknown = 10;
s1 = "Surya";
s1 = false;
s1 = 20;

// Void: It is used to define the function return type.

function num(s: String, p: number) {
  console.log("Hello Developers");
  num("sukhdev", 25);
}

// Null: It is used to define the null value.

let m4: null = null;
m4 = null;
// m4=undefined;  error because m4 is already declared with type null.

let arr4: null = null;
arr4 = null;

// Undefined: It is used to define the undefined value.
let m5: undefined;
m5 = undefined;

// Never: It is used to define the function return type for infinite times.

function error(message: string): never {
  throw Error("Error");
}
console.log("Hi, Preet");
