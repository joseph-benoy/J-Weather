"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class expressError {
    constructor(status, message) {
        this.status = status;
        this.message = message;
    }
}
exports.default = expressError;
