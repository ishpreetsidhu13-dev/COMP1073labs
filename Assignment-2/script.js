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

// github not woeking

//still not working
// show all tasks
function displayAllTasks() {
  taskList.innerHTML = "";

  // show unfinished first
  for (let i = 0; i < myTasks.length; i++) {
    if (myTasks[i].done === false) {
      createTaskItem(myTasks[i], i);
    }
  } 
    // show completed
  for (let i = 0; i < myTasks.length; i++) {
    if (myTasks[i].done === true) {
      createTaskItem(myTasks[i], i);
    }
  }
}
// create task
function createTaskItem(task, index) {
  let li = document.createElement("li");

  let check = document.createElement("input");
  check.type = "checkbox";
  check.checked = task.done;

  let text = document.createElement("span");
  text.textContent = task.text;

  if (task.done === true) {
    text.classList.add("completed");
  }

  let removeBtn = document.createElement("button");
  removeBtn.textContent = "Delete";

  li.appendChild(check);
  li.appendChild(text);
  li.appendChild(removeBtn);
  taskList.appendChild(li);



  // checkbox 
  check.addEventListener("change", function () {
    myTasks[index].done = check.checked;
    displayAllTasks();
  });

  // delete
  removeBtn.addEventListener("click", function () {
    myTasks.splice(index, 1);
    displayAllTasks();
  });
}