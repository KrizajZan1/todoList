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
    document.getElementById("currentTasks").appendChild(newTask);
    taskInput.value = "";
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

  return newTask;
}

// Function to move tasks between current and completed lists
function moveTask(newTask, completed) {
  var currentTasksList = document.getElementById("currentTasks");
  var completedTasksList = document.getElementById("completedTasks");

  if (completed) {
    completedTasksList.appendChild(newTask);
  } else {
    currentTasksList.appendChild(newTask);
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
  } else {
    newTask.remove();
  }
}

// Function to delete tasks
function deleteTask(newTask) {
  newTask.remove();
}
