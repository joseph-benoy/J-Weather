"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const debug_1 = __importDefault(require("debug"));
const common_routes_config_1 = __importDefault(require("../common/common.routes.config"));
const message_controller_1 = __importDefault(require("./controller/message.controller"));
const log = debug_1.default("app:message");
class MessageRoutesConfig extends common_routes_config_1.default {
    constructor(app) {
        super(app, 'Message');
    }
    configureRoutes() {
        this.app.route("/message/save")
            .post(message_controller_1.default.saveMessage);
        return this.app;
    }
}
exports.default = MessageRoutesConfig;
