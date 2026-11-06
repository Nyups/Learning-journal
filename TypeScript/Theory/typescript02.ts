// [Primitive types in TypeScript]

// Primitive type:
// - string 
// - null 
// - undefined 
// - number 
// - boolean 
// - bigint : is a numeric data type in JavaScript to represent number
// larger than the standard integer type


// [String]
let firstName: string = "Mimo";
// Unlike vanilla JS, the variable is expecting a string type.
// So if we try to reassign it with a number then we will get an error like this:
firstName = 9


// [Number]
let age: number = 100;
// We can reassign any number that is bellow the value of a "bigint",
// Otherwise we will get an error like this:
age = 123n


// [Boolean]
let humans: boolean = true;
let ghost: boolean = false;
// Basically yes or no value