// Type inference
// Understanding Type inference
// type annotations

//let list=12;   Here list is a number type variable.
let list = [1, 2, 3]; // Here list is a number array type variable.

// type inference is a feature in typescript which sets the type of the variable automatically.

const a2 = 10; // Here a is a number type variable.
let m11 = "suraj"; // Here m is a string type variable.
let bhai2 = true; // Here bhai is a boolean type variable.

// All the above code is the same as the code in Datatypes.ts. The only difference is that we have not mentioned the type of the variable. The type of the variable is automatically set by the TypeScript compiler. This is called type inference.

// Type annotations:
// Type annotations are used to explicitly specify the type of a variable. It is done by using a colon (:) followed by the type of the variable.

// Syntax:
// let variableName: type = value;

let a3: number = 10; 
let m12: string = "suraj";
let bhai3: boolean = true;

let all:number| string| boolean;
all=15;
all="Surya";
all=true;


function add(a: number, b: string): void {
  console.log(a + b); 
  add(10, "Surya");   // output: 10Surya
 
}
// In the above code, we have explicitly mentioned the type of the variable. This is called type annotations.

// Type inference vs Type annotations
// Type inference is a feature in TypeScript that sets the type of the variable automatically. Type annotations are used to explicitly specify the type of a variable.