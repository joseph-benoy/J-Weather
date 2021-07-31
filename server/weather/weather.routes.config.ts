import express from 'express';
import CommonRoutesConfig from '../common/common.routes.config';

export default class WeatherRoutesConfig extends CommonRoutesConfig{
       constructor(app:express.Application){
              super(app,'weather');
       }
       configureRoutes():express.Application{
              this.app.route('/weather')
              .get();

              return this.app;
       }
};