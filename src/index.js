document.addEventListener("DOMContentLoaded", () => {
  const submit = document.querySelector(".submit");
  const newTaskDescription = document.querySelector("#new-task-description");
  const list = document.querySelector("#tasks");
  submit.addEventListener("click", function(event) {
    const listItem = document.createElement("LI");
    listItem.innerHTML = newTaskDescription.value;
    list.appendChild(listItem);
    event.preventDefault();
  });
});
