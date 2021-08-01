"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_routes_config_1 = __importDefault(require("../common/common.routes.config"));
const weather_controller_1 = __importDefault(require("./controllers/weather.controller"));
class WeatherRoutesConfig extends common_routes_config_1.default {
    constructor(app) {
        super(app, 'weather');
    }
    configureRoutes() {
        this.app.route('/weather')
            .get(weather_controller_1.default.getWeatherByCity);
        return this.app;
    }
}
exports.default = WeatherRoutesConfig;
;
