function advancedManipulation(words) {
    let firstWord = words.shift();
    words.unshift("new");
    words.unshift(firstWord);
    // for remove
    words.splice(2, 1);
    // join
    let joinStn = words.join(",");
    return joinStn;
}

let words = ["apple", "banana", "cherry", "date"];
let result = advancedManipulation(words);
console.log(result);