// Function for adding tasks via "Enter" key
function enter(event) {
  if (event.key === 'Enter') {
    addTask();
  }
}

// Function to add a new task
function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskText = taskInput.value.trim();
  if (taskText !== '') {
    const newTask = createNewTask(taskText);
    document.getElementById('currentTasks').appendChild(newTask);
    taskInput.value = '';
  }
}

// Function to create a new task item
function createNewTask(taskText) {
  const newTask = document.createElement('li');
  newTask.textContent = taskText;

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.addEventListener('change', function () {
    moveTask(newTask, checkbox.checked);
  });

  const editBtn = document.createElement('button');
  editBtn.textContent = 'Edit';
  editBtn.addEventListener('click', function () {
    editTask(newTask);
  });

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.addEventListener('click', function () {
    deleteTask(newTask);
  });

  newTask.appendChild(checkbox);
  newTask.appendChild(editBtn);
  newTask.appendChild(deleteBtn);

  return newTask;
}

// Function to move a task between current and completed lists
function moveTask(newTask, completed) {
  const currentTasksList = document.getElementById('currentTasks');
  const completedTasksList = document.getElementById('completedTasks');

  if (completed) {
    completedTasksList.appendChild(newTask);
  } else {
    currentTasksList.appendChild(newTask);
  }
}

// Function to edit a task
function editTask(newTask) {
  const newText = prompt('Edit task:', newTask.textContent);
  if (newText !== null) {
    newTask.textContent = newText.trim();
  }
}

// Function to delete a task
function deleteTask(newTask) {
  newTask.remove();
}