/**
 * variable declaration
 * how js run the code -> dynamically typed language
 */
console.log("inside intro");

// variable declaration -> verName is a variable that currently holds undefined
let varName;
// default value of a variable is undefined
// console.log("6",varName);
// // js numeric value
// varName=10;
// console.log("9",varName);
// varName=8.9;
// console.log("11",varName);

// // in js we have only string
// let newVar;
// console.log(newVar);
// newVar="I am a string";
// console.log(newVar);

// // boolean
// newVar=true;
// console.log(newVar);

// // null, undefined(non-existence)
// newVar=null;
// console.log(newVar);

/**
 * how to know the current type of a value that
 * a variable is having
 * There only numbers
 * There only strings
 * what type of values it can have
 * * Primitive -> numbers, strings, boolean, null, undefined
 *             -> bigInt, symbols
 * * Non-primitive -> functions, array and objects
 */

// varName=10;
// varName="hello";
// varName=false;
// varName=10.1;
// console.log(typeof varName);
// // there is no float in js only number
// console.log(5/2);


/**********
 * conditionals 
 * 
 * *******/

// let number=10;
// if(number % 2 == 0) {
//     console.log("I am even");
// }
// else{
//     console.log("I am odd");
// }



let days="monday";
// if(days=="monday") {
//     console.log("working...");
// } else if(days=="tuesday" || days == "wednesday" || days == "thursday") {
//     console.log("today is off");
// } else if(days == "saturday" || days == "sunday") {
//     console.log("weekend");
// } else {
//     console.log("Invalid day");
// }


// // switch case
// switch(days) {
//     case "tuesday":
//         console.log("Holiday");
//         break;
//     case "monday":
//     case "wednesday":
//     case "thursday":
//     case "friday":
//         console.log("working");
//         break;
//     case "saturday":
//     case "sunday":
//         console.log("weekend");
// }


/****
 *  loop -> while, for loop, do while, for each
 * 
 ******/

// for(let num=1;num<=10;num++) {
//     console.log("number is", num);
// }

/******
 * function -> reusable  block of code create
 *****/

// console.log("hello");

// function fn() {
//     console.log("I am a function.");
// }
// console.log("hello again");

// fn();


// function fn(a, b) {
//     console.log("a =", a);
//     console.log("b =", b);
//     let d = a + b;
//     return d;
// }

// // fn("hello","world");
// let result = fn(10,20);
// console.log(result);


/********
 * string -> how string works in js
 * concatination : appending a value to a string
 ********/

// let string1 ="I am a string";
// let string2 ="I am a string";
// let trmplateString = `I am also a string
// but can be multiple lines`
// console.log(string1);
// console.log(string2);
// console.log(trmplateString);
 

function greet(firstNameVar) {
    console.log("Hii " + firstNameVar + "!");
    console.log(`Hii ${firstNameVar}!`);
}

let firstName = "Sunanda"

greet(firstName);
