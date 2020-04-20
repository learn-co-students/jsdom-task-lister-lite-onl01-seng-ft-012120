document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.getElementById('create-task-form');
  form.addEventListener("submit", function(e){
    e.preventDefault();
    let input = document.getElementById("new-task-description");
    let list = document.getElementById('tasks');
    let task = document.createElement('li');
    let taskColor = document.getElementById('priority');
    let button = document.createElement('input');
    
    button.setAttribute('type', 'submit');
    button.setAttribute('name', 'x');
    button.setAttribute('value', 'x');
    list.appendChild(task);
    if (taskColor.value === "Green"){
      task.style.background = "Green";
    }
    else if (taskColor.value === "Yellow"){
      task.style.background = "Yellow";
    }
    else if (taskColor.value === "Red"){
      task.style.background = "Red";
    }
    else{
    }
    task.innerText = `${input.value}`;
    task.appendChild(button);
    button.addEventListener('click', function(e){
      e.preventDefault();
      task.remove();
    });
  });    
 
  
  
});
