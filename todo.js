const todoForm = document.querySelector(".js-todoform"),
  todoInput = todoForm.querySelector("input"),
  todoTable = document.querySelector(".js-todotable");

const TODO_LS = "todoTable";
let todoList = [];


function removeTodo(event){
  // 클릭이 어디서 발생했는지 받고
  // 그에 해당하는 녀석을 HTML에서 지워주자
  const parentLi = event.target.parentNode;
  todoTable.removeChild(parentLi);

  // LS에서도 지워줘야 할 필요가 있다
  // const removedTodoList = todoList.filter(function(todo){
  //   return todo.id !== parseInt(parentLi.id);
  // });

  const removedTodoList = todoList.filter(todos => todos.id !== parseInt(parentLi.id));

  todoList = removedTodoList;
  saveTodo();
}

function saveTodo(){
  localStorage.setItem(TODO_LS, JSON.stringify(todoList));
}


function printTodo(todo){
  // li에 해당 내용 포함\
  const li = document.createElement("li");
  const removeBtn = document.createElement("button");
  const span = document.createElement("span");
  const id = todoList.length+1;

  const todoObj = {
    id,
    text : todo
  }

  span.innerText = todo;
  removeBtn.innerText = "X";

  removeBtn.addEventListener("click", removeTodo);

  li.appendChild(span);
  li.appendChild(removeBtn);
  li.id = id;
  todoTable.appendChild(li);

  todoList.push(todoObj);
  saveTodo();
}


function handleSubmit(){
  event.preventDefault();
  const currentTodo = todoInput.value;
  printTodo(currentTodo);
  todoInput.value = "";
}


function loadTodo(){}
  const loadedTodo = localStorage.getItem(TODO_LS);
  if(loadedTodo !== null){
    parsedTodo = JSON.parse(loadedTodo);
    parsedTodo.forEach(function (todo){
      printTodo(todo.text);
    });
  }


function init(){
  loadTodo();
  todoForm.addEventListener("submit", handleSubmit);
}

init();