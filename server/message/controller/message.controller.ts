import express from 'express';
import expressError from '../../common/types/error.express.types';
import debug from 'debug';
import messageService from '../services/message.service';

const log:debug.IDebugger = debug("app:message-controller");

class MessageController{
       async saveMessage(req:express.Request,res:express.Response,next:express.NextFunction){
              try{
                     log(req.body);
                     let result = await messageService.saveMessage(req.body);
                     // @ts-ignore
                     res.status(200).json({status:"saved",message:result._doc});
              }
              catch(error){
                     next(new expressError(400,error.message));
              }
       }
}

export default new MessageController();