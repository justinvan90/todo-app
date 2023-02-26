const taskInput = document.getElementById('new-task')
const addButton = document.getElementById('new-task-btn')
const taskList = document.getElementById('task-list')


function addTask(e) {
    e.preventDefault();
    const task = taskInput.value;
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(task));
    taskList.appendChild(li);
    taskInput.value = '';
}

addButton.addEventListener('click', addTask);

function completeTask() {
    taskList.style.textDecoration = "line-through";
    
}

taskList.addEventListener('click', completeTask);


