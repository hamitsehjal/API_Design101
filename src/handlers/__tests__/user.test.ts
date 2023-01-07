import * as user from "../users"

describe("user handler", () => {
    it("it should create a new user", async () => {
        const req={body:{username:"hello",password:"hi"}}
        const res={json({token}){
            expect(token).toBeTruthy()
        }}

        const newUser=await user.createNewUser(req,res,()=>{})
    })
})