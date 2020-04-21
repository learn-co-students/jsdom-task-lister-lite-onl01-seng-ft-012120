document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let taskForm = document.querySelector("#create-task-form");
  let taskDescription = document.querySelector("#new-task-description"); 
  let tasks = document.querySelector("#tasks");
  
  // let deleteButton = document.createElement("button");
  // deleteButton.innerHTML = "x";
  
  taskForm.addEventListener("submit", function(e) {
    e.preventDefault();
    let element = document.createElement('li');
    let deleteButton = document.createElement("button");
    deleteButton.innerHTML = "x";
    element.innerHTML = taskDescription.value;
    tasks.appendChild(element);

    element.appendChild(deleteButton)
    deleteButton.addEventListener("click", function(event) {
      tasks.removeChild(event.target.parentNode);
    })
  // deleteButton.addEventListener("click", function(event) {
  //   tasks.removeChild(event.target.parentNode);
  })

 


});
