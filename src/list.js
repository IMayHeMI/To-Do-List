export default function() {
    const listContainer = document.querySelector(".listContainer")
    const content = document.querySelector(".content");

    let todos = [];
    let todoForm;
    let todoListEl;
    let newTodoInput;

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


            todoListEl = document.createElement("ul");
            todoListEl.id = "todoList";

            listContainer.append(todoForm, todoListEl); 
        }
           
        renderTodos();
    };

    function renderTodos() {
        if(!todoListEl) return;

        todoListEl.innerHTML = "";

        todos.forEach((todo) => {
            const li = document.createElement("li");
            li.textContent = todo.text;
            todoListEl.append(li);
        });
    }

    function addTodo(input) { 
        const text = input.value.trim();
        if (!text) return;

        todos.push({
            id: Date.now(),
            text,
            done: false,
        });  
        
        input.value = "";
        renderTodos();
    }

    return {
        todoListRender,
        addTodo,
    }
};