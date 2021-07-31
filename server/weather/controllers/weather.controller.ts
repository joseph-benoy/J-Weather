import express from 'express';
import debug from 'debug';
import weatherService from '../services/weather.service';
import expressError from '../../common/types/error.express.types';

const log:debug.IDebugger = debug('app:weather-controller');

class WeatherController{
       async getWeatherByCity(req:express.Request,res:express.Response,next:express.NextFunction){
              try
              {
                     if(typeof req.query.city!=='string'){
                            throw new expressError(400,"city missing from query");
                     }
                     const weatherData = await weatherService.getWeatherByCity(req.query.city as string);
                     res.status(200).json(weatherData);
              }
              catch(error){
                     next(error);
              }
       }
}

export default new WeatherController();