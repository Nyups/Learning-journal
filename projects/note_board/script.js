// Logic

const input = document.querySelector("input");
const button = document.getElementById("adding");
const taskList = [];
const task_container = document.getElementById("task")

button.addEventListener("click", function () {
    const newTask = document.createElement("li");
    newTask.textContent = input.value;
    taskList.push(input.value);
    task_container.appendChild(newTask);
    console.log(taskList);

    newTask.addEventListener("click", function() {
        newTask.remove()
    })
})


// input.addEventListener("input", function() {
//     console.log(input.value);
// });