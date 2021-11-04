"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gameById = exports.gameByTitle = exports.topGames = void 0;
const gameById_1 = require("./services/gameById");
Object.defineProperty(exports, "gameById", { enumerable: true, get: function () { return gameById_1.gameById; } });
const gameByTitle_1 = require("./services/gameByTitle");
Object.defineProperty(exports, "gameByTitle", { enumerable: true, get: function () { return gameByTitle_1.gameByTitle; } });
const topGames_1 = require("./services/topGames");
Object.defineProperty(exports, "topGames", { enumerable: true, get: function () { return topGames_1.topGames; } });
//# sourceMappingURL=index.js.map