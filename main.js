// Function for adding tasks via "Enter" key
function enter(event) {
  if (event.key === "Enter") {
    addTask();
  }
}

// ADDING TASKS:
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

// CREATING NEW TASK ITEMS:

function createNewTask(taskText) {
  var newTask = document.createElement("li");
  newTask.draggable = "true";

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

  var checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.addEventListener("change", function () {
    moveTask(newTask, checkbox.checked);
    saveData();
  });

  var taskControls = document.createElement("div");
  taskControls.classList.add("task-controls");
  taskControls.appendChild(checkbox);
  taskControls.appendChild(editBtn);
  taskControls.appendChild(deleteBtn);

  newTask.appendChild(taskTextElement);
  newTask.appendChild(taskControls);

  return newTask;
}

// MOVING TASKS:

function moveTask(newTask, completed) {
  var activeTasksList = document.getElementById("activeTasks");
  var completedTasksList = document.getElementById("completedTasks");

  if (completed) {
    completedTasksList.appendChild(newTask);
  } else {
    activeTasksList.appendChild(newTask);
  }
}

// EDITING TASKS:

function editTask(newTask) {
  var newText = prompt("Edit task:", newTask.querySelector("span").textContent);
  if (newText !== null && newText.trim() !== "") {
    newTask.querySelector("span").textContent = newText.trim();
    saveData();
  } else if (newText === "") {
    newTask.remove();
    saveData();
  }
}

// DELETING TASKS:

function deleteTask(newTask) {
  newTask.remove();
  saveData();
}

// SAVING TASKS:

function saveData() {
  var tasks = [];
  var taskElements = document.querySelectorAll(
    "#activeTasks li, #completedTasks li"
  );

  taskElements.forEach(function (task) {
    tasks.push({
      text: task.querySelector("span").textContent,
      completed: task.parentElement.id === "completedTasks",
    });
  });

  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// LOADING TASKS:

function loadData() {
  var tasks = JSON.parse(localStorage.getItem("tasks"));

  if (tasks != "") {
    tasks.forEach(function (task) {
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

window.addEventListener("load", loadData);

// REORDERING TASKS:

function initializeSortableLists() {
  const activeTasksList = document.getElementById("activeTasks");
  const completedTasksList = document.getElementById("completedTasks");

  const activeTasksSortable = new Sortable(activeTasksList, {
    group: "tasks",
    animation: 150,
    onUpdate: function (event) {
      saveReorderedTasks(event.from.id, event.to.id);
    },
  });

  const completedTasksSortable = new Sortable(completedTasksList, {
    group: "tasks",
    animation: 150,
    onUpdate: function (event) {
      saveReorderedTasks(event.from.id, event.to.id);
    },
  });

  function saveReorderedTasks(fromId, toId) {
    saveData({ from: fromId, to: toId });
  }
}

initializeSortableLists();
