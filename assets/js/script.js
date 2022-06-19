var formE1 = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");
var taskFormHandler = function (event) {
  event.preventDefault();
  var taskNameInput = document.querySelector("input[name='task-name']").value;
  var taskTypeInput = document.querySelector("select[name='task-type']").value;
  var taskDataObj = {
    name: taskNameInput,
    type: taskTypeInput,
  };
  createTaskE1(taskDataObj);
};
var createTaskE1 = function (taskDataObj) {
  var listItemE1 = document.createElement("li");
  listItemE1.className = "task-item";
  var taskInfoE1 = document.createElement("div");
  taskInfoE1.className = "task-item";
  taskInfoE1.innerHTML =
    "<h3 class='task-name'>" +
    taskDataObj.name +
    "</h3>" +
    "<span class= 'task-type'>" +
    taskDataObj.type +
    "</span>";
  listItemE1.appendChild(taskInfoE1);
  tasksToDoEl.appendChild(listItemE1);
};
formE1.addEventListener("submit", taskFormHandler);
