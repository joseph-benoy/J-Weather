import dotenv from 'dotenv';
const dotenvResult = dotenv.config();
if(dotenvResult.error){
       throw dotenvResult.error;
}
import express from 'express';
import cors from 'cors';
import * as http from 'http';
import * as winston from 'winston';
import * as expressWinston from 'express-winston';
import debug from 'debug';
import CommonRoutesConfig from './common/common.routes.config';
import WeatherRoutesConfig from './weather/weather.routes.config';
import helmet from 'helmet';
import expressError from './common/types/error.express.types';
import MessageRoutesConfig from './message/message.routes.config';


const app:express.Application = express();
const server:http.Server = http.createServer(app);
const port = process.env.PORT;
const routes:Array<CommonRoutesConfig> = [];
const log:debug.IDebugger = debug('app');

app.use(cors());
app.use(helmet());
app.use(express.json());

const loggerOptions:expressWinston.LoggerOptions = {
       transports:[new winston.transports.Console()],
       format:winston.format.combine(
              winston.format.json(),
              winston.format.colorize({all:true}),
              winston.format.prettyPrint()
       )
};

if(!process.env.DEBUG){
       loggerOptions.meta = false;
       loggerOptions.level = 'http';
}

app.use(expressWinston.logger(loggerOptions));

routes.push(new WeatherRoutesConfig(app));
routes.push(new MessageRoutesConfig(app));

const runningMessage = `Server is running at http://localhost:3001`;
app.get("/",(req:express.Request,res:express.Response,next:express.NextFunction)=>{
       res.status(200).send(runningMessage);
})

app.use((error:expressError,req:express.Request,res:express.Response,next:express.NextFunction)=>{
       res.status(error.status).json({error:error.message});
})

server.listen(port,()=>{
       routes.forEach((value:CommonRoutesConfig)=>{
              log(`Routes configured for ${value.getName()}`);
       })

       console.log(runningMessage);
})