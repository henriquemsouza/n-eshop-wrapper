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
exports.topGames = void 0;
const AxiosHandler_1 = require("../infra/AxiosHandler");
const config_json_1 = __importDefault(require("../config.json"));
const utils_1 = require("./shared/utils");
const filter = (options) => __awaiter(void 0, void 0, void 0, function* () {
    const { limit = 10, language = 'pt-br', } = options;
    const baseUrl = `${config_json_1.default.Api.urlBase}container/BR/${language}/19/`;
    const url = `${baseUrl}STORE-MSF77008-TOPGAMES?size=${limit}`;
    const params = {
        limit,
    };
    const { data } = yield (0, AxiosHandler_1.callAPI)(url, { params });
    return data;
});
const topGames = (options) => __awaiter(void 0, void 0, void 0, function* () {
    const filterResult = yield filter(Object.assign({}, options));
    const result = (0, utils_1.processMultipleResultGameInfo)(filterResult, options.limit);
    return result;
});
exports.topGames = topGames;
//# sourceMappingURL=topGames.js.map