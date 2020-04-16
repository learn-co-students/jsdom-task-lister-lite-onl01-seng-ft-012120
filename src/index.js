document.addEventListener("DOMContentLoaded", () => {
  // your code here

  const ul = document.getElementById("tasks");
  const task = document.getElementById("new-task-description");
  const button = document.querySelector("input[type=submit]");

  function removeTask() {
    this.parentNode.remove();
  }

  function createButton() {
    let deleteButton = document.createElement("button");
    deleteButton.innerText = "X";
    deleteButton.id = "delete";
    deleteButton.onclick = removeTask;
    return deleteButton;
  }

  function createTask(button) {
    let li = document.createElement("li");
    priority(li)
    li.innerText = task.value + " ";
    li.appendChild(button);
    ul.appendChild(li);
  }

  function priority(task){
    const priority = document.getElementById('priority');
    if( priority.value > 1){
      task.style.backgroundColor = 'red'
    } else if (priority.value > 0){
      task.style.backgroundColor = 'yellow'
    } else {
      task.style.backgroundColor = 'green'
    }
  }
  button.addEventListener("click", function (e) {
    e.preventDefault();
    if (task.value) {
      createTask(createButton());
    }
  });
});
