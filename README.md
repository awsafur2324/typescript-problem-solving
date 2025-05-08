# What are some differences between interfaces and types in TypeScript?

In TypeScript, both interface and type are used to define the shape of objects, but they have some key differences in usage, capabilities, and behavior. In this blog, we'll explore the differences between interface and type in TypeScript with real-world examples and best use cases.

## 1. Basic Syntax :

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

## 2. Extending/Inheritance :

-> Interface uses extends

-> Type uses intersections (&).

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

-> This is not possible with type.

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

-> An interface cannot define union, tuple, or primitive types.

```ts

type ID = string | number;     // Union type
type Point = [number, number]; // Tuple type
type Status = "loading" | "success" | "error"; // Literal union

```

## Now the question comes, when to use which?

Use interface when:

1. You’re working with object shapes or class contracts.

2. You expect the structure to be extended or merged.

   

Use type when:

1. You need union, tuple, intersection, or primitive types.

2. You're combining multiple complex types.

TypeScript gives us interface and type to describe how data should look. Use interface when working with objects and classes, and use type when you need more flexible options like unions or combinations. Knowing when to use each one makes your code easier to read and work with.

# How does TypeScript help in improving code quality and project maintainability?

TypeScript is not just a language; it's a full guideline for a developer. It’s a tool that helps you write better, cleaner, and more maintainable code. Here’s how:

## Catches Errors Early

TypeScript checks your code before it runs, so you can catch mistakes like typos, wrong types, or missing properties while writing the code.

```ts

let user: string = 123; // Error: Type 'number' is not assignable to type 'string'

```

## Better Code Suggestions

With types in place, editors like VS Code can suggest code and show available properties and methods. This makes development faster and reduces the chances of mistakes.

## Easier Refactoring

When your project grows, you’ll need to rename variables, update functions, or move code around.
TypeScript helps you safely refactor your code without breaking things. If something breaks, TypeScript will tell you exactly where. Finding errors is going to be easy.

## Self-Documenting Code

Types act as documentation. You can understand what a function does or what a variable expects just by reading the type. This makes it easier for new developers to understand your code.

## Scales with Your Project

As your project gets bigger, dynamic JavaScript can become hard to manage.
TypeScript’s strict typing helps keep your code organized and consistent, which is great for teams and long-term maintenance.

Although TypeScript adds a layer of safety and better structure to JavaScript.
It helps you catch errors early, makes your code easier to understand, and keeps large projects more manageable.
In short, TypeScript makes you a more confident and productive developer.

# Provide an example of using union and intersection types in TypeScript.
TypeScript gives us powerful ways to combine types using union (|) and intersection (&) operators. These help us write flexible and reusable code. In the below give two example :

## Union Types (|) :
A union type allows a variable to hold more than one type.When a value can be one of many types (like ID being a string or number).
```ts
type ID = string | number;

let userId: ID;

userId = "abc123";  // valid
userId = 101;       // valid
userId = true;      // Error: boolean is not assignable to ID
```
## Intersection Types (&) :
An intersection type combines multiple types into one. The resulting type has all properties from the combined types. Use when an object must satisfy multiple type requirements.
```ts
type ContactInfo = {
  email: string;
  phone: string;
};

type PersonalInfo = {
  name: string;
  age: number;
};

type User = ContactInfo & PersonalInfo;

const user: User = {
  name: "Alice",
  age: 30,
  email: "alice@example.com",
  phone: "123-456-7890"
};
```
## Real-World Union Type Example
(Scenario: User Login)
You have two types of users:

Guest: only has an email

Registered User: has an email and a username

You want to accept both kinds in a function.
```ts

//--define type

// All users must have an email
type EmailInfo = {
  email: string;
};

// Registered users also have a username
type UsernameInfo = {
  username: string;
};

// RegisteredUser = email + username (intersection)
type RegisteredUser = EmailInfo & UsernameInfo;

// GuestUser = only email
type GuestUser = EmailInfo;

// Login input can be a guest or a registered user (union)
type LoginUser = GuestUser | RegisteredUser;

//--Create a Login Function

function login(user: LoginUser) {
  console.log(`Email: ${user.email}`);

  if ('username' in user) {
    console.log(`Welcome back, ${user.username}!`);
  } else {
    console.log("Welcome, guest!");
  }
}

//--call the function

const guest: GuestUser = { email: "guest@example.com" };
const registered: RegisteredUser = {
  email: "user@example.com",
  username: "john_doe"
};

login(guest);      //  Welcome, guest!
login(registered); // Welcome back, john_doe!

```


