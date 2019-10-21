const clockContainer = document.querySelector(".js-clock"),
  clockTitle = clockContainer.querySelector("h2");

function dateValue(today){
  const dayArray = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  return dayArray[today];
}

function loadTime(){
  const today = new Date();
  const month = today.getMonth()+1;  //0부터 시작하더라;
  const date = today.getDate();
  const day = dateValue(today.getDay());
  const hour = today.getHours();
  const minute = today.getMinutes();
  const second = today.getSeconds();
  
  clockTitle.innerText =
    `${month}/${date} (${day}) ${hour < 10? `0${hour}` :hour}:${minute < 10? `0${minute}` :minute}:${second < 10? `0${second}` : second}`;
}

function init(){
  loadTime();
  setInterval(loadTime, 500);
}

init();