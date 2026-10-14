// This file contain basics about DOM manipulation (even though we use framework it's still good to know)
/* --------------------------------------------------------------------------------------------------------------------------------- */
// [SELECTING ELEMENT]
const title = document.querySelector('h1');
// Will select the said tag
const allBtn = document.querySelectorAll('.btn');
// Will select all the element with the class button.
/* --------------------------------------------------------------------------------------------------------------------------------- */
// [CREATING AND MODIFYING ELEMENTS]
const salad = document.createElement('div');
// Create a brand new html element. it can be anything (<div><p><button>).
salad.textContent = "Hello";
// Sets or change the text inside an element
salad.innerHTML = `
<h2>Salad presentation</h2>
<p>Hello I'm a salad hehe... eat me!</p>
`;
// Sets text and parse any HTML tags inside the string.
salad.classList.add('class-name');
salad.classList.remove('class-name');
// Manage CSS classes on element easily
/* --------------------------------------------------------------------------------------------------------------------------------- */
// [ADDING ELEMENT TO THE PAGE]
title.append(salad);
// Add the element to the end of a parent (in this case add 'salad' to the 'title' h1);
title.appendChild(salad);
// Same but old classic way compared to the previous.
title.prepend(salad);
// Used when you want the newest element to appear on the very top of a list.
/* --------------------------------------------------------------------------------------------------------------------------------- */
// [REMOVING ELEMENTS]
salad.remove();
// Modern and easy way to delete an element from the DOM.
title.removeChild(salad);
// The older way were we have to reference the parent to remove it's child (cruel).
/* --------------------------------------------------------------------------------------------------------------------------------- */
// [LISTENING TO EVENTS]
salad.addEventListener('even', function() {
    // action
})
// addEventListener list of event :
// [MOUSE & POINTER]
// -click : Triggered when the element is clicked
// -dbclick : Triggered on double clicks
// -mouseenter : Triggered when mouse enter the element area
// -mouseleave : Triggered when the mouse leave the element area
// -mousemove : Fired continuously as the mouse moves inside an element

// [KEYBOARD EVENTS]
// -keydown : Triggered the moment a key is pressed down
// -keyup : Triggered the moment a key is released
// -if (event.key === 'Enter) : Used to set function on specific pressed key

// [FORM & INPUT EVENTS]
// -submit : Triggered when a <form> is submitted (remember to use "event.preventDefault()" to stop the page from restarting
// -input : Fire everytime the value change in a <input> <select> or <textarea>(great for live searchbar)
// -change : Fire when the user commits a change (e.g finish typing and click away or select an option from a dropdown)
// -focus/blur : Fire when an input field gains focus (is clicked into) or loses focus

// [WINDOW & DOCUMENT EVENTS]
// resize : Fired when the browser window is resized.
// scroll : fired when the user scrolls the page.
/* --------------------------------------------------------------------------------------------------------------------------------- */