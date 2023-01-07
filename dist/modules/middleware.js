"use strict";
exports.__esModule = true;
exports.handleInputValidation = void 0;
var express_validator_1 = require("express-validator");
var handleInputValidation = function (req, res, next) {
    var errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        res.status(400);
        res.json({ message: errors.array() });
    }
    else {
        next();
    }
};
exports.handleInputValidation = handleInputValidation;
//# sourceMappingURL=middleware.js.map