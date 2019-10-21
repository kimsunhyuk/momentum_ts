const form = document.querySelector(".js-nameform"),
  input = form.querySelector("input"),
  greeting = document.querySelector(".js-greeting"),
  changeName = document.querySelector(".js-changename");

const NAME_LS = "username";
const SHOWING_ON = "showing";

function printName(currentName){
  greeting.classList.add(SHOWING_ON);
  form.classList.remove(SHOWING_ON);
  greeting.innerText = `${currentName}, Good Afternoon!`;

  printChangeName(currentName);
}

function saveName(currentName){
  localStorage.setItem(NAME_LS, currentName);
}

function askNameEventHandle(){
  event.preventDefault();
  const currentName = input.value;
  printName(currentName);
  saveName(currentName);
}

function askName(){
  form.classList.add(SHOWING_ON);
  greeting.classList.remove(SHOWING_ON);
  changeName.classList.remove(SHOWING_ON);
  form.addEventListener("submit",askNameEventHandle);
}

function deleteName(){
  localStorage.removeItem(NAME_LS);
  loadName();
}

function printChangeName(currentName){
  changeName.classList.add(SHOWING_ON);
  changeName.innerText = `If you are not ${currentName}, click here`;
  changeName.addEventListener("click", deleteName);
}

function loadName(){
  const loadedName = localStorage.getItem(NAME_LS);
  if(loadedName === null){
    askName();
  } else{
    printName(loadedName);
  }
}

function init(){
  loadName();
}

init();