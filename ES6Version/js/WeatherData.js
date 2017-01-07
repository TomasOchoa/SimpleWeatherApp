export class WeatherData {
    //Constructor
    constructor(cityName, description){
        this.cityName = cityName;
        this.description = description;
        this.temperature = '';
    }
}

export const WEATHER_PROXY_HANDLER = {
    //Get trap
    get: function (target, property) {
        return Reflect.get(target, property);
    },
    //Set trap
    set: function (target, property, value) {
        const newValue = (value * 1.8 + 32).toFixed(2) + 'F.';
        return Reflect.set(target, property, newValue);
    }
};

