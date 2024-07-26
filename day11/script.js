// Activity1
// Task1 and Task2 combined
const prom = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("message after 2 seconds");
        // reject(new Error("Something went wrong!"));
    }, 2000);
});

prom.then((message) => {
    console.log(message);
}).catch((err) => {
    console.error(err.message);
})

// Activity2
// Task3

function fetchData1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Fetched data from server 1");
            resolve("Data 1");
        }, 1000);
    });
}

function fetchData2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Fetched data from server 2");
            resolve("Data 2");
        }, 2000);
    });
}

function fetchData3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Fetched data from server 3");
            resolve("Data 3");
        }, 3000);
    });
}

// fetchData1()
//     .then((data1) => {
//         console.log("Processing " + data1);
//         return fetchData2();
//     })
//     .then((data2) => {
//         console.log("Processing " + data2);
//         return fetchData3();
//     })
//     .then((data3) => {
//         console.log("Processing " + data3);
//     })
//     .catch((error) => {
//         console.error(error.message);
//     });


// Activity3
// Task4 and Task5
const func = async () => {
    const val = await new Promise((res, rej) => {
        setTimeout(() => {
            // res("Resolved");
            rej("Rejected");
        }, 2000);
    }).catch((error)=>{
        console.error(error);
    })
    console.log(val);
};

// func();

// Activity4
// Task6
fetch('https://api.github.com/users/githubAmanKumar')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        console.log(data.name);
        console.log(data.bio);
    })
    .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
    });


// Task7
const fetchGitHubData = async () => {
    try {
        const response = await fetch('https://api.github.com/users/githubAmanKumar');
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const data = await response.json();
        console.log(data.name);
        console.log(data.bio);
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
};

// fetchGitHubData();


// Activity5
// Task8
const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise 1 resolved");
    }, 3000);
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise 2 resolved");
    }, 2000);
});

const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise 3 resolved");
    }, 1000);
});

Promise.all([promise1, promise2, promise3])
    .then((values) => {
        console.log(values); // Logs: ["Promise 1 resolved", "Promise 2 resolved", "Promise 3 resolved"]
    })
    .catch((error) => {
        console.error('One of the promises failed:', error);
    });


// Task9
Promise.race([promise1, promise2, promise3])
    .then((value) => {
        console.log(value); // Logs: "Promise 3 resolved"
    })
    .catch((error) => {
        console.error('One of the promises failed:', error);
    });