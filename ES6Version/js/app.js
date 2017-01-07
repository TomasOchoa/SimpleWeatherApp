//Imports
import * as ELEMENTS from './elements.js';        //Import all elements to one object
import { Http } from './http.js';                 //Import Http Class
import { WeatherData, WEATHER_PROXY_HANDLER } from './WeatherData.js';   //Import WeatherData class

const APP_ID = 'd6b36701677547a62b133d2ce18224ae';

//Create an event listener for search button
ELEMENTS.ELEMENT_SEARCH_BUTTON.addEventListener('click', searchWeather);

//Event Handler for search button
function searchWeather() {

    //Fetch user input and trim white spaces
    const CITY_NAME = ELEMENTS.ELEMENT_CITY_INPUT.value.trim();
    //Validate user gave input
    if(CITY_NAME.length == 0){
        return alert('Error! Enter the name of a city.');
    }
    ELEMENTS.ELEMENT_LOADING_TEXT.style.display = 'block';
    ELEMENTS.ELEMENT_WEATHER_BOX.style.display = 'none';
    const URL = 'http://api.openweathermap.org/data/2.5/weather?q=' + CITY_NAME + '&units=metric&appid=' + APP_ID;
    Http.fetchData(URL)
        .then(responseData => {
            const WEATHER_DATA = new WeatherData(CITY_NAME, responseData.weather[0].description.toUpperCase());
            const WEATHER_PROXY = new Proxy(WEATHER_DATA, WEATHER_PROXY_HANDLER);
            WEATHER_PROXY.temperature = responseData.main.temp;
            updateWeather(WEATHER_PROXY);
        })
        .catch(error => alert(error));
}

function updateWeather(weatherData) {
    console.log(weatherData);
    ELEMENTS.ELEMENT_WEATHER_CITY.textContent = weatherData.cityName;
    ELEMENTS.ELEMENT_WEATHER_DESCRIPTION.textContent = weatherData.description;
    ELEMENTS.ELEMENT_WEATHER_TEMPERATURE.textContent = weatherData.temperature;

    ELEMENTS.ELEMENT_LOADING_TEXT.style.display = 'none';
    ELEMENTS.ELEMENT_WEATHER_BOX.style.display = 'block';
}