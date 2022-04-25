// Default parameters
function showMessage(message, from) {
    console.log(`${message} by ${from}`);
}
showMessage("Hi!"); // Hi! by undefined

// Rest Parameters
function printAll(...args) {
    for (let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }

    for (const arg of args) {
        console.log(arg);
    }

    args.forEach(arg => {
        console.log(arg);
    });
}
printAll('a', 'b', 'c');
// a
// b
// c

// Arrow function
const simplePrint = function() {
    console.log("simplePrint");
}

const arrowPrint = () => console.log("arrowPrint");
const add = (a, b) => a + b;