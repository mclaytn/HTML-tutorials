const btnAdd = document.getElementById('add-btn');
const btnEdit = document.getElementById('edit-btn');
const btnDelete = document.getElementById('delete-btn');
const myForm = document.getElementById('form1');
const taskitem = document.getElementById('task-item');
     
function addBtn() {
    // Logic to add a new task
    const taskInput = document.getElementById('task');
    const taskName = taskInput.value.trim();
    if (taskName) {
        const newTask = document.createElement('p');
        newTask.textContent = taskName;
        newTask.id = taskName; // Set the id to the task name for easy reference
        taskitem.appendChild(newTask);
        taskInput.value = ''; // Clear the input field after adding the task
    } else {
        alert('Please enter a task name.');
    }
}

function deleteBtn() {
    // Logic to delete the task
    if (btnDelete) {
        btnDelete.remove();
    }

}

function editBtn() {
    // Logic to edit the task
    if (btnEdit) {
        const newTaskName = prompt('Enter the new task name:', tasks.name);
        if (newTaskName) {
            btnEdit.querySelector('label').textContent = newTaskName;
            btnEdit.querySelector('input').name = newTaskName;
            btnEdit.querySelector('p').id = newTaskName;
        }
    } else {
        console.error('Task not found:', tasks.name);
    }
};