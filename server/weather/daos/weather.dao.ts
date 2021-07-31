import debug from "debug";

const log:debug.IDebugger = debug('app:weather-dao')

class WeatherDao{
       constructor(){
              log("created new instance of weather-dao");
       }
}