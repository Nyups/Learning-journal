// [Using types with objects and arrays]


// [Array]
// first a classic array look like this :
const stacks = ['HTML','CSS','JavaScript','Vue','TypeScript'];
// Typescript will be smart enough to infer the type as an array of string.
// But explicitly typing will help in situation if you attempt to
// add another type to the array like this:
const stacks02:string = ['HTML',9,'CSS','JavaScript','Vue','TypeScript'];

// If I want to explicitly type that arrays as an array of strings,
// Then we can type it as "string[]" like so:
const stacks03:string[] = ['HTML','CSS','JavaScript','Vue','TypeScript'];


// [Object]
// First a classic object look like this:
const mimo = {
    username: "Nyun",
    isEmployed: true
}

// To explicitly type the object properties we can type it this way :
const mimo02: {username: string, isEmployed: boolean} = {
    username: 'Nyun',
    isEmployed: true
}

// If we try to remove a properties from the object we would get
// an error like so:
const mimo03: {username: string, isEmployed: boolean} = {
    username: 'Nyun',
}

//[The optional properties]
// We can make the object properties optional by using the "?"
// after the properties name like this:
const mimo04: {username: string, isEmployed?: boolean} = {
    username: 'Nyun',
}
// TypeScript will no longer display an error because the "isEmployed"
// got marked as optional.


// [Object with unknown properties name]
// what if we don't know all of the properties names ahead of time?
// What if we want an object that can have any number of properties but all of
// the value must follow a specific type?
//    
//    V
// [Using Record] **/!\**
// There is two way to accomplish this:

// First with [Record]:
// The basic syntax is
// "Record<Key, ValueType>". An example using it for a "userRole" object:
const userRole: Record<string, string> = {
    admin: "full-access",
    editor: "limited-access",
    viewer: "read-only"
}
// This "userRole"object can have any string key, and all of the values
// lust also be strings, trying to assign non string value will result in an error.

// Second way to do it is with [Index Signatures]:
const obj: { [key: string]: string} = {}; //wtf is this
// The syntax above says that nay property with a string key must have
// a string value.
// Here's an example for a "settings" object:
const settings: { [key: string]: string } = {
    theme: "dark",
    language: "en",
    layout: "grid"
};
// Just like the first way, if we have incorrect value type,
// TypeScript will display an error message.

// Both [Record] and [Index signature] do the same,
// so we can pick the one we want (i'm NOT doing the second one)