import express from 'express';
import debug from 'debug';
import CommonRoutesConfig from '../common/common.routes.config';
import messageController from './controller/message.controller';


const log:debug.IDebugger = debug("app:message");

class MessageRoutesConfig extends CommonRoutesConfig{
       constructor(app:express.Application){
              super(app,'Message');
       }
       configureRoutes():express.Application{
              this.app.routes("/message/save")
              .post(messageController.saveMessage);
              return this.app;
       }
}

export default MessageRoutesConfig;