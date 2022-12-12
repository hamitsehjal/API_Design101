import prisma from '../db'
import { comparePassword, createJwt, hashPassword } from '../modules/auth'

export const createNewUser = (async (req, res) => {
    var user=await prisma.user.findUnique({
        where:{
            username:req.body.username
        }
    })

    // const isValid=await comparePassword(req.body.password,user.password)

    if(JSON.stringify(user) === '{}')
    {
        res.status(401)
        res.send({message:"Get out of here!!"})
        return;
    }

    var user = await prisma.user.create({
        data: {
            username: req.body.username,
            password: await hashPassword(req.body.password)
        }
    })

    const token = createJwt(user);
    res.json({ token: token })
})

export const signin=async(req,res)=>{
    const user=await prisma.user.findUnique({
        where:{
            username:req.body.username
        }
    })

    const isValid=await comparePassword(req.body.password,user.password)

    if(!isValid)
    {
        res.status(401)
        res.send({message:"Get out of here!!"})
        return;
    }

    const token = createJwt(user);
    res.json({ token: token })
}