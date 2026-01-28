export default function() {
    const listContainer = document.querySelector(".listContainer")
    const content = document.querySelector(".content");

    let todos = [];
    let todoForm;
    let todoListEl;
    let newTodoInput;
    let idCounter = 0;

    function todoListRender() {           
        if (!listContainer.parentNode){
            content.append(listContainer);
        }           
        
        if (!todoForm) {
            todoForm = document.createElement("form");
            todoForm.id = "todoForm";

            newTodoInput = document.createElement("input");
            newTodoInput.id = "newTodoInput";
            newTodoInput.placeholder = "New task";

            const addTaskBtn = document.createElement("button");
            addTaskBtn.type = "submit";
            addTaskBtn.id = "addTodo";
            addTaskBtn.textContent = "Add new"

            todoForm.append(newTodoInput, addTaskBtn);


            todoListEl = document.createElement("div");
            todoListEl.id = "todoList";

            listContainer.append(todoForm, todoListEl); 
        }          
    };

    function renderTodo() {
        if(!todoListEl) return;
        
        const todoContainer = document.createElement("div");
        todoContainer.classList.add("todoContainer");

        const isDone = document.createElement("input");
        isDone.type = "checkbox";

        const todoTitle = document.createElement("div");
        todoTitle.classList.add("todoTitle");
        todoTitle.textContent = todos[todos.length - 1].title;

        const todoDescription = document.createElement("textarea");
        todoDescription.id = `textarea-${++idCounter}`;
        todoDescription.setAttribute("rows", "1");
        todoDescription.placeholder = "description...";
        todoDescription.classList.add("todoDescription");
        todoDescription.addEventListener('input', () => {
            todoDescription.style.height = 'auto'
            todoDescription.style.height = todoDescription.scrollHeight + 'px'
        });

        const deleteTodo = document.createElement("div");
        deleteTodo.classList.add("deleteTodo");
        todoContainer.append(isDone, todoTitle, todoDescription, deleteTodo);
        todoListEl.append(todoContainer);        
    }

    function addTodo(input) { 
        const title = input.value.trim();
        if (!title) return;

        todos.push({
            id: Date.now(),
            title,  
            description: "",
            done: false,
        });  
        
        input.value = "";
        renderTodo();
    }

    return {
        todoListRender,
        addTodo,
    }
};