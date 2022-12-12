import { Router } from "express"
import { dirname } from "path";
import { body, validationResult } from 'express-validator'
import {handleInputValidation} from './modules/middleware'
import path from "path"
const router = Router();

// PRODUCT
router.get("/products", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"))

})

router.get("/product/:id", () => {

})

router.post("/product", () => {

})

router.delete("/product/:id", () => {

})

router.put("/product/:id", body("name").isString(),handleInputValidation,(req,res) => {

})

// UPDATE
router.get("/update", () => {

})

router.get("/update/:id", () => {

})

router.post("/update", () => {

})

router.put("/update/:id", () => {

})

router.delete("/update/:id", () => {

})

// UPDATEPOINTS
router.get("/updatePoint", () => {

})

router.get("/updatePoint/:id", () => {

})

router.post("/updatePoint", () => {

})

router.put("/updatePoint/:id", () => {

})

router.delete("/updatePoint/:id", () => {

})

export default router;