// [Why is it used]:

// Typescript extend the JavaScript language to include static typing
// Which help catch those error before we even deploy our code.
// For example
const getRandomValue = (array) => {
    return array[Math.floor(Math.random() * array.length)];
}
// As the error mention, array doesn't have any type defined
// Meaning there is nothing preventing it from calling the function with a number
console.log(getRandomValue(10));
// Will return undefined because it was expecting an array instead of a number.

// But with TypeScript we can define the type for the array parameter:
const getRandomValue02 = (array: string[]) => {
    return array[Math.floor(Math.random() * array.length)]
}

// This type definition tells TypeScript the array argument must be an array of strings.
// Then if we call that function with a number again we get a different type of error
// called a compiler error.