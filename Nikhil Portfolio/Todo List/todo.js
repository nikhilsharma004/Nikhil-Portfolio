document.addEventListener('DOMContentLoaded', () => {
    const todoForm = document.getElementById('todo-form');
    const taskInput = document.getElementById('task-input');
    const todoList = document.getElementById('todo-list');

    // Function to add a new task to the list
    function addTask(taskText) {
        // 1. Create the list item (<li>)
        const listItem = document.createElement('li');
        
        // 2. Create the span for the task text
        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskText;
        taskSpan.className = 'task-text';
        
        // 3. Create the delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.className = 'delete-btn';

        // 4. Attach event listeners
        
        // Toggle 'completed' class on click
        taskSpan.addEventListener('click', () => {
            listItem.classList.toggle('completed');
        });

        // Delete the task
        deleteBtn.addEventListener('click', () => {
            listItem.remove();
        });

        // 5. Assemble the components
        listItem.appendChild(taskSpan);
        listItem.appendChild(deleteBtn);
        
        // 6. Add the new item to the main list
        todoList.appendChild(listItem);
    }

    // Handle form submission
    todoForm.addEventListener('submit', (e) => {
        // Prevent the page from reloading
        e.preventDefault(); 
        
        const taskText = taskInput.value.trim();
        
        if (taskText !== '') {
            addTask(taskText);
            taskInput.value = ''; // Clear the input field
        }
    });

    // Optional: Add a few default tasks on load
    addTask("Make a cool website");
    addTask("Use light cool colors");
    addTask("Finish coding the project");
});