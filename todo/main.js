document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.querySelector('#new-task-form');
    const taskInput = document.querySelector('#new-task-input');
    const tasksList = document.querySelector('#tasks');

    taskForm.addEventListener('submit', e => {
        e.preventDefault();
        addTask(taskInput.value);
        taskInput.value = '';
    });

    function addTask(task) {
        const taskElement = document.createElement('div');
        taskElement.classList.add('task');

        const taskContent = document.createElement('div');
        taskContent.classList.add('content');

        const taskInputElement = document.createElement('input');
        taskInputElement.classList.add('text');
        taskInputElement.type = 'text';
        taskInputElement.value = task;
        taskInputElement.setAttribute('readonly', 'readonly');

        taskContent.appendChild(taskInputElement);
        taskElement.appendChild(taskContent);

        const taskActions = document.createElement('div');
        taskActions.classList.add('actions');

        const taskEdit = document.createElement('button');
        taskEdit.classList.add('edit');
        taskEdit.innerHTML = '<i class="fas fa-edit"></i>';

        const taskDelete = document.createElement('button');
        taskDelete.classList.add('delete');
        taskDelete.innerHTML = '<i class="fas fa-trash-alt"></i>';

        taskActions.appendChild(taskEdit);
        taskActions.appendChild(taskDelete);
        taskElement.appendChild(taskActions);

        tasksList.appendChild(taskElement);

        taskEdit.addEventListener('click', () => {
            if (taskEdit.firstChild.classList.contains('fa-edit')) {
                taskInputElement.removeAttribute('readonly');
                taskInputElement.focus();
                taskEdit.innerHTML = '<i class="fas fa-save"></i>';
            } else {
                taskInputElement.setAttribute('readonly', 'readonly');
                taskEdit.innerHTML = '<i class="fas fa-edit"></i>';
            }
        });

        taskDelete.addEventListener('click', () => {
            tasksList.removeChild(taskElement);
        });
    }
});
