document.addEventListener("DOMContentLoaded", () => {

  const createNewTaskForm = document.getElementById("create-task-form");
  const createNewTaskDescription = document.getElementById("new-task-description");
  const createList = document.getElementById("tasks");

  console.log(createList);
  const taskUl = document.getElementById("tasks");

  createNewTaskForm.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(e);
    const newTaskDescription = document.getElementById("new-task-description");
    console.log(createList);
    const newTask = document.createElement("li");
    newTask.innerText = newTaskDescription.value;
    createList.appendChild(newTask);
    e.target.reset();
  });

});
