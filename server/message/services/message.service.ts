import saveMessage from "../dtos/saveMessage.dto";
import messageDao from "../daos/message.dao";
import debug from "debug";

const log:debug.IDebugger = debug("app:message-service");

class MessageService{
       async saveMessage(message:saveMessage){
              return messageDao.saveMessage(message);
       }
}

export default new MessageService();