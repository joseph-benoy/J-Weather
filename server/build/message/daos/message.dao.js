"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_service_1 = __importDefault(require("../../common/services/mongoose.service"));
const debug_1 = __importDefault(require("debug"));
const log = debug_1.default('app:message-dao');
class MessageDao {
    constructor() {
        this.Schema = mongoose_service_1.default.getMongoose().Schema;
        this.messageSchema = new this.Schema({
            fullName: {
                type: String,
                required: true,
                validate: (fullName) => (fullName.length < 25)
            },
            email: {
                type: String,
                required: true,
                validate: (email) => ((/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i).test(email))
            },
            message: {
                type: String,
                required: true,
                validate: (message) => (message.length > 5)
            }
        }, { timestamps: true });
        this.Message = mongoose_service_1.default.getMongoose().model('Message', this.messageSchema);
        log("message dao created!");
    }
    saveMessage(message) {
        return __awaiter(this, void 0, void 0, function* () {
            const messageObj = new this.Message(Object.assign({}, message));
            let result = yield messageObj.save();
            return result;
        });
    }
}
exports.default = new MessageDao();
