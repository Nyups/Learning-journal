// [Function Types]

// First an example of a basic function:
function circleArea(radius) {
    return Math.PI * radius * radius;
}
// Like usual, TypeScript flag it as an error as the parameter
// can accept any type.

// To get rid of the error and explicitly  type the parameter,
// We can go this way :
function correctCircleArea(radius: number) {
    return Math.PI * radius * radius;
} 
// Like this calling the function with anything but a number
// will return an error:
correctCircleArea("salad");
// same if we pass more than one argument (sherlock)
correctCircleArea(1,4);
// and if we don't provide any argument :
correctCircleArea();

// We can make the parameter optional by using the ?:
function area(radius: number, height?: number): number {
    const baseArea = Math.PI * radius * radius;

    if (height !== undefined) { //didn't get the !== undefined
        const sideArea = 2 * Math.PI * radius * height;
        return baseArea + sideArea;
    }

    return baseArea;
}
// ***/!\***
// Optional parameter must always come after the required parameter
// in the function. otherwise it will return an error

// Note:
// the last ": number" : allow us
//  to decide what type of data the function must return
// The "!== undefined" : used to check if the value return something else than "undefined"



// [Async function and promise]
// If our fonction is going to return a promise, we can use the
// promise type like this :
async function getTemp(city: string): Promise<number> {
    const response = await fetch(`Infamous_api_adress${city}`);
    const data = await response.json();
    return data.temperature;
}
// ***/!\*** Note:
// "Promise<number>" the data the promise return must be a number.


// [Anonymous Function]:
// Here's an example of an anonymous function in the callback
// passed to "forEach()"
const language = ['blah','bleh','bloh']
language.forEach((lang) => {
    console.log(`${lang.toLocaleLowerCase()} has ${lang.length} characters.`);
});


// Memo :
// Contextual typing:
// Contextual typing is when TypeScript automatically determines
// the type of a variable or parameter based on where and how
//  it is being used.
// For example :
const languages: string[] = ['JavaScript', 'TypeScript', 'Python'];

languages.forEach((lang) => {
    console.log(lang.toUpperCase());
});
// We never explicitly declared what type of data "lang" is
// He figured it out alone.