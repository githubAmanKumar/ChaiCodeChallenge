// Activity1
// Task1
localStorage.setItem("name", "aman");
// console.log(localStorage.getItem("name"));

// Task2
const myObject = {
    name: "aman",
    age: 22,
    email: "aman@gmail.com"
};

// Save the object to localStorage
localStorage.setItem('myObjectKey', JSON.stringify(myObject));

// Retrieve and parse the object from localStorage
const retrievedObject = JSON.parse(localStorage.getItem('myObjectKey'));

// Log the retrieved object
// console.log('Retrieved object:', retrievedObject);


// Activity2
// Task3
// Function to save user input to localStorage
function saveToLocalStorage(name, email) {
    localStorage.setItem('userName', name);
    localStorage.setItem('userEmail', email);
}

// Function to display saved data
function displaySavedData() {
    const savedName = localStorage.getItem('userName');
    const savedEmail = localStorage.getItem('userEmail');
    document.getElementById('nameDisplay').textContent = savedName ? `Name: ${savedName}` : 'Name: Not provided';
    document.getElementById('emailDisplay').textContent = savedEmail ? `Email: ${savedEmail}` : 'Email: Not provided';
}

// Event listener for form submission
document.getElementById('userForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from submitting the default way
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    saveToLocalStorage(name, email);
    displaySavedData(); // Update the displayed data
});

// Display saved data when the page loads
window.onload = function () {
    displaySavedData();
};
// Task4

// Function to display localStorage content
function displayLocalStorage() {
    const contentDisplay = document.getElementById('localStorageContent');
    let content = '';
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const value = localStorage.getItem(key);
        content += `${key}: ${value}\n`;
    }
    contentDisplay.textContent = content || 'LocalStorage is empty.';
}

// Function to remove an item and display localStorage content
function removeItem() {
    console.log('LocalStorage before removal:');
    displayLocalStorage();

    // Remove 'item2'
    localStorage.removeItem('item2');

    console.log('LocalStorage after removal:');
    displayLocalStorage();
}

// Set some items in localStorage for demonstration
localStorage.setItem('item1', 'value1');
localStorage.setItem('item2', 'value2');
localStorage.setItem('item3', 'value3');

// Display initial localStorage content
displayLocalStorage();

// Add event listener to button
document.getElementById('removeButton').addEventListener('click', removeItem);

// Activity3
// Task5
// sessionStorage.setItem("name2", "hitesh");
// console.log(sessionStorage.getItem("name2"));

// Task6
const myObject2 = {
    name: "hitesh",
    age: 22,
    email: "chaiaurcode@gmail.com"
};

// Save the object to sessionStorage
sessionStorage.setItem('myObject2Key', JSON.stringify(myObject2));

// Retrieve and parse the object from sessionStorage
const retrievedObject2 = JSON.parse(sessionStorage.getItem('myObject2Key'));

// Log the retrieved object
// console.log('Retrieved object:', retrievedObject2);

// Activity4
// Task7
// Function to save user input to sessionStorage
function saveTosessionStorage2(name, email) {
    sessionStorage.setItem('userName2', name);
    sessionStorage.setItem('userEmail2', email);
}

// Function to display saved data
function displaySavedData2() {
    const savedName = sessionStorage.getItem('userName2');
    const savedEmail = sessionStorage.getItem('userEmail2');
    document.getElementById('nameDisplay2').textContent = savedName ? `Name: ${savedName}` : 'Name: Not provided';
    document.getElementById('emailDisplay2').textContent = savedEmail ? `Email: ${savedEmail}` : 'Email: Not provided';
}

// Event listener for form submission
document.getElementById('userForm2').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from submitting the default way
    const name = document.getElementById('name2').value;
    const email = document.getElementById('email2').value;
    saveTosessionStorage2(name, email);
    displaySavedData2(); // Update the displayed data
});

// Display saved data when the page loads
window.onload = function () {
    displaySavedData2();
};


// Task8
 // Function to display sessionStorage content
 function displaySessionStorage() {
    const contentDisplay = document.getElementById('sessionStorageContent');
    let content = '';
    for (let i = 0; i < sessionStorage.length; i++) {
        const key = sessionStorage.key(i);
        const value = sessionStorage.getItem(key);
        content += `${key}: ${value}\n`;
    }
    contentDisplay.textContent = content || 'sessionStorage is empty.';
}

// Function to remove an item and display sessionStorage content
function removeItem() {
    console.log('sessionStorage before removal:');
    displaySessionStorage();
    
    // Remove 'item2'
    sessionStorage.removeItem('item2');
    
    console.log('sessionStorage after removal:');
    displaySessionStorage();
}

// Set some items in sessionStorage for demonstration
sessionStorage.setItem('item1', 'value1');
sessionStorage.setItem('item2', 'value2');
sessionStorage.setItem('item3', 'value3');

// Display initial sessionStorage content
displaySessionStorage();

// Add event listener to button
document.getElementById('removeButton2').addEventListener('click', removeItem);

// Activity5
// Task9
// Function to save a value to both localStorage and sessionStorage
function saveToStorage(key, value) {
    // Save value to localStorage
    localStorage.setItem(key, value);
    
    // Save value to sessionStorage
    sessionStorage.setItem(key, value);
    
    // Log the values from both storages
    console.log('LocalStorage value:', localStorage.getItem(key));
    console.log('SessionStorage value:', sessionStorage.getItem(key));
    
    // Display the values on the page
    document.getElementById('storageContent').textContent = `LocalStorage: ${localStorage.getItem(key)}\nSessionStorage: ${sessionStorage.getItem(key)}`;
}

// Event listener for the button
document.getElementById('saveButton').addEventListener('click', function() {
    // Example key and value
    const key = 'exampleKey';
    const value = 'exampleValue';
    
    // Call the function to save and log values
    saveToStorage(key, value);
});

// Task10
// Function to clear all data from localStorage and sessionStorage
function clearAllStorage() {
    // Clear localStorage
    localStorage.clear();
    
    // Clear sessionStorage
    sessionStorage.clear();
    
    // Log and display the results
    console.log('LocalStorage cleared:', localStorage.length === 0);
    console.log('SessionStorage cleared:', sessionStorage.length === 0);
    
    // Update the page content
    document.getElementById('storageContent').textContent = 
        `LocalStorage is empty: ${localStorage.length === 0}\n` +
        `SessionStorage is empty: ${sessionStorage.length === 0}`;
}

// Event listener for the button
document.getElementById('clearButton').addEventListener('click', clearAllStorage);
