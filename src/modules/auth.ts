import jwt from "jsonwebtoken"
import * as dotenv from "dotenv"
dotenv.config

import bcrypt from "bcrypt"

export const comparePassword=(password,hashedPassword)=>{
    return bcrypt.compare(password,hashedPassword)
}

export const hashPassword=(password)=>{
    return bcrypt.hash(password,5)
}

export const createJwt = (user) => {
    const token = jwt.sign({
        id: user.id,
        username: user.username
    }, process.env.JWT_SECRET
    )
    return token
}

export const protect = ((req, res,next) => {

    const bearer = req.headers.authorization;

    if (!bearer) {
        res.status(401)
        res.json({message:"You are not Authorized"})
        return
    }

    const [,token]=bearer.split(" ");
    if(!token)
    {
        res.status(401)
        res.json({message:"Not a Valid Token"})
    }

    try{
        const payload=jwt.verify(token,process.env.JWT_SECRET)
    req.user=payload
    console.log(payload)
    next()
    return
    }catch(e)
    {
        console.error(e)
        res.status(401)
        res.json({message:"Not a Valid Token"})
        return
    }
})