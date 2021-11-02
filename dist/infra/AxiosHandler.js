"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.callAPI = void 0;
const axios_1 = __importDefault(require("axios"));
const callAPI = (url, params = {}) => axios_1.default.get(url, params);
exports.callAPI = callAPI;
//# sourceMappingURL=AxiosHandler.js.map