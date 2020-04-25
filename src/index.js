document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let clickSubmit = document.getElementsByTagName("input")[1];
  clickSubmit.addEventListener("click",displayMethod);
  function  displayMethod (event) {
    let name = document.getElementById("new-task-description").value;
    let task = document.getElementById("tasks")
    let li = document.createElement("li")   
    li.innerHTML = name;
    task.appendChild(li)
    event.preventDefault();  
    
  }


});
