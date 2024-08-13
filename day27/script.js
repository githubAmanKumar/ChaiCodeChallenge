const taskForm = document.getElementById('taskForm');
const taskList = document.getElementById('taskList');

let tasks = [];
let editIndex = null;

taskForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const title = document.getElementById('taskTitle').value;
    const description = document.getElementById('taskDescription').value;
    const dueDate = document.getElementById('taskDueDate').value;

    if (title && description && dueDate) {
        if (editIndex !== null) {
            // Update existing task
            tasks[editIndex] = { title, description, dueDate };
            editIndex = null;
        } else {
            // Add new task
            const newTask = {
                title,
                description,
                dueDate
            };
            tasks.push(newTask);
        }

        displayTasks();
        taskForm.reset();
    }
});

function displayTasks() {
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        const taskItem = document.createElement('li');
        taskItem.classList.add('task-item');
        taskItem.innerHTML = `
            <div class="task-header">
                <h3 class="task-title">${task.title}</h3>
                <p class="task-due-date">${new Date(task.dueDate).toLocaleDateString()}</p>
            </div>
            <p class="task-description">${task.description}</p>
            <button class="edit-button" onclick="editTask(${index})">Edit</button>
            <button class="delete-button" onclick="deleteTask(${index})">Delete</button>
        `;
        taskList.appendChild(taskItem);
    });
}

function editTask(index) {
    const task = tasks[index];
    document.getElementById('taskTitle').value = task.title;
    document.getElementById('taskDescription').value = task.description;
    document.getElementById('taskDueDate').value = task.dueDate;
    editIndex = index;
}

function deleteTask(index) {
    if (confirm('Are you sure you want to delete this task?')) {
        tasks.splice(index, 1);
        displayTasks();
    }
}
