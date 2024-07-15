/********
 * synchronous -> the code that is executed line by line
 * 
 ************/
// console.log("before");
// function fn() {
//     console.log("I am a fn");
// }
// fn();
// console.log("after");

/*************
 * Asynchronous code : a part of code is executed first and another a section of code is delayed
 * and that part is executed later one
 * 
 */
//1
console.log("before");
setTimeout(fn, 2000);
//2
function fn() {
    console.log("I am a fn");
}
//3
console.log("after");