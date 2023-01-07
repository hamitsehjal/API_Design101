"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var router_1 = __importDefault(require("./router"));
var morgan_1 = __importDefault(require("morgan"));
var auth_1 = require("./modules/auth");
var users_1 = require("./handlers/users");
var app = (0, express_1["default"])();
app.use((0, morgan_1["default"])("dev"));
app.use(express_1["default"].json());
app.use(express_1["default"].urlencoded({ extended: true }));
app.use(function (req, res, next) {
    next();
});
app.get("/", function (req, res) {
    res.status(200).json({ message: "hello" });
});
app.use("/api", auth_1.protect, router_1["default"]);
app.post("/user", users_1.createNewUser);
app.post("/signin", users_1.signin);
// error handlers
app.use(function (err, req, res, next) {
    if (err.type === "auth") {
        res.status(401).json({ message: "Damm, You are Unauthorized!!" });
    }
    else if (err.type === "input") {
        res.status(400).json({ message: "Dammn, Bad Input" });
    }
    else {
        res.status(500).json({ message: "Oh shoot, that's on us!!" });
    }
});
exports["default"] = app;
//# sourceMappingURL=server.js.map