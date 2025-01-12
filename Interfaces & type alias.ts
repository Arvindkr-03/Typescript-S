// Interface and type alias are two ways to define a custom type in TypeScript. They are similar but have some differences.

// Interface and types Aliases:

// Interface:
// An interface is a structure that defines the contract in your application. It defines the syntax for classes to follow. Classes that are derived from an interface must follow the structure provided by the interface. An interface is a group of related properties and methods that describe an object.

// Syntax:
// interface interface_name {
//   property1: type,
//   property2: type,
//   ...
//   method1(): return_type,
//   method2(): return_type,
//   ...
// }

// Example:
interface Employee {
  name: string;
  age: number;
  salary: number;
  city: string;
  isActive: boolean;
}

let emp: Employee = {
  name: "Surya",
  age: 25,
  salary: 50000,
  city: "Bangalore",
  isActive: true,
};

function EmployeeDetails(obj: Employee) {
  emp.name = obj.name;
  emp.age = obj.age;
  emp.salary = obj.salary;
  emp.city = obj.city;
  emp.isActive = obj.isActive;
  console.log(emp);
}
// output: { name: 'Surya', age: 25, salary: 50000, city: 'Bangalore', isActive: true }

// Type alias:
// Type alias is a name that represents a type. It is used to define a custom type. It is similar to an interface but can represent primitive types, union types, tuples, and any other types.

// Syntax:
// type type_name = type

// Example:
type Employee1 = {
  name: string;
  age: number;
  salary: number;
  city: string;
  isActive: boolean;
};

let emp1: Employee1 = {
  name: "Surya",
  age: 25,
  salary: 50000,
  city: "Bangalore",
  isActive: true,
};

function EmployeeDetails1(obj: Employee1) {
  emp1.name = obj.name;
  emp1.age = obj.age;
  emp1.salary = obj.salary;
  emp1.city = obj.city;
  emp1.isActive = obj.isActive;
  console.log(emp1);
}

EmployeeDetails1(emp1);
// output: { name: 'Surya', age: 25, salary: 50000, city: 'Bangalore', isActive: true }

