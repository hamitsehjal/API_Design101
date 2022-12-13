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
    console.log("Hellow from Express!!")
    res.status(200);
    res.sendFile(path.join(__dirname, "index.html"))
})

app.use("/api", protect, router);

app.post("/user",createNewUser)
app.post("/signin",signin)

export default app;