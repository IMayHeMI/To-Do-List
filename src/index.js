import "./styles.css";
import Select from "./selector";
import List from "./list";

const selector = new Select();
const todoList = new List();

function render(){
    selector.selectorRender();
    todoList.todoListRender();

    const form = document.getElementById("todoForm");
    const input = document.getElementById("newTodoInput");

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        todoList.addTodo(input);
        console.log(todoList.todos);
    });
}

window.onload = render;