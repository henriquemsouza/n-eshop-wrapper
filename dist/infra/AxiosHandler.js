"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.callAPI = void 0;
const axios_1 = __importDefault(require("axios"));
// import config from '../config.json';
const callAPI = (url, params = {}) => {
    return axios_1.default.get(url, params);
    //   .then(response => {
    //     if (response.data) return response.data;
    //     throw config.nintendoApi.errors.notFound;
    //   })
    //   .then(json => {
    //     return Promise.resolve(json);
    //   })
    //   .catch(err => Promise.reject(err));
};
exports.callAPI = callAPI;
//# sourceMappingURL=AxiosHandler.js.map