import express from "express"

import router from "./router"
import morgan from "morgan"

import { protect } from "./modules/auth"
import path from "path"
import { createNewUser, signin } from "./handlers/users"
const app = express()




app.use(morgan("dev"))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))



app.use((req, res, next) => {

    next();
})

app.get("/", (req, res) => {

    res.status(200).json({ message: "hello" })
})

app.use("/api", protect, router);

app.post("/user", createNewUser)
app.post("/signin", signin)


// error handlers
app.use((err, req, res, next) => {
    if (err.type === "auth") {
        res.status(401).json({ message: "Damm, You are Unauthorized!!" })
    } else if (err.type === "input") {
        res.status(400).json({ message: "Dammn, Bad Input" })
    } else {
        res.status(500).json({ message: "Oh shoot, that's on us!!" })
    }

})
export default app;