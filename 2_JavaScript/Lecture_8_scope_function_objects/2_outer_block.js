// let a = 10;
// console.log("value of a in global", a);
// function outer() {
//     console.log("value of a in outer", a);

//     function inner() {
//         let a = 20;
//         console.log("value of a in the inner", a);
//     }
//     inner();
// }
// outer();
// console.log("value of a in global", a);


/******
 * how outer scope behaves
 * outer variable and function -> outer scope
 * this outer scope is defined by function declaration
 * -> In js, the outer is lexically scoped
 *******/

let varName = 10;
function a() {
    console.log(varName)
}
function b() {
    let varName = 20;
    console.log("value of varName in b", varName);
    a();
    console.log("value of varName in b again", varName);
}
b();