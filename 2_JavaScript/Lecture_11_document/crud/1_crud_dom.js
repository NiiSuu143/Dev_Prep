console.log("Document Lecture");
// // read the content of p tag


// // 1. select
// console.log(document.children);
// const html = document.children[0];


// // html iside the second child
// const body = html.children[1];
// console.log("innerHTML", body.innerHTML);


// // querySelector -> selector -> first matching
// // element return
// const body = document.querySelector("body");
// console.log(body.innerHTML);
// const pTag = document.querySelector("p");
// console.log("content inside p is", pTag.textContent);


// // querySelectorAll -> to select all identical tag
// const pTagArr = document.querySelectorAll("p");
// const textData = pTagArr[1].innerText;
// console.log("2nd p tag is",textData);


// const classPtag = document.querySelector(".first");
// console.log("first is",classPtag.textContent);

const idPtag = document.querySelector("#id");
// console.log("2nd p tag is",idPtag.textContent);

// const body = document.querySelector("body");
// console.log(body.innerHTML);
// console.log(body.innerText);
// console.log(body.textContent);


// // update
// idPtag.textContent = "I was updated by Js";
// console.log(idPtag.textContent);

// // styling
// console.log(idPtag.style);

// // update styling
// idPtag.style.backgroundColor = "blue";
// idPtag.style.color = "white";

// const idValue = idPtag.getAttribute("id");
// console.log("the value in id is",idValue);

// delete
// idPtag.remove();

// creation
const liElement = document.createElement("li");
// add text, styling and properties
liElement.innerText = "I am a task";

// select their parent
const ul = document.querySelector(".list");
// append to that
ul.appendChild(liElement);
