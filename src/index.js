document.addEventListener("DOMContentLoaded", () => {
  // your code here

  const button = document.getElementsByTagName('input')[1];
  const list = document.getElementById('tasks');
  const input = document.getElementById('new-task-description');

  button.addEventListener('click', function(event){
    let taskDescription = input.value;
    let element = document.createElement('li');

    event.preventDefault();

    element.innerHTML = taskDescription;

    list.appendChild(element);
  });

});
