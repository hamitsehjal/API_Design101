"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.protect = exports.createJwt = exports.hashPassword = exports.comparePassword = void 0;
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var dotenv = __importStar(require("dotenv"));
dotenv.config;
var bcrypt_1 = __importDefault(require("bcrypt"));
var comparePassword = function (password, hashedPassword) {
    return bcrypt_1["default"].compare(password, hashedPassword);
};
exports.comparePassword = comparePassword;
var hashPassword = function (password) {
    return bcrypt_1["default"].hash(password, 5);
};
exports.hashPassword = hashPassword;
var createJwt = function (user) {
    var token = jsonwebtoken_1["default"].sign({
        id: user.id,
        username: user.username
    }, process.env.JWT_SECRET);
    return token;
};
exports.createJwt = createJwt;
exports.protect = (function (req, res, next) {
    var bearer = req.headers.authorization;
    if (!bearer) {
        res.status(401);
        res.json({ message: "You are not Authorized" });
        return;
    }
    var _a = bearer.split(" "), token = _a[1];
    if (!token) {
        res.status(401);
        res.json({ message: "Not a Valid Token" });
    }
    try {
        var payload = jsonwebtoken_1["default"].verify(token, process.env.JWT_SECRET);
        req.user = payload;
        console.log(payload);
        next();
        return;
    }
    catch (e) {
        console.error(e);
        res.status(401);
        res.json({ message: "Not a Valid Token" });
        return;
    }
});
//# sourceMappingURL=auth.js.map