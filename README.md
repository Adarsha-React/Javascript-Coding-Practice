🔹 Understanding Hoisting and its impact on variable and function declarations

- Javascript programs will execute in 2 phases.
  Phase 1: Memory allocation
  Phase 2: Code execution

  During phase 1: Memory allocation
  Javascript engine will create the global execution context and allocate memory for all variables and functions only for the global level properties.
  All variables will get a special values called "undefined", even with arrow function as well.
  but complete function will be copied for the normal functions.

  During Phase 2: Code execution
  JS engine will go line by line and execute the code. When any function invoked, new execution context will be created and same 2 phases will be executed there as well.

  This is only called hoisting in Javascript.

  Hoisting will be little bit different with "var", "let and const" types.

  - type: "var" - variables and functions are attached in Global object of that execution context.
  - type: "let and const" - variables and functions are attached in the separate memory space (like script, block) of that execution context.
    - We get an error if we try to access let and const variables before initializing them as they are hoisted in a separate space, that is also called "Temporal Dead Zone".

🔹 The differences between let, const, and var in variable declaration and scope

With above details, added few difference below for let, const and var -

var
these variables will have function scope or global scope based on where the variables are declared.
var variables can be updated and re-declared within its scope
these variables can be declared without any intial value.

let
these variables are allocated at the block scope
let variables can be updated but not re-declared
these variables can be declared without any intial value.

const
these variables also are allocated at the block scope
const vairiables can't updated or can't be re-declared.
these variables must have an initial value.

Block: It is used to combined statements together and provided to condition expect at least a single line of code.

if (true) {
let y = 10;
console.log(y) // it works
}

console.log(y) // error

🔹 Exploring Closures and their practical applications in JavaScript
🔹 Prototypal Inheritance vs. Classical Inheritance: A comparison of object-oriented paradigms
🔹 The 'this' keyword in JavaScript and how its value is determined
🔹 Callbacks, Promises, and Async/Await: Managing asynchronous operations in JavaScript
🔹 Diving into ES6 features like Arrow functions, Template literals, and Destructuring
🔹 Exploring Higher-order Functions and their role in functional programming
🔹 The significance of the Event Loop and Concurrency Model in JavaScript
🔹 Handling errors and exceptions using try...catch blocks in JavaScript
🔹 Deep dive into Array methods like map, filter, reduce, and forEach
🔹 Understanding the concept of Prototypes and how they relate to Objects
🔹 Scope chain and Lexical Scoping: How JavaScript handles variable access
🔹 The difference between == and === in JavaScript for value comparison
🔹 Caching and Memoization techniques for optimizing performance
🔹 JavaScript Design Patterns for writing efficient and maintainable code
🔹 Throttling and Debouncing: Controlling the rate of function execution
🔹 Common array and string manipulation techniques in JavaScript
🔹 Exploring ES modules and their role in modern JavaScript development
🔹 Functional vs. Class Components in React: Choosing the right approach
🔹 JavaScript's new features in ES7, ES8, and beyond
🔹 DOM manipulation and event handling using Vanilla JavaScript
🔹 Understanding CORS (Cross-Origin Resource Sharing) and how to handle it
🔹 Implementing data structures like linked lists, stacks, and queues in JavaScript
🔹 The importance of Web APIs and how to work with them in JavaScript
🔹 Unit testing with popular testing frameworks like Jest or Mocha
🔹 JavaScript bundlers and their role in optimizing code for production
🔹 Security best practices for JavaScript applications, including XSS and CSRF protection
🔹 The concept of currying and partial application in functional programming

📚 Brush up on these concepts and be well-prepared for your JavaScript interview! Good luck!

🔹 Deep dive into Array methods like map, filter, reduce, and forEach
🔹 Exploring Higher-order Functions and their role in functional programming

- Before writing polyfill for any methods, consider below points

  - Findout whether it is related to Array (map, filter, reduce, forEach ) or Function (call, apply, bind)
  - Think about the input and output the method - what it takes as input and what it gives back as output

- Polyfill (map, reduce, forEach, filter, slice, find, flat, etc...)
- Closure
- Call, Apply, Bind (Polyfill)
- Currying, Infinite currying
- Compose and Pipe (Polyfill)
- Debouncing (Polyfill)
- Throttling (Polyfill)
- Callback, Callback hell
- Promise (Polyfill promise.all, promise.any, promise.race, promise.allSettled)
- Promise chaining
- Async await
- Mutation Observer
- Intersection Observer
- Generators
- Prototype, Prototype Inheritance
- Class object
- Composition vs. Inheritance
- Flatten Array (Recursive and Non-Recursive)
- Flatten Object
- This keyword
- Hoisting
- Memoization
- Event Loop, CallStack, Callback Queue, Microtask Queue
- Higher order functions
- Event Bubbling, Capturing, delegation
- Set, Map, WeakSet, WeakMap
- Custom String.split Method
- Method Chaining
- Singleton design pattern
- ClearAllInterval, ClearAllTimeout

Javascript - De-bouncing ⏲ and Throttling ⌚

De-bouncing is just like a timer ⏲

Assume timer is set for 5 seconds and it starts running but somebody reset it again to 5 seconds before completing the previous 5 seconds (lets take it on 3rd second), so in that case again timer will set back to 5 seconds and waits to complete its turn (this loop will continue if somebody resets it again in between 5 seconds)

Throttling is like clock ⌚

It won't reset the time like de-bouncing, it keeps running just like clock.

We can add some alarm to alert for every 5 or 10 minutes. It can tell us the exact time (state in JS) on each alarm.

In Javascript also, this is only called throttling - we might execute a function which should run on every 5 or 10 seconds regardless of what has happened in between. It will consider the state of the variable or any events whatever was there while finishing the giving time.
