// Add task
function addTask() {
  const taskInput = document.getElementById("task-input");
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  const li = document.createElement("li");
  li.innerHTML = `
    <span onclick="toggleComplete(this)">${taskText}</span>
    <button onclick="deleteTask(this)">Delete</button>
  `;

  document.getElementById("task-list").appendChild(li);
  taskInput.value = "";
}

// Mark task as completed
function toggleComplete(span) {
  span.parentElement.classList.toggle("completed");
}

// Delete task
function deleteTask(button) {
  button.parentElement.remove();
}
