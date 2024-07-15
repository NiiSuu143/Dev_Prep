console.log("Event Loop");

/******
 * 1. Every line of code that you wrote in your js file 
 * -> will only execute in call stack
 * 2. For a callback coming from the webAPIS to execute -> callstack should be empty
 * 3. callback queue: As soon as task of asynchronous function is done there callback is immediately
 * enqueued in that queue
 * 4. Event loop -> check the queue and as soon as a callback arrived in the queue 
 * it continuously check if callstack is emty or not and pushed that callback in callstack
 * 
 *********/

// let a = true;
// console.log("Before");
// function fn() {
//     a = false;
//     console.log("I broke the while loop");   
// }
// setTimeout(fn, 1000);
// console.log("After");

// let CurrentPlus6sec = Date.now() + 6000;

// while(Date.now() < CurrentPlus6sec) {

// }


/************
 * Browser
 * * console.log -> browser
 * * setTimeout -> browser
 * * document -> browser
 * * window -> browser
 * what is JS doing then
 * Rule of thumb
 *  JS : logic
 * ********** Enviroment : features **************
 * 
 **************/


/*************** 
 * Mobile Application -> React Native -> JS
 * Frontend -> Browser -> JS
 * Backend -> Nodejs -> JS
 * Desktop -> Electron -> JS
********/

/*******
 * c/c++ -> JAVA(there is no pointer)
 * JAVA -> Js (no multithreading)
 * 
 * ***** */

console.log("Before");
function a() {
    console.log("I am a");
}

function b() {
    console.log("I am b");
}
setTimeout(a, 0);
console.log("After st 0sec call");
setTimeout(a, 1000);
console.log("After st 1sec call");
setTimeout(b, 2000);
console.log("After st 2sec call");
console.log("After");
