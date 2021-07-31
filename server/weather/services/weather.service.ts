import weatherDao from "../daos/weather.dao";

class WeatherService{
       async getWeatherByCity(city:string){
              return weatherDao.getWeatherByCity(city);
       }
}

export default new WeatherService();