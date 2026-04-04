// get element
let taskInput = document.getElementById("taskInput");
let addButton = document.getElementById("addBtn");
let taskList = document.getElementById("taskList");


let myTasks = [];

// add task button
addButton.addEventListener("click", addNewTask);


;
// function to add task
function addNewTask() {
  let userText = taskInput.value.trim();

  if (userText === "") {
    alert("Please enter something");
    return;
  }

  let newTask = {
    text: userText,
    done: false
  };

  myTasks.push(newTask);
  displayAllTasks();

  taskInput.value = "";
}
//Haramanjeet github test
//
