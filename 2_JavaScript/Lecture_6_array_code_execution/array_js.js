/****
 * Array
 * array don't have a strict size
 * -> add, remove elements from it
 * 
 *****/

let arr=[1,2,3,4];
let arr2=[];

// // print
// console.log("Array = ", arr);
// console.log(arr2);

// // iterate
// for(let i=0;i<=arr.length;i++) {
//     console.log("index", i, "value", arr[i]);
// }


/**************Important Methods**************
 * 1. add last -> push
 * 2. remove last -> pop
 * 3. add first -> unshift
 * 4. remove first -> shift
 * **/
// // 1. push() - add element at the end of the array
arr.push(10);
// console.log("after push =", arr)
;
// // 2. pop() -> remove element at the end of the array
// arr.pop();
// console.log("after pop =", arr);

// // 3. unshift() -> add element at the start of the array
arr.unshift(8);
console.log("after unshift =", arr);

// // 4. shift() -> remove element from the start of the array
// arr.shift();
// console.log("after shift =", arr);

// // 5. slice -> slice a copy of the array from start index to end_index - 1
// // input -> start index to (end_index - 1)
// let sliceArr = arr.slice(1, 3);
// console.log("original array =", arr);
// console.log("sliced array =", sliceArr);

// // 6. splice(index, no. of element) -> to delete or remove the element of the insert index 
// // and no. of element u want to remove
// arr.splice(3, 1);
// console.log("after delete =", arr);

// // 7. indexOf -> find the index element of the array
// console.log("index of 5 =", arr.indexOf(10));
// console.log("index of 30 =", arr.indexOf(30));

// // includes
// console.log("is elements present", arr.includes(4));


let fruits = ["apple", "orange", "banana"];
let str = fruits.join("/");
// by default for join method it has ","
console.log("string =", str);