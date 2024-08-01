// Activity1
// Task1
document.getElementById("btn").addEventListener("click", () => {
    document.getElementById("para").innerHTML = "quia expedita animi quas eum. Molestiae aperiam atque illo sequi veritatis blanditiis laboriosam natus consequuntur.";
})

// Task2
document.getElementById("btn").addEventListener("dblclick", () => {
    document.getElementById("img").style.display = "none";
})

// Activity2
// Task3
document.getElementById("colorChange").addEventListener("mouseover", () => {
    document.getElementById("colorChange").style.background = "yellow";
})

// Task4
document.getElementById("colorChange").addEventListener("mouseout", () => {
    document.getElementById("colorChange").style.background = "teal";
})

// Activity3
// Task5
document.getElementById("input").addEventListener("keydown", (e) => {
    // console.log(e.key);
})

// Task6
document.getElementById("input").addEventListener("keyup", (e) => {
    document.getElementById("para2").innerHTML = document.getElementById("input").value
})

// Activity4
// Task7
const form = document.getElementById('myForm');

form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    const formData = new FormData(form); // Create a FormData object from the form

    // Log each form field and its value
    formData.forEach((value, key) => {
        console.log(`${key}: ${value}`);
    });
});

// Task8
const dropdown = document.getElementById('dropdown');
const displayParagraph = document.getElementById('display');

dropdown.addEventListener('change', (event) => {
    const selectedValue = event.target.value;
    displayParagraph.textContent = `Selected value: ${selectedValue}`;
});

// Activity5
// Task9
const itemList = document.getElementById('itemList');

itemList.addEventListener('click', (event) => {
    if (event.target.tagName === 'LI') {
        console.log(`Clicked item: ${event.target.textContent}`);
    }
});

// Task10
const parentElement = document.getElementById('parentElement');
const addChildButton = document.getElementById('addChildButton');

parentElement.addEventListener('click', (event) => {
    if (event.target.classList.contains('child')) {
        console.log(`Clicked child element: ${event.target.textContent}`);
    }
});

function addChildElement() {
    const newChild = document.createElement('div');
    newChild.textContent = `Child Element ${parentElement.childElementCount}`;
    newChild.classList.add('child');
    parentElement.appendChild(newChild);
}

addChildButton.addEventListener('click', addChildElement);
