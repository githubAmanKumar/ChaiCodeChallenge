// Activity1
// Task1
document.getElementById("heading").innerText = "content changed";

// Task2
var elem = document.querySelector(".para");
console.log(elem);
elem.style.backgroundColor = 'lightblue';
// Activity2
// Task3
var newDiv = document.createElement('div');
newDiv.textContent = 'This is a new div element!';
document.body.appendChild(newDiv);

// Task4
var newLi = document.createElement('li');

newLi.textContent = 'New Item';

var ul = document.getElementById('my-list');

ul.appendChild(newLi);

// Activity3
// Task5
var element = document.getElementById('my-element');
element.remove();

// Task6
var ul = document.getElementById('my-list2');
ul.removeChild(ul.lastChild);

// Activity4
// Task7
var img = document.getElementById('my-image');
img.setAttribute('src', 'new-image.jpg');

// Task8
var element = document.getElementById('my-element');

function addClass() {
    element.classList.add('highlight');
}

function removeClass() {
    element.classList.remove('highlight');
}

// Activity5
// Task9
var paragraph = document.getElementById('my-paragraph');

var button = document.getElementById('change-text-button');

button.addEventListener('click', function () {
    paragraph.textContent = 'This is the new paragraph text.';
});

// Task10
var element2 = document.getElementById('my-element2');

element2.addEventListener('mouseover', function () {
    element2.style.borderColor = 'red';
});

element2.addEventListener('mouseout', function () {
    element2.style.borderColor = 'black';
});
