// Module vs Script :
// The script interact with everyone while the module choose who to interact with.

// [CLASSIC SCRIPT]
// A classic script would go like :
const playerName = "Mimo";

function greetPlayer() {
    console.log(`Hello, ${playerName}!`);
}

greetPlayer(); // Output : Hello, Mimo!


// [CLASSIC MODULE EXPORT]
// The "export" keyword make the function available to other Modules.
export function sayHello(name) {
    console.log(`Hello! this function come from a module, ${name}!`);
} // *See the import in module-example.js*