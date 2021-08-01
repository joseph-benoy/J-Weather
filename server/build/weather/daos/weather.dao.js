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
const axios_1 = __importDefault(require("axios"));
const debug_1 = __importDefault(require("debug"));
const process_1 = __importDefault(require("process"));
const log = debug_1.default('app:weather-dao');
class WeatherDao {
    constructor() {
        log("created new instance of weather-dao");
    }
    getWeatherByCity(city) {
        return __awaiter(this, void 0, void 0, function* () {
            let response = yield axios_1.default.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process_1.default.env.WEATHER_KEY}&units=metric`);
            const data = {
                temp: response.data.main.feels_like,
                pressure: response.data.main.pressure,
                humidity: response.data.main.humidity,
                wind: response.data.wind.speed,
                weather: response.data.weather[0].description
            };
            return data;
        });
    }
}
exports.default = new WeatherDao();
