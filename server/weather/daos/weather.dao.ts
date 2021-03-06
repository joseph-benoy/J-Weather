import axios from "axios";
import debug from "debug";
import process from "process";

const log:debug.IDebugger = debug('app:weather-dao')

class WeatherDao{
       constructor(){
              log("created new instance of weather-dao");
       }
       async getWeatherByCity(city:string){
              let response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.WEATHER_KEY}&units=metric`);
              const data = {
                     temp:response.data.main.feels_like,
                     pressure:response.data.main.pressure,
                     humidity:response.data.main.humidity,
                     wind:response.data.wind.speed,
                     weather:response.data.weather[0].description
              };
              return data;
       }      
}

export default new WeatherDao();