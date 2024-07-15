/*****
 * fizz buzz
 * number -> 1-20
 * if number is divisible by 3 -> fizz
 * if number is divisible by 5 -> buzz
 * if number is divisible by both 3 and 5 -> fizzbuzz
 ******/

let target=20;
for(let num = 1; num<=target; num++) {
    if(num % 3 == 0 && num % 5 == 0) {
        console.log("fizzbuzz");
    } else if(num % 3 == 0) {
        console.log("fizz");
    } else if(num % 5 == 0) {
        console.log("buzz");
    } else {
        console.log(num);
    }
}