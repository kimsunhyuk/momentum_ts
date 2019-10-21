
const weatherContainer = document.querySelector(".js-weather");
const API_KEY = "b8dc75ea6712e030a7339b1c5fc074a5";
// const URL = "api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}"
const URL = "https://api.openweathermap.org/data/2.5/weather"

const ABS_TEMPERATURE = 273.15;

function printWeather(json){
    const temperatrue = (json.main.temp - ABS_TEMPERATURE).toFixed(1);
    const location = json.name;
    const description = json.weather[0].description;

    weatherContainer.innerText = `${temperatrue}C, ${description} at ${location}`;
}

function getWeather(lat, lon){
    fetch(`${URL}?lat=${lat}&lon=${lon}&appid=${API_KEY}`
    ).then(function (response){
        return response.json();
    }).then(function(json){
        printWeather(json);
    }); 
}

const getWeatherAsync = async (lat, lon) => {
    const response = await fetch(`${URL}?lat=${lat}&lon=${lon}&appid=${API_KEY}`);
    printWeather(await response.json());
}

function handleGeoSuccess(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    
    // 날씨 정보를 받아오자
    getWeatherAsync(lat, lon);
}

function handleGeoError(position){
    console.log("--handleGeoError called");
}

function loadLoation(){
    const currentlocation = navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function init(){
    loadLoation();
}

init()