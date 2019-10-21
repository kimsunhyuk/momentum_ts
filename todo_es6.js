//to be accustomed to arrow func

// <form class="js-todoform">
//       <input placeholde="What to do?"></input>
//     </form>

//     <ul class="js-todotable"></ul>

const todoForm = document.querySelector(".js-todoform"),
    todoInput = todoForm.querySelector("input"),
    todoTable = document.querySelector(".js-todotable");

const TODO_LS = "todo";
let todoArray = [];

const deleteTodo = (event) => {
    //remove from HTML
    const parentLi = event.target.parentNode;
    todoTable.removeChild(parentLi);

    //remove from LS
    //overwrite todoArray into removedArray

    console.log(todoArray);
    const removedArray = todoArray.filter(element => 
        element.id !== parseInt(parentLi.id)
    );
    todoArray = removedArray;
    saveTodo();

}

const printTodo = (todo) => {
    //print on screen (add html))
    const todoObj = {
        id : todoArray.length+1,
        text : todo
    }
    const node = document.createElement("li");
    const deleteBtn = document.createElement("button");
    const span = document.createElement("span");

    deleteBtn.addEventListener("click", deleteTodo);
    deleteBtn.innerText = "x";

    span.innerText = todoObj.text;

    node.appendChild(span);
    node.appendChild(deleteBtn);
    node.id = todoObj.id;

    todoTable.appendChild(node);

    todoArray.push(todoObj);
    saveTodo();

}

const loadTodo = () =>{
    const loadedTodo = localStorage.getItem(TODO_LS);
    if(loadedTodo){
        JSON.parse(loadedTodo).forEach(element => {
            printTodo(element.text);
        });
    }
}

const saveTodo = input => {
    localStorage.setItem(TODO_LS, JSON.stringify(todoArray));
}


const handleTodoSubmit = (event) => {
    event.preventDefault();
    console.log(todoInput.value);
    printTodo(todoInput.value);
    todoInput.value = "";
}

const initialize = ()=>{
    loadTodo();
    todoForm.addEventListener("submit", handleTodoSubmit);
}

initialize();