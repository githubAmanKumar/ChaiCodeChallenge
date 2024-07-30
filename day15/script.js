// Activity1
// Task1
function outer(){
    let a="hello";
    function inner() {
        console.log(a);
    };
    return inner;
}
// console.log(outer()());

// Task2
function createCounter() {
    let counter = 0; // Private counter variable

    return {
        increment: function() {
            counter++;
        },
        getValue: function() {
            return counter;
        }
    };
}

// const myCounter = createCounter();

// myCounter.increment();
// myCounter.increment();
// console.log(myCounter.getValue()); // Output: 2

// myCounter.increment();
// console.log(myCounter.getValue()); // Output: 3

// Activity2
// Task3
function createIDGenerator() {
    let lastID = 0; // Private variable to keep track of the last generated ID

    return function() {
        lastID++;
        return lastID;
    };
}

// const generateID = createIDGenerator();

// console.log(generateID()); // Output: 1
// console.log(generateID()); // Output: 2
// console.log(generateID()); // Output: 3

// const anotherIDGenerator = createIDGenerator();
// console.log(anotherIDGenerator()); // Output: 1
// console.log(anotherIDGenerator()); // Output: 2


// Task4
function createGreeter(name) {
    return function() {
        console.log(`Hello, ${name}!`);
    };
}

// Example usage
const greetJohn = createGreeter('Aman');
const greetJane = createGreeter('Tillu');

// greetJohn(); // Output: Hello, Aman!
// greetJane(); // Output: Hello, Tillu!



// Activity3
// Task5
const arr = [];
for (let i = 0; i <= 5; i++) {
    arr.push(function () {
        console.log(`index value: ${i}`);
    });
}

// arr.forEach(func => func());


// Activity4
// Task6
function createItemManager() {
    let items = []; // Private array to hold the items

    return {
        addItem: function(item) {
            items.push(item);
            console.log(`Item added: ${item}`);
        },
        removeItem: function(item) {
            const index = items.indexOf(item);
            if (index !== -1) {
                items.splice(index, 1);
                console.log(`Item removed: ${item}`);
            } else {
                console.log(`Item not found: ${item}`);
            }
        },
        listItems: function() {
            console.log('Items:', items);
        }
    };
}

// const itemManager = createItemManager();

// itemManager.addItem('Apple');
// itemManager.addItem('Banana');
// itemManager.listItems(); // Output: Items: [ 'Apple', 'Banana' ]

// itemManager.removeItem('Apple');
// itemManager.listItems(); // Output: Items: [ 'Banana' ]

// itemManager.removeItem('Orange'); // Output: Item not found: Orange


// Activity5
// Task7
function memoize(fn) {
    const cache = {}; 

    return function(...args) {
        const key = JSON.stringify(args); // Create a key based on the function's arguments
        if (cache[key]) {
            console.log('Returning cached result for', args);
            return cache[key];
        } else {
            const result = fn(...args);
            cache[key] = result; // Store the result in the cache
            return result;
        }
    };
}

function slowFunction(num) {
    console.log('Computing result for', num);
    // Simulate a slow computation
    return num * 2;
}

// const memoizedSlowFunction = memoize(slowFunction);

// console.log(memoizedSlowFunction(5)); // Output: Computing result for 5, 10
// console.log(memoizedSlowFunction(5)); // Output: Returning cached result for 5, 10
// console.log(memoizedSlowFunction(10)); // Output: Computing result for 10, 20
// console.log(memoizedSlowFunction(10)); // Output: Returning cached result for 10, 20


// Task8

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

const memoizedFactorial = memoize(factorial);

// Example usage
console.log(memoizedFactorial(5)); // Output: 120
console.log(memoizedFactorial(6)); // Output: 720
console.log(memoizedFactorial(5)); // Output: 120 (retrieved from cache)