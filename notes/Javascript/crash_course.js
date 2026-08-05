/*
    DOM Manipulation Crash Course
    =============================

    Keep this file as a reference while experimenting.

    The DOM (Document Object Model) is the browser's
    representation of your HTML as JavaScript objects.

    Example:

    HTML:
    <h1 id="title">Hello</h1>

    JS:
    document.getElementById("title")

    gives you access to that element.
*/


// =====================================
// 1. Selecting HTML Elements
// =====================================

// Select by ID
const title = document.getElementById("title");


// Select first matching element
const button = document.querySelector(".button");


// Select ALL matching elements
const buttons = document.querySelectorAll(".button");


// Example:
// buttons is a NodeList
buttons.forEach((btn) => {
    console.log(btn);
});


// =====================================
// 2. Changing Content
// =====================================


// Change text only (safer)
title.textContent = "New title";


// Add HTML inside an element
title.innerHTML = "<span>Hello</span>";


// Be careful:
// innerHTML can create security problems
// if you insert user-generated content



// =====================================
// 3. Changing CSS
// =====================================


title.style.color = "blue";
title.style.fontSize = "40px";


// Better way:
// use CSS classes

title.classList.add("active");

title.classList.remove("active");

title.classList.toggle("hidden");


// Check if class exists

title.classList.contains("active");


// =====================================
// 4. Creating Elements
// =====================================


const newDiv = document.createElement("div");


newDiv.textContent = "I was created with JS";


newDiv.classList.add("card");


// Put it inside HTML

document.body.appendChild(newDiv);



// =====================================
// 5. Removing Elements
// =====================================


newDiv.remove();


// Remove child manually

// parent.removeChild(child);



// =====================================
// 6. Changing Attributes
// =====================================


const image = document.querySelector("img");


image.setAttribute(
    "src",
    "picture.png"
);


image.getAttribute("src");


image.removeAttribute("alt");



// =====================================
// 7. Events
// =====================================


button.addEventListener(
    "click",
    () => {
        console.log("Button clicked");
    }
);


// Common events:

/*
click
dblclick
mouseover
mouseout
keydown
keyup
submit
change
input
*/


// =====================================
// 8. Getting User Input
// =====================================


const input = document.querySelector("input");


input.addEventListener(
    "input",
    () => {

        console.log(input.value);

    }
);



// =====================================
// 9. Creating A Simple Button
// =====================================


const myButton = document.createElement("button");


myButton.textContent = "Click me";


myButton.addEventListener(
    "click",
    () => {
        alert("Hello!");
    }
);


document.body.appendChild(myButton);



// =====================================
// 10. Traversing The DOM
// =====================================


const element = document.querySelector(".child");


// Parent
element.parentElement;


// Children
element.children;


// First child
element.firstElementChild;


// Last child
element.lastElementChild;


// Next element
element.nextElementSibling;


// Previous element
element.previousElementSibling;



// =====================================
// 11. Data Attributes
// =====================================


/*
HTML:

<div data-id="123"></div>

*/


const card = document.querySelector(".card");


console.log(card.dataset.id);


// Change it

card.dataset.id = "456";



// =====================================
// 12. Forms
// =====================================


const form = document.querySelector("form");


form.addEventListener(
    "submit",
    (event) => {

        // Stops page refresh
        event.preventDefault();


        console.log("submitted");

    }
);



// =====================================
// 13. Building A Mini Component
// =====================================


function createCard(title, description){

    const card = document.createElement("div");

    card.classList.add("card");


    card.innerHTML = `
        <h2>${title}</h2>
        <p>${description}</p>
    `;


    return card;

}



const projectCard = createCard(
    "NyunOS",
    "A vanilla JS operating system portfolio"
);


document.body.appendChild(projectCard);



// =====================================
// 14. Useful DOM Debugging
// =====================================


console.log(element);


// See HTML
console.dir(element);


// Count elements

console.log(
    document.querySelectorAll("*").length
);