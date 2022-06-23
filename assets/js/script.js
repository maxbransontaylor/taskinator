var buttonE1 = document.querySelector("#save-task");
var tasksToDoEl = document.querySelector("#tasks-to-do");
var taskIdcounter = 0;
var createTaskHandler = function () {
  var listItemE1 = document.createElement("li");
  listItemE1.className = "task-item";
  listItemE1.textContent = "new task";
  tasksToDoEl.appendChild(listItemE1);
};
buttonE1.addEventListener("click", createTaskHandler);
