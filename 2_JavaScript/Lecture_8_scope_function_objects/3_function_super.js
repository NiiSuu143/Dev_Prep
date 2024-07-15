
/********
 * function has two parts
 *      fn definiton
 *      fn invocation
 **************************/

// function definiton
// function statement
// function fn() {
//     console.log("Hello");
// }

// // fn ivocation -> code inside that fn is execute
// fn();
// // you are just accessing it address


// // variables -> assigned -> reference , value
// let arr=[10,20,30];
// let arr2=arr;
// let a=10;
// let b=a;

// // variables -> can be passed as a parameter to a functon

// function fn(params) {
//     console.log("Hello params", params);
// }
// fn(10);
// fn("Hello");
// fn(arr2);

/*********************
 * you can treat a function as a variable
 ************************/

// function fn() {
//     console.log("Hello");
// }

// // fn ivocation -> code inside that fn is execute
// fn();
// console.log(fn);


// // let arr=[10,20,30];
// // let arr2 = arr;


// // function expression
// const refFunction = function a() {
//     console.log("Hello I am a function");
// }

// const newFnVar = refFunction;
// newFnVar();
// refFunction();


function bigger(paramFn) {
    console.log("inside bigger");
    paramFn();
}
function smaller() {
    console.log("I am smaller");
}
bigger(smaller);