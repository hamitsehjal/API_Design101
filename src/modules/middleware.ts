import {body,validationResult} from 'express-validator'

export const handleInputValidation=(req,res,next)=>{

    const errors=validationResult(req)

    if(!errors.isEmpty())
    {
        res.status(400)
        res.json({message:errors.array()})
    }
    else{
        next();

    }
}