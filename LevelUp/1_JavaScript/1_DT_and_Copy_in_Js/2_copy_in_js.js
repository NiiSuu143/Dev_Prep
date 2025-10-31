/***********
 * assignment ->
 * non-primitive -> reference copy
 * primitive -> value copy
 * *******/
// const arr = [10, 20, [30, 50, 60], 40];
// const arr2 = arr;

// console.log("arr", arr, "arr2", arr2);

// arr2[1] = 100;  // it will also assign 100 in the arr[1] because the stack stores only the reference of the arr so, that is the problem.
// console.log(".....................");
// console.log("arr", arr, "arr2", arr2);

/******** In primitive value copy -> this kind of problem is not there ********/



/*************************************************
 * Shallow copy -> one level of data copy
 * -> what about when data is more nested..... -> deepCopy
 * ********************************************************/
// const arr = [10, 20, [30, 50, 60], 40];
// const arr2 = [];
// for (let i = 0; i < arr.length; i++) {
//     arr2.push(arr[i]);
// }

/*********** 1. spread of array ************/ 
// const arr2 = [...arr];  

// console.log("arr", arr, "arr2", arr2);
// arr2[1] = 100;
// console.log(".....................");
// console.log("arr", arr, "arr2", arr2);


/************************ 2. spread of objects******************************/ 
// let person = {
//     firstname : 'king',
//     lastname : 'of kings',
//     address : {
//         street : 'North 1st street',
//         city: 'San Jose',
//         state: 'CA',
//         country: 'USA'
//     },
// };

// let person2 = {};
// for (let key in person) {
//     person2[key] = person[key];
// }

// let person2 = {...person};  // spread of objects
// console.log("person", person);
// console.log("person2", person2);

// person2.firstname = 'Queen'

// console.log("person", person);
// console.log("person2", person2);


/************** Rest Parameters *****************/ 
// function fn(...params) {
//     console.log(params);
// }
// fn(1,2,3,4);
// fn(1,4,6);


/************** 2. Object Assign ****************/ 
// let copiedObject = Object.assign({}, person);
// console.log("person", person);
// console.log("copiedObject", copiedObject);

// copiedObject.firstname = 'Queen'

// console.log("`````````````````````````````")
// console.log("person", person);
// console.log("copiedObject", copiedObject);


/*******************
 * Deep copy -> copying all the values however nested the data is 
 * **********************/ 

// const arr = [10, 20, [30, 50, 60], 40];

// structureClone -> browser (not widely supported) (object arr,)
// const deepCopiedArray = structuredClone(arr);
// deepCopiedArray[2][1] = 100;
// console.log("arr", arr, "deepCopiedArray", deepCopiedArray);

// console.log("```````````````````````````");
// const spreadArray = [...arr];

// spreadArray[2][1] = 1000;
// console.log("arr", arr, "spreadArray", spreadArray);

/*********************
 * 2. Json.stringify and JSON.parse(); -> used in case of objects -> very slow process
 * ******************/

let person = {
    firstname : 'king',
    lastname : 'of kings',
    address : {
        street : 'North 1st street',
        city: 'San Jose',
        state: 'CA',
        country: 'USA'
    },
};

// stringify -> converted into string
let stringObject = JSON.stringify(person);
console.log(stringObject)
// string -> parse -> object
let newObject = JSON.parse(stringObject);
console.log(newObject);
