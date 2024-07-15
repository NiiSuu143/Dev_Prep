const button = document.querySelector("button");
const box = document.querySelector(".box");

// button.onclick = function() {
//     alert("button was clicked");
// }

const colors = ["lightblue", "blue", "pink", "yellow"];
let i = 0;
button.addEventListener("click", function(){
    // alert("button was clicked");
    // box.style.backgroundColor = "red";
    i = i % colors.length;
    box.style.backgroundColor = colors[i];
    i++
})
