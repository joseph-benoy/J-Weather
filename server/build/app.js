"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const dotenv_1 = __importDefault(require("dotenv"));
const dotenvResult = dotenv_1.default.config();
if (dotenvResult.error) {
    throw dotenvResult.error;
}
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const http = __importStar(require("http"));
const winston = __importStar(require("winston"));
const expressWinston = __importStar(require("express-winston"));
const debug_1 = __importDefault(require("debug"));
const weather_routes_config_1 = __importDefault(require("./weather/weather.routes.config"));
const helmet_1 = __importDefault(require("helmet"));
const message_routes_config_1 = __importDefault(require("./message/message.routes.config"));
const path_1 = __importDefault(require("path"));
const fs_extra_1 = __importDefault(require("fs-extra"));
const app = express_1.default();
const server = http.createServer(app);
const port = process.env.PORT;
const routes = [];
const log = debug_1.default('app');
app.use(cors_1.default());
app.use(helmet_1.default());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
const loggerOptions = {
    transports: [new winston.transports.Console()],
    format: winston.format.combine(winston.format.json(), winston.format.colorize({ all: true }), winston.format.prettyPrint())
};
if (!process.env.DEBUG) {
    loggerOptions.meta = false;
    loggerOptions.level = 'http';
}
app.use(expressWinston.logger(loggerOptions));
app.use(express_1.default.static('/static/build'));
routes.push(new weather_routes_config_1.default(app));
routes.push(new message_routes_config_1.default(app));
const runningMessage = `Server is running at http://localhost:3001`;
app.use((error, req, res, next) => {
    res.status(error.status).json({ error: error.message });
});
app.get("*", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (req.originalUrl === "/") {
            res
                .set("Content-Security-Policy", "default-src *; style-src 'self' http://* 'unsafe-inline'; script-src 'self' http://* 'unsafe-inline' 'unsafe-eval'")
                .sendFile(path_1.default.resolve(__dirname, `../static/build/index.html`));
        }
        else {
            let flag = yield fs_extra_1.default.pathExists(path_1.default.resolve(__dirname, `../static/build${req.originalUrl}`));
            if (flag) {
                res
                    .set("Content-Security-Policy", "default-src *; style-src 'self' http://* 'unsafe-inline'; script-src 'self' http://* 'unsafe-inline' 'unsafe-eval'")
                    .sendFile(path_1.default.resolve(__dirname, `../static/build${req.originalUrl}`));
            }
            else {
                res
                    .set("Content-Security-Policy", "default-src *; style-src 'self' http://* 'unsafe-inline'; script-src 'self' http://* 'unsafe-inline' 'unsafe-eval'")
                    .sendFile(path_1.default.resolve(__dirname, `../static/build/index.html`));
            }
        }
    }
    catch (error) {
        log("#######################################3");
        res
            .set("Content-Security-Policy", "default-src *; style-src 'self' http://* 'unsafe-inline'; script-src 'self' http://* 'unsafe-inline' 'unsafe-eval'")
            .sendFile(path_1.default.resolve(__dirname, `../static/build/index.html`));
    }
}));
server.listen(port, () => {
    routes.forEach((value) => {
        log(`Routes configured for ${value.getName()}`);
    });
    console.log(runningMessage);
});
