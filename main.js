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
    saveData(); // Save data after adding a new task
  } else {
    window.alert("Please enter valid task.");
  }
}

// Function to create a new task item
function createNewTask(taskText) {
  var newTask = document.createElement("li");

  var checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.addEventListener("change", function () {
    moveTask(newTask, checkbox.checked);
    saveData(); // Save data after moving the task
  });

  var taskTextElement = document.createElement("span");
  taskTextElement.textContent = taskText;

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

  newTask.appendChild(taskTextElement);
  newTask.appendChild(checkbox);
  newTask.appendChild(editBtn);
  newTask.appendChild(deleteBtn);

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
  var newText = prompt("Edit task:", newTask.querySelector("span").textContent);
  if (newText !== null && newText.trim() !== "") {
    newTask.querySelector("span").textContent = newText.trim();
    saveData(); // Save data after editing the task
  } else if (newText === "") {
    // If newText is an empty string, remove the task
    newTask.remove();
    saveData(); // Save data after deleting the task
  }
}

// Function to delete tasks
function deleteTask(newTask) {
  newTask.remove();
  saveData(); // Save data after deleting the task
}

// Function to save tasks data to localStorage
function saveData() {
  var tasks = [];
  var taskElements = document.querySelectorAll("#activeTasks li, #completedTasks li");

  taskElements.forEach(function(task) {
    tasks.push({
      text: task.querySelector("span").textContent,
      completed: task.parentElement.id === "completedTasks"
    });
  });

  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Function to load tasks data from localStorage
function loadData() {
  var tasks = JSON.parse(localStorage.getItem("tasks"));

  if (tasks != "") {
    tasks.forEach(function(task) {
      var newTask = createNewTask(task.text);
      if (task.completed) {
        document.getElementById("completedTasks").appendChild(newTask);
        newTask.querySelector("input[type=checkbox]").checked = true;
      } else {
        document.getElementById("activeTasks").appendChild(newTask);
      }
    });
  }
}

// Call the loadData function when the page loads
window.addEventListener("load", loadData);
