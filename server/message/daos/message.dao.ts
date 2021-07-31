import mongooseService from "../../common/services/mongoose.service";
import saveMessage from "../dtos/saveMessage.dto";
import debug from "debug";

const log:debug.IDebugger = debug('app:message-dao');

class MessageDao{
       Schema = mongooseService.getMongoose().Schema;
       messageSchema = new this.Schema({
              fullName:{
                     type:String,
                     required:true,
                     validate:(fullName:string)=>(
                            fullName.length<25
                     )
              },
              email:{
                     type:String,
                     required:true,
                     validate:(email:string)=>(
                            (/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i).test(email)
                     )
              },
              message:{
                     type:String,
                     required:true,
                     validate:(message:string)=>(
                            message.length>5
                     )
              }
       });
       Message = mongooseService.getMongoose().model('Message',this.messageSchema);
       constructor(){
              log("message dao created!");
       }
       async saveMessage(message:saveMessage):Promise<MessageDao>{
              const messageObj = new this.Message({
                     ...message
              });
              await messageObj.save();
              return messageObj;
       }
}

export default new MessageDao();