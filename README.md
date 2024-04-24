# todoList.javascript
To-do list project creatim
Advanced DOM Manipulation Exercise: Interactive To-Do List

Objective: Create an interactive to-do list where users can add tasks, mark them as complete, edit them, and delete them.

Initial Setup:

HTML file with:
An input field for entering tasks.
A button to add tasks.
An empty div or ul element where tasks will be listed.

JavaScript Tasks:

Adding New Tasks:

When the user enters a task in the input field and clicks the add button, a new item should be added to the list.
Each task item should include the task text, an edit button, a delete button, and a checkbox to mark it as complete.
Marking Tasks as Complete:

When the checkbox next to a task is checked, the task text should be styled to indicate completion (e.g., strike-through).
Use CSS class toggling to achieve this.

Editing Tasks:

Clicking the edit button next to a task should allow the user to modify the task text.
This might involve replacing the text with an input field and providing a way to save the changes.

Deleting Tasks:

Clicking the delete button should remove the task from the list.

Persisting the Task List:

Use localStorage to save the tasks, so they persist even when the page is refreshed.
Load the tasks from localStorage when the page loads.

Bonus: Task Reordering:

Implement drag-and-drop functionality to reorder the tasks.
This can be done using the HTML5 Drag and Drop API or a library like SortableJS.


Enhanced Interactive To-Do List Exercise
Objective: Expand the interactive to-do list to include more complex JavaScript features such as loops, array operations, and logic operators.

Setup and Initial Steps:

Same HTML setup as before.
JavaScript will manage an array to store the tasks, each task being an object with properties like text, completed, id, etc.
JavaScript Tasks:

Storing Tasks in an Array:

Instead of directly manipulating the DOM, use an array of objects to store tasks.
Each task object might look like { id: uniqueId, text: 'Task Description', completed: false }.
Displaying Tasks with a Loop:

Use a loop (e.g., forEach) to iterate over the array and display each task in the list.
When a task is added, updated, or deleted, re-render the list based on the array.
Adding New Tasks with Array Manipulation:

When a new task is added, create a new task object and add it to the array.
Use methods like array.push() to add new tasks.
Marking Tasks as Complete:

When a task is marked as complete, update the completed property of the corresponding task object.
Use logic operators (e.g., if (task.completed) {...}) to toggle CSS classes for display.

Editing Tasks:

Implement task editing by finding the task in the array (using array.find() or a loop) and updating its text property.
Handle scenarios where the task might not be found using logic operators (e.g., if (!task) { /* Handle error */ }).

Deleting Tasks:

Delete a task by filtering it out of the array using array.filter().
Persisting the Task List with Loops:

Use localStorage to save the array of tasks.
When loading tasks from localStorage, convert them back into an array (if stored as a string) and use a loop to render them.

Bonus: Advanced Filtering and Sorting:

Implement features to filter (e.g., show only completed tasks) and sort (e.g., by date added) the tasks.
Use array methods like filter(), sort(), and combined logic within loops for these features.
