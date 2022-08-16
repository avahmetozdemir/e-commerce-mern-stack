import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()



export const verifyToken = (req,res,next) => {
    const authHeaders = req.headers.token
    if(authHeaders) {
        const token = authHeaders.split(' ')[1]
        jwt.verify(token, process.env.JWT_KEY,(err,user)=> {
            if(err) {
                res.status(403).json('Token is not valid')
            }
            req.user = user
            next()
        })
    }else {
        res.status(401).json('You are not authenticated')
    }
}

export const verifyTokenAndAuthorization = (req,res,next)=> {
    verifyToken(req,res,()=> {
        if(req.user.id === req.params.id || req.user.isAdmin) {
            next()
        }else {
            res.status(403).json('You are not allowed to do that')
        }
    })
}

export const verifyTokenAndAdmin = (req,res,next)=> {
    verifyToken(req,res,()=> {
        if(req.user.isAdmin) {
            next()
        }else {
            res.status(403).json('You are not allowed to do that')
        }
    })
}