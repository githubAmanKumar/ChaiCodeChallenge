// Activity1
// Task1
function throwErrorFunction() {
    throw new Error("This is an intentional error");
}

// try {
//     throwErrorFunction();
// } catch (error) {
//     console.error("An error occurred: " + error.message);
// }

// Task2
function throwErrorFunction(a, b) {
    if (b == 0) {
        throw new Error("This is an intentional error");
    }
    return a / b;

}

try {
    // console.log(throwErrorFunction(4, 0));
} catch (error) {
    // console.error("An error occurred: " + error.message);
}

// Activity2
// Task3
function exampleFunction() {
    try {
        console.log("In the try block");
        // Intentionally throw an error to demonstrate the catch block
        throw new Error("This is an intentional error");
    } catch (error) {
        console.log("In the catch block");
        console.error("Caught an error: " + error.message);
    } finally {
        console.log("In the finally block");
    }
}

// exampleFunction();

// Activity3
// Task4
class CustomError extends Error {
    constructor(message) {
        super(message);
        this.name = "CustomError";
    }
}

function throwCustomError() {
    throw new CustomError("This is a custom error message");
}

try {
    // throwCustomError();
} catch (error) {
    if (error instanceof CustomError) {
        console.error("Caught a custom error: " + error.message);
    } else {
        console.error("Caught an unexpected error: " + error.message);
    }
}


// Task5
class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}

function validateInput(input) {
    if (!input || input.trim() === "") {
        throw new ValidationError("Input cannot be empty");
    }
    console.log("Input is valid: " + input);
}

try {
    const userInput = ""; // Change this to test with different inputs
    // validateInput(userInput);
} catch (error) {
    if (error instanceof ValidationError) {
        console.error("Validation Error: " + error.message);
    } else {
        console.error("Unexpected Error: " + error.message);
    }
}


// Activity4
// Task6
// const randomPromise = new Promise((resolve, reject) => {
//     const shouldResolve = Math.round(Math.random() * 100); // Randomly decide whether to resolve or reject
//     setTimeout(() => {
//         if (shouldResolve % 2 == 0) {
//             resolve("Promise resolved successfully!");
//         } else {
//             reject(new Error("Promise rejected!"));
//         }
//     }, 1000);
// });

// randomPromise
//     .then((message) => {
//         console.log(message);
//     })
//     .catch((error) => {
//         console.error("Caught an error:", error.message);
//     });


// Task7
const randomPromise2 = () => {
    return new Promise((resolve, reject) => {
        const shouldResolve = Math.random() > 0.5; // Randomly decide whether to resolve or reject
        setTimeout(() => {
            if (shouldResolve) {
                resolve("Promise resolved successfully!");
            } else {
                reject(new Error("Promise rejected!"));
            }
        }, 1000);
    });
};

const handleRandomPromise = async () => {
    try {
        const result = await randomPromise2();
        console.log(result);
    } catch (error) {
        console.error("Caught an error:", error.message);
    }
};

// handleRandomPromise();
// Activity5
// Task8
const url = "https://api.github/users/githubAmanKumar";
fetch(url)
.then(e=>e.json())
.then(res=>console.log(res.name))
.catch(e=>console.log("check url : "+e.message));

// Task9
const fetchFunction = async (str) => {
    try {
        const fetchResult = await fetch(str)
        const data = await fetchResult.json();
        console.log(data);
    } catch (error) {
        console.log(error.name + ":" + error.message);
    }
}
// fetchFunction(url);
