import mongoose from 'mongoose';
import debug from 'debug';
import process from 'process';

const log:debug.IDebugger = debug('app:mongoose-service');

class MongooseService{
       private mongooseOptions = {
              useNewUrlParser: true,
              useUnifiedTopology: true,
              useFindAndModify: false,
       }
       constructor(){
              this.connectWithRetry();
       }
       getMongoose(){
              return mongoose;
       }
       connectWithRetry = ():void=>{
              log("connecting to mongodb");
              log(process.env.MONGO_URI)
              mongoose.connect(process.env.MONGO_URI as string,this.mongooseOptions)
              .then((value:typeof mongoose)=>{
                     log("mongoose connected");
              })
              .catch((err:any)=>{
                     log("error occured ,will retry after 5 seconds");
                     setTimeout(this.connectWithRetry,5000);
              })
       }
}

export default new MongooseService();