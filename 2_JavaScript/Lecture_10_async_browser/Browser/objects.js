// non-premitive -> functions, arrays, objects

// empty object
let obj={}
// adding key
obj.name = "Sunanda Leitanthem";
obj.age = 21;
// update
obj.age = 22;

// print
console.log(obj);
console.log("Your Name is", obj.name);

/*********
 * Object -> key : value
 * -> key : string, number
 * -> value -> any valid js type  
 ********/

/*******
 * values -> we call it properties in JS
 * function -> we call it methods in JS
 */
let cap={
    firstName: "Sunanda",
    lastName: "Leitanthem",
    movies: ["First Avanger", "Winter Soldier", "Civil War"],
    address: {
        country:"Japan",
        state:"Osaka"
    },
    isAvanger: true,
    age: 21,
    sayHi: function () {
        console.log("cap says hii");
    } 
}

// // print this cap object
// console.log("Cap", cap);

// get
console.log("First Name is", cap.firstName);
console.log("Second Movie is",cap.movies[1]);
console.log("Your Country is", cap.address.country);

// update and set
cap.isAvanger=false;
cap.friend = ["Amarjit", "Rex", "Rakesh"];

// delete -> is too slow process
delete cap.movies;
console.log("cap",cap);

//loop
for(let key in cap) {
    console.log("key :", key + " \nvalue :", cap[key]);
}