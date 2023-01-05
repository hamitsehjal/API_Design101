import { Router } from "express"
import { dirname } from "path";
import { body, oneOf, validationResult } from 'express-validator'
import { handleInputValidation } from './modules/middleware'
import path from "path"
import { createProduct, deleteProduct, getOneProduct, getProducts } from "./handlers/products";
import { createUpdate, deleteUpdate, getOneUpdate, getUpdates, updateUpdate } from "./handlers/updates";
const router = Router();

// PRODUCT
router.get("/products", getProducts)

router.get("/product/:id", getOneProduct)

router.post("/product", body("name").isString(), handleInputValidation, createProduct)

router.put("/product/:id", body("name").isString(), handleInputValidation,)

router.delete("/product/:id", deleteProduct)


// UPDATE
router.get("/update", getUpdates)

router.get("/update/:id", getOneUpdate)

router.post("/update",
    body('title').exists().isString(),
    body('body').exists().isString(),
    body('productId').exists().isString(),
    createUpdate)

router.put("/update/:id",
    body('title').optional(),
    body('body').optional(),
    body('status').isIn(['IN_PROGRESS', 'LIVE', 'DEPRECATED', 'ARCHIVED']).optional(),
    body('version').optional(),
    updateUpdate)

router.delete("/update/:id", deleteUpdate)

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