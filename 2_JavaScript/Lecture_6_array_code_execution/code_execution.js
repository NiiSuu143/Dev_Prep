// // code execution -> high level
// let a=10;
// console.log(a);
// function fn() {
//     console.log("I am a fn");
//     function inner() {
//         console.log("I am an inner");
//     }
//     inner();
// }
// fn();
// console.log(a);

/**********************
 * 1. JS -> all the code is executed on call stack and inside a execution context
 * 2. An execution context is created when
 *      a. a function is called 
 *      b. code execution starts for global code
 * -> global execution context
 * 3. Execution context -> it executes in two phase
 *      a. Execution context creation
 *          i) Memory allocation -> hoisting
 *              i. variable -> undefined
 *              ii. function -> memory location is heap
 *          ii) window, 
 *          iii) this,
 *          iv) outer scope 
 *      b. code execution
 **********************/

// let b;
// console.log(b);
// b=20;
// console.log(b);

// fn();
// function fn() {
//     console.log("Hello");
// }


// // always memory location first and after that code execution
// real()
// function real() {
//     console.log("I am real and always run me");
// }
// function real() {
//     console.log("No!! I am real one");
// }
// function real() {
//     console.log("You both are wasted");
// }

// // window
// console.log(window.confirm("hello"));
// console.log(window.alert("hello"));

 