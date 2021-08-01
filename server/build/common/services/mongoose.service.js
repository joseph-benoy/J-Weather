"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const debug_1 = __importDefault(require("debug"));
const process_1 = __importDefault(require("process"));
const log = debug_1.default('app:mongoose-service');
class MongooseService {
    constructor() {
        this.mongooseOptions = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
        };
        this.connectWithRetry = () => {
            log("connecting to mongodb");
            log(process_1.default.env.MONGO_URI);
            mongoose_1.default.connect(process_1.default.env.MONGO_URI, this.mongooseOptions)
                .then((value) => {
                log("mongoose connected");
            })
                .catch((err) => {
                log("error occured ,will retry after 5 seconds");
                setTimeout(this.connectWithRetry, 5000);
            });
        };
        this.connectWithRetry();
    }
    getMongoose() {
        return mongoose_1.default;
    }
}
exports.default = new MongooseService();
