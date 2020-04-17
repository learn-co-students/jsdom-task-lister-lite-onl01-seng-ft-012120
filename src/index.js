document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("create-task-form").addEventListener("submit", (e) => { 
    e.preventDefault();
    // get the value in the input
    text = document.getElementById("new-task-description").value;
    // add li with the value that was in the input
    tasks = document.getElementById("tasks");
    newLi = document.createElement("li");
    newLi.innerHTML = text;
    tasks.appendChild(newLi);
  });
});
