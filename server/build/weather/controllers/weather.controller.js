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
const debug_1 = __importDefault(require("debug"));
const weather_service_1 = __importDefault(require("../services/weather.service"));
const error_express_types_1 = __importDefault(require("../../common/types/error.express.types"));
const log = debug_1.default('app:weather-controller');
class WeatherController {
    getWeatherByCity(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (typeof req.query.city !== 'string') {
                    throw new error_express_types_1.default(400, "city missing from query");
                }
                const weatherData = yield weather_service_1.default.getWeatherByCity(req.query.city);
                res.status(200).json(weatherData);
            }
            catch (error) {
                if (error.status) {
                    next(error);
                }
                else {
                    next({ status: 400, message: error.message });
                }
            }
        });
    }
}
exports.default = new WeatherController();
