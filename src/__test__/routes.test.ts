import { request } from "http"
import supertest = require("supertest")
import app
    from "../server"
describe("GET /", () => {
    it("responds with json", async () => {
        const res = await supertest(app)
            .get("/")

        expect(res.body.message).toBe("hello")
    })
})