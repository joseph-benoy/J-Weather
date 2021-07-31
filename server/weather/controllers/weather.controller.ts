import express from 'express';
import debug from 'debug';
import weatherService from '../services/weather.service';

const log:debug.IDebugger = debug('app:weather-controller');

class WeatherController{
       async getWeatherByCity(req:express.Request,res:express.Response,next:express.NextFunction){
              const weatherData = await weatherService.getWeatherByCity(req.query.city as string);
              res.status(200).json(weatherData);
       }
}

export default new WeatherController();