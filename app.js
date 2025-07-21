const taskForm = document.getElementById("task-form");
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");
const toggleThemeBtn = document.getElementById("toggle-theme-btn");

taskForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const task = taskInput.value.trim();

  if (task) {
    taskList.append(createTaskElement(task));
    taskInput.value = "";
  }
});

function createTaskElement(taskText) {
  const li = document.createElement("li");
// Crear tareas
  const spanText = document.createElement("span");
  spanText.textContent = taskText;
  spanText.className = "task-text";
  li.appendChild(spanText);

  // Botón editar
  const editBtn = createButton("✏️", "edit-btn");
  editBtn.addEventListener("click", () => {
    const newTask = prompt("Edita tu tarea:", spanText.textContent);
    if (newTask !== null && newTask.trim() !== "") {
      spanText.textContent = newTask.trim();
    }
  });

  // Botón eliminar
  const deleteBtn = createButton("❌", "delete-btn");
  deleteBtn.addEventListener("click", () => {
    if (confirm("¿Estás segura de eliminar esta tarea?")) {
      li.remove();
    }
  });

  li.append(editBtn, deleteBtn);
  return li;
}

function createButton(text, className) {
  const btn = document.createElement("span");
  btn.textContent = text;
  btn.className = className;
  btn.style.cursor = "pointer";
  btn.style.marginLeft = "10px";
  return btn;
}

// Tema claro/oscuro
toggleThemeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
});
