// Function for adding tasks via "Enter" key
function enter(event) {
  if (event.key === "Enter") {
    addTask();
  }
}

// Function to add a new task
function addTask() {
  var taskInput = document.getElementById("taskInput");
  var taskText = taskInput.value;
  if (taskText !== "") {
    var newTask = createNewTask(taskText);
    document.getElementById("activeTasks").appendChild(newTask);
    taskInput.value = "";
    saveData();
  } else {
    window.alert("Please enter valid task.");
  }
}

// Function to create a new task item
function createNewTask(taskText) {
  var newTask = document.createElement("li");
  newTask.textContent = taskText;

  var checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.addEventListener("change", function () {
    moveTask(newTask, checkbox.checked);
  });

  var editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.addEventListener("click", function () {
    editTask(newTask);
  });

  var deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.addEventListener("click", function () {
    deleteTask(newTask);
  });

  newTask.appendChild(checkbox);
  newTask.appendChild(editBtn);
  newTask.appendChild(deleteBtn);

  saveData();
  return newTask;
}

// Function to move tasks between current and completed lists
function moveTask(newTask, completed) {
  var activeTasksList = document.getElementById("activeTasks");
  var completedTasksList = document.getElementById("completedTasks");

  if (completed) {
    completedTasksList.appendChild(newTask);
  } else {
    activeTasksList.appendChild(newTask);
  }
}

// Function to edit tasks
function editTask(newTask) {
  var newText = prompt("Edit task:", newTask.taskText);
  if (newText !== "") {
    newTask.textContent = newText.trim();

    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", function () {
      moveTask(newTask, checkbox.checked);
    });

    var editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.addEventListener("click", function () {
      editTask(newTask);
    });

    var deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", function () {
      deleteTask(newTask);
    });

    newTask.appendChild(checkbox);
    newTask.appendChild(editBtn);
    newTask.appendChild(deleteBtn);

    saveData();
  } else {
    newTask.remove();
  }
}

// Function to delete tasks
function deleteTask(newTask) {
  newTask.remove();
}

function saveData() {
  var activeTasksList = document.getElementById("activeTasks");
  var tasks = activeTasksList.getElementsByTagName("li");
  var taskTexts = [];
  for (var i = 0; i < tasks.length; i++) {
    taskTexts.push(tasks[i].textContent);
  }
  localStorage.setItem("tasks", JSON.stringify(taskTexts));
}

function loadData() {
  localStorage.getItem("tasks");
  console.log("value loaded succesfully");
}
