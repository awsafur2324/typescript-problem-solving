# What are some differences between interfaces and types in TypeScript?
Ans : In TypeScript, both interface and type are used to define the shape of objects, but they have some key differences in usage, capabilities, and behavior.In this blog, we'll explore the differences between interface and type in TypeScript with real-world examples and best use cases.

## 1. Different between Basic Syntax :
```ts
interface UserInterface {
  name: string;
  age: number;
}

type UserType = {
  name: string;
  age: number;
};
```
## 2. Extending / Inheritance :
-> Interface uses extends

-> Type uses intersections (&)
```ts
// Using interface
interface Person {
  name: string;
}

interface Employee extends Person {
  salary: number;
}

// Using type
type PersonType = {
  name: string;
};

type EmployeeType = PersonType & {
  salary: number;
};
```
## Declaration Merging :
-> Only interfaces support declaration merging.
-> This not possible with type.
```ts
interface Book {
  title: string;
}

interface Book {
  author: string;
}

// Merged interface
const myBook: Book = {
  title: "TypeScript Handbook",
  author: "Microsoft",
};
```
## Union Types, Tuples, and Primitives :
-> Only type can define these special kinds of types.
-> interface cannot define union, tuple, or primitive types.
```ts
type ID = string | number;     // Union type
type Point = [number, number]; // Tuple type
type Status = "loading" | "success" | "error"; // Literal union
```
## Now the question comes when to use which?
Use interface when:
1. You’re working with object shapes or class contracts.
2. You expect the structure to be extended or merged.
Use type when:
1. You need union, tuple, intersection, or primitive types.
2. You're combining multiple complex types.

   TypeScript gives us interface and type to describe how data should look. Use interface when working with objects and classes, and use type when you need more flexible options like unions or combinations. Knowing when to use each one makes your code easier to read and work with.
