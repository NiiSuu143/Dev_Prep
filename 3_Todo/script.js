// 1. select everything that will be required
const input = document.querySelector("input");
const button = document.querySelector("button");
const taskList = document.querySelector(".list");

// user interaction
const inputHandler = function () {
    // alert("handle");
    // click -> value get
    const newTask = input.value;
    if(newTask.length==0)
        return;
    // alert("task :"+ newTask);
    /*********** Add task ************/
    // element create
    // const taskElem = document.createElement("li");
    const taskElem = createTask(newTask);
    // data add
    // taskElem.innerText = newTask;
    // append
    taskList.appendChild(taskElem);

    // clear the input
    input.value = "";
    // delete element
    const deleteBtn = taskElem.children[1];
    deleteBtn.addEventListener("click", function(){
        taskElem.remove();
    })
    // taskElem.addEventListener("click", function (){
    //     taskElem.remove();
    // })

    function createTask() {
        const div = document.createElement("div");
        const li = document.createElement("li");
        const button = document.createElement("button");
        button.innerText = "Delete";
        li.textContent = newTask;
        div.appendChild(li);
        div.appendChild(button);
        return div;
    }
}
button.addEventListener("click", inputHandler);