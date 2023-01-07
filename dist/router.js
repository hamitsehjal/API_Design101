"use strict";
exports.__esModule = true;
var express_1 = require("express");
var express_validator_1 = require("express-validator");
var middleware_1 = require("./modules/middleware");
var products_1 = require("./handlers/products");
var updates_1 = require("./handlers/updates");
var router = (0, express_1.Router)();
// PRODUCT
router.get("/products", products_1.getProducts);
router.get("/product/:id", products_1.getOneProduct);
router.post("/product", (0, express_validator_1.body)("name").isString(), middleware_1.handleInputValidation, products_1.createProduct);
router.put("/product/:id", (0, express_validator_1.body)("name").isString(), middleware_1.handleInputValidation);
router["delete"]("/product/:id", products_1.deleteProduct);
// UPDATE
router.get("/update", updates_1.getUpdates);
router.get("/update/:id", updates_1.getOneUpdate);
router.post("/update", (0, express_validator_1.body)('title').exists().isString(), (0, express_validator_1.body)('body').exists().isString(), (0, express_validator_1.body)('productId').exists().isString(), updates_1.createUpdate);
router.put("/update/:id", (0, express_validator_1.body)('title').optional(), (0, express_validator_1.body)('body').optional(), (0, express_validator_1.body)('status').isIn(['IN_PROGRESS', 'LIVE', 'DEPRECATED', 'ARCHIVED']).optional(), (0, express_validator_1.body)('version').optional(), updates_1.updateUpdate);
router["delete"]("/update/:id", updates_1.deleteUpdate);
// UPDATEPOINTS
router.get("/updatePoint", function () {
});
router.get("/updatePoint/:id", (0, express_validator_1.body)('name').optional().exists(), (0, express_validator_1.body)('description').exists().isString(), (0, express_validator_1.body)('updateId').exists().isString(), function () {
});
router.post("/updatePoint", function () {
});
router.put("/updatePoint/:id", (0, express_validator_1.body)('name').optional().isString(), (0, express_validator_1.body)('description').optional().isString(), function () {
});
router["delete"]("/updatePoint/:id", function () {
});
router.use(function (err, req, res, next) {
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
exports["default"] = router;
//# sourceMappingURL=router.js.map