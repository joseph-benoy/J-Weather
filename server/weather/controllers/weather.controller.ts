import express from 'express';
import debug from 'debug';

const log:debug.IDebugger = debug('app:weather-controller');

class WeatherController{
       async getWeatherByCity(req:express.Request,res:express.Response,next:express.NextFunction){
              
       }
}