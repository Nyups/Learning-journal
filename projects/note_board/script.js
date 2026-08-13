// Logic 01
const input = document.querySelector("input");
const button = document.getElementById("adding");
const taskList = [];
const task_container01 = document.getElementById("task")

button.addEventListener("click", function () {
    const newTask = document.createElement("li");
    newTask.textContent = input.value;
    taskList.push(input.value);
    task_container01.appendChild(newTask);
    console.log(taskList);

    newTask.addEventListener("click", function() {
        newTask.remove()
    })
})

//////////////////////////////////////////////////////////////
// War zone
//////////////////////////////////////////////////////////////
// Test
const form = document.querySelector("#task_form");

form.addEventListener("submit", function(event) {
    event.preventDefault(); 
    // allow us to handle the submit instead of the page
    // trying to send it somewhere by default
})

// Taks Maker 2.0 :

// Base Elements (Ok)
const task_container = document.querySelector("#task_container")
const task_form = document.querySelector("#task_form")
const task_input = document.querySelector("#task_input")
const task_priority = document.querySelector("#priority")
const task_category = document.querySelector("#category")
const task_date = document.querySelector("#due_date")
const task_submit = document.querySelector("#task_submit")
const task_card_list = []
// Completed card part (Ok)
const completed_task_container = document.querySelector("#completed_task_container")
const completed_task = []
// Save button
const local_save = document.querySelector("#saving");
const local_load = document.querySelector("#loading");

// Action

// Test function (Ok)
task_submit.addEventListener("submit", function() {
    console.log(`
        ${task_input.value} 
        ${task_priority.value} 
        ${task_category.value} 
        ${task_date.value}
    `)
})
// Task card creation
task_submit.addEventListener("click", function() {
    // Prevent empty task
    if (task_input.value.trim() === "") {
        alert("Task area cannot be empty genius.")
        return
    }

    // Creating the card
    const task_card = document.createElement("div")
    task_card.classList.add("task_card")

    // Card content
    task_card.innerHTML = `
    <h3>${task_input.value}</h3>
    <ul>
    <li>Importance : ${task_priority.value}</li>
    <li>Category : ${task_category.value}</li>
    </ul>
    <p>Date : ${task_date.value}</p>
    <div>
        <input type="checkbox" name="To-do" id="completed" value ="true"/>
        <label for="completed">Done</label>
    </div>
    <button class="delete_button">Remove</button>
    `
    // Style
    task_card.style.border = "solid 1px white"
    task_card_list.push(task_card)
    task_container.appendChild(task_card) 
    
    // Delete function (Ok)
    const delete_button = task_card.querySelector(".delete_button") // yes we can do that
    delete_button.addEventListener("click", function() {
        task_card.remove()
    })

    // Filtering task based on Checkbox (OK)

     const checkbox = task_card.querySelector("input[type='checkbox']") 
        console.log(checkbox) // return null help
     checkbox.addEventListener("change", function () {
        if (checkbox.checked) {
            completed_task_container.appendChild(task_card)
            console.log("I became true !")
        } else {
            task_container.appendChild(task_card)
            console.log("I became false !")
        }
     })

     // Save test
     local_save.addEventListener("click", function() {
     localStorage.setItem("saved_task", JSON.stringify(task_card))
     console.log("saved")
     })
      
      local_load.addEventListener("click", function() {
      JSON.parse(localStorage.getItem("saved_task"))
      console.log("Loaded")
     })

    return task_card  
})




// function create_task() {
//     const task_card = document.createElement("div")
//     task_card.classList.add("task_card")
// 
//     task_card.innerHTML = `
//     <h3>${task_input.value}</h3>
//     <ul>
//     <li>Importance : ${task_priority.value}</li>
//     <li>Category : ${task_category.value}</li>
//     </ul>
//     <p>Date : ${task_date.value}</p>
//     `
//     return task_card
// }



