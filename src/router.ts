import { Router } from "express"
import { dirname } from "path";
import { body, oneOf, validationResult } from 'express-validator'
import { handleInputValidation } from './modules/middleware'
import path from "path"
import { createProduct, getProducts } from "./handlers/products";
const router = Router();

// PRODUCT
router.get("/products", getProducts)

router.get("/product/:id", () => {

})

router.post("/product", body("name").isString(), handleInputValidation, createProduct)

router.put("/product/:id", body("name").isString(), handleInputValidation, )

router.delete("/product/:id", () => {

})
// UPDATE
router.get("/update", () => {

})

router.get("/update/:id", () => {

})

router.post("/update",
    body('title').exists().isString(),
    body('body').exists().isString(),
    () => {

    })

router.put("/update/:id",
    body('title').optional(),
    body('body').optional(),
    body('status').isIn(['IN_PROGRESS','LIVE','DEPRECATED','ARCHIVED']),
    body('version').optional(),
    (req, res) => {

    })

router.delete("/update/:id", () => {

})

// UPDATEPOINTS
router.get("/updatePoint", () => {

})

router.get("/updatePoint/:id",
    body('name').optional().exists(),
    body('description').exists().isString(),
    body('updateId').exists().isString(),
    () => {

    })

router.post("/updatePoint", () => {

})

router.put("/updatePoint/:id",
    body('name').optional().isString(),
    body('description').optional().isString(),
    () => {

    })

router.delete("/updatePoint/:id", () => {

})

export default router;