"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.filter = exports.search = exports.game = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
const axios_1 = __importDefault(require("axios"));
const config_json_1 = __importDefault(require("./config.json"));
const callAPI = (url, params = {}) => {
    return axios_1.default.get(url, params)
        .then(response => {
        if (response.data)
            return response.data;
        throw config_json_1.default.nintendoApi.errors.notFound;
    })
        .then(json => {
        return Promise.resolve(json);
    })
        .catch(err => Promise.reject(err));
};
const game = (id) => {
    const url = config_json_1.default.nintendoApi.url + config_json_1.default.nintendoApi.routes.game;
    return callAPI(url);
};
exports.game = game;
const search = (query, options) => {
    return filter(Object.assign({ search: query }, options));
};
exports.search = search;
const filter = (options) => {
    const { search, sort, direction, system = 'switch', limit = 10, availability, offset, category, price, number, } = options;
    const url = config_json_1.default.nintendoApi.url + config_json_1.default.nintendoApi.routes.search;
    const params = {
        search,
        system,
        sort,
        direction,
        limit,
        offset,
        availability,
        category,
        price,
        number,
    };
    return callAPI(url, { params });
};
exports.filter = filter;
//# sourceMappingURL=index.js.map