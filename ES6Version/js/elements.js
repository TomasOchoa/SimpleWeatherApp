/**
 * Exports Elements for DOM Manipulation
 */
//Searching Elements
export const ELEMENT_SEARCH_BUTTON = document.querySelector('button');
export const ELEMENT_CITY_INPUT = document.querySelector('#city');

//Display elements
export const ELEMENT_LOADING_TEXT = document.querySelector('#load');
export const ELEMENT_WEATHER_BOX = document.querySelector('#weather');

//Data elements
export const ELEMENT_WEATHER_CITY = ELEMENT_WEATHER_BOX.firstElementChild;
export const ELEMENT_WEATHER_DESCRIPTION = document.querySelector('#weatherDescription');
export const ELEMENT_WEATHER_TEMPERATURE = ELEMENT_WEATHER_BOX.lastElementChild;