document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let btn = document.getElementById("btn") 
  let list = document.getElementById("list")

function updateList(e) {
  e.preventDefault();
  let bar = document.getElementById("new-task-description").value
  let node = document.createElement("li");
  node.innerText = bar

  list.appendChild(node)
}
btn.onclick = updateList
});
