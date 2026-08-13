// Local storage test and memo
// To store something in the local storage we go like this :
localStorage.setItem("drone_name", "Nyu"); // name of what we store then the value

// And to retrieve it we go like this :
const stored_name = localStorage.getItem("drone_name");
console.log(stored_name); // output : Nyu


// We can remove item like this :
localStorage.removeItem("drone_name");

// Or kill everything like this :
localStorage.clear();




// HOW TO STORE OBJECT AND ARRAY (now we're talking)
// We can't just go like :
const tasks = [
    "Study JS",
    "Study React"
];

// "localStorage.setItem("tasks", tasks);"
// Because it will convert the array into a strong and we won't get it properly back

// So we should use :
// "JSON.stringify()"

// So the save become :
localStorage.setItem("task", JSON.stringify(tasks)); // turn it into string
// Now the array became a JSON string : ["Study JS", "Study React"]


// HOW TO GET IT BACK :
// If we do
const string_task = localStorage.getItem("task");
console.log("the string is :" + typeof(string_task));
// We only get them as a string. (Ok)

// So instead we should :
const actual_task = JSON.parse(localStorage.getItem("task")); // turn the item you get back into what it was before saving it
console.log(tasks);



// THE NULL PROBLEM
// When no task are stored yet we get "null"

// A common way to fix it would be :
const imaginary_task = localStorage.getItem("tasks");
const task_checker = "tasks" ? JSON.parse(localStorage.getItem("task")) : [];
// Which basically mean :
//  Does savedTasks exist?
//         │
//     ┌───┴───┐
//     YES     NO
//      │       │
//   parse     []