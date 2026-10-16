// [API CRASH COURSE]
/*-------------------------------------------------------------------------------------------------------------------------------*/

// 1. What's an API :
// Supposing we have a game and want to display a character's information.
// Since we don't have that information locally, we ask another server for it :
// [HTTP request and response] > [API server] > [Our app recieve the data].

// An API is an interface that let one piece of software communicate with another.
// This file will only use web API that send us data over HTTP.

/*-------------------------------------------------------------------------------------------------------------------------------*/

// 2. Meet "fetch()" :
// JavaScript has a built in function called "fetch()" that make an HTTP request :
const response = fetch("https://jsonplaceholder.typicode.com/users/1");
// -"fetch()" : Sends a request to the URL.
// - The URL identifies the resource we want.
// - "const response" : Stores in the said variable what "fetch()" returns.

// However, "fetch()" doesn't give us the data right away. It can take time like 20ms - 200ms or longer.
// JavaScript need a way to handle that waiting. That's where "Promise" come in.

/*-------------------------------------------------------------------------------------------------------------------------------*/

// 3. Promise : "I'll give you the result later".
// A promise represent a result that may not be reay yet.
// - Pending : Still waiting 
// - Fulfilled : Got the result
// - Rejected : Something went wrong
// When we call a "fetch()", it return a "Promise" that will eventually give you a "Response" object.
// To work with that result we can use ".then()":
fetch("https://jsonplaceholder.typicode.com/users/1")
.then(response=> {
    return response.json();
})
.then(data => {
    console.log(data);
})
// Three important things are happening :
// - 1. : "fetch()" request the data.
// - 2. : "response.json()" reads the response body and parse its JSON into JavaScript value.
//         This is asynchronous too, so it returns another "Promise".
// - 3. : The next ".then()"recieves the parsed data.

// The server send JSON, a text format for representing data. After parsing it we can access properties like "data.name".
// For example the returned object includes a name, username, email and other information.

/*-------------------------------------------------------------------------------------------------------------------------------*/

// 4. "async" and "await" : The easier to read version :
// The .then() approach works, but chaining lots of callbacks can get a little tangled and messy.

// "async/await" give us a cleaner way to write asynchronous code :
async function getUser() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/1");

    const data = await response.json();

    console.log(data.name);
} 
getUser();
// What does it do?
// -"async function getUser()" : Define an asynchronous function.
// -"await fetch(...)" : Waits for the request to produce a response.
// -"await response.json()" : Waits for the response body to be parsed and return it. [IMPORTANT]
// -"console.log(data.name)" : tada.

// [IMPORTANT NOTE] :
// "await" can be used inside an async function, or at the top level of a JavaScript module.
// It wait for a Promise to settle before continuing that function.
// "await" doesn't freeze the entire browser, it pause the relevant async function while the rest of JavaScript can continue.

/*-------------------------------------------------------------------------------------------------------------------------------*/

// 5. The "error" trap :
// An HTTP error such as "404 Not Found" does NOT automatically make "fetch()" reject its Promise.
// We should check "response.ok" using this pattern :
async function getUser2() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/1"
    );

    if (!response.ok) {
      throw new Error("Request failed");
    }

    const data = await response.json();
    console.log(data.name);
  } catch (error) {
    console.error("Something went wrong:", error);
  }
}

/*-------------------------------------------------------------------------------------------------------------------------------*/

// 6. "Try" and "Catch" :
// What belong inside "try" :
// The try clock contain code that might throw an error and that we want to handle if it does.
// Few example of what type of code the "try" block should have :

// - Network request :
const response1 = await fetch('url'); // The connection might fail or the request might be aborted.

// - Parsing data :
const data1 = JSON.parse(variable/text);

// - Operation we explicitly expect might throw :
riskyOperation(); // This could be a function that validate input and throws an error when the inputs is invalid.


// A whole block would look like this :
export async function getUser3() {
  try { // Code that has a chance to fail
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/1"
    ); // Wait for the HTTP response
    if (!response.ok) { // If the response is NOT OK
      throw new Error("Failed to fetch user!");
      // Create and throw an error
    }
    const data = await response.json();
    // Parse the JSON response into a JavaScript value
    return data; // Return the data

  } catch (error) { // Catch errors thrown in the try block
    console.error("Failed to get a user!", error);
    // Log our message and the error object
  }
}

/*-------------------------------------------------------------------------------------------------------------------------------*/