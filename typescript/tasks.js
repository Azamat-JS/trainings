var taskForm = document.querySelector(".form");
var formInput = document.querySelector(".form-input");
var taskListElement = document.querySelector(".list");
var tasks = [];
taskForm === null || taskForm === void 0 ? void 0 : taskForm.addEventListener("submit", function (event) {
    event.preventDefault();
    var taskDescription = formInput === null || formInput === void 0 ? void 0 : formInput.value;
    if (taskDescription) {
        var task = {
            description: taskDescription,
            isCompleted: false
        };
        addTask(task);
        //add task to list
        //render tasks
        // update local storage
        formInput.value = "";
        return;
    }
    alert("Please enter a task description");
});
function addTask(task) {
    tasks.push(task);
    console.log(tasks);
}
function renderTask(task) {
    var taskElement = document.createElement('li');
    taskElement.textContent = task.description;
    taskListElement === null || taskListElement === void 0 ? void 0 : taskListElement.appendChild(taskElement);
}
