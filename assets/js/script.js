var formE1 = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");
var createTaskHandler = function (event) {
  event.preventDefault();
  var listItemE1 = document.createElement("li");
  listItemE1.className = "task-item";
  listItemE1.textContent = "new task";
  tasksToDoEl.appendChild(listItemE1);
  console.log(event);
};
formE1.addEventListener("submit", createTaskHandler);
