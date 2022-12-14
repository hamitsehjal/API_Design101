"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var server_1 = __importDefault(require("./server"));
var config_1 = __importDefault(require("./config"));
server_1["default"].listen(config_1["default"].port, function () {
    console.log("Express Server listening on port ".concat(config_1["default"].port));
});
//# sourceMappingURL=index.js.map