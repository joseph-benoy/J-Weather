import express from 'express';
import CommonRoutesConfig from '../common/common.routes.config';
import weatherController from './controllers/weather.controller';

export default class WeatherRoutesConfig extends CommonRoutesConfig{
       constructor(app:express.Application){
              super(app,'weather');
       }
       configureRoutes():express.Application{
              this.app.route('/weather')
              .get(weatherController.getWeatherByCity);
              return this.app;
       }
};