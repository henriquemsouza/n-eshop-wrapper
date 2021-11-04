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
exports.gameByTitle = void 0;
const AxiosHandler_1 = require("../infra/AxiosHandler");
const utils_1 = require("./shared/utils");
const config_json_1 = __importDefault(require("../config.json"));
const gameByTitle = (title, options) => __awaiter(void 0, void 0, void 0, function* () {
    if (typeof title !== 'string') {
        throw new Error('invalid game title');
    }
    const { limit = 10, language = 'en' } = options;
    const apiUrl = `${config_json_1.default.Api.urlBase}tumbler/BR/${language}/19/`;
    const request = `${apiUrl + encodeURIComponent((0, utils_1.normalizeTitle)(title))}?suggested_size=5&mode=game&mode=film&mode=tv&mode=live_event`;
    const { data } = yield (0, AxiosHandler_1.callAPI)(request, {});
    const result = (0, utils_1.processMultipleResultGameInfo)(data, limit);
    return result;
});
exports.gameByTitle = gameByTitle;
//# sourceMappingURL=gameByTitle.js.map