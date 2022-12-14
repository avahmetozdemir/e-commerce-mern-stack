import express from 'express'
import User from '../models/User.js'
import CryptoJS from 'crypto-js'
import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'


dotenv.config()

const router = express.Router()

//register
router.post('/register', async(req,res)=> {
    const newUser = new User({
        username : req.body.username,
        email : req.body.email,
        password: CryptoJS.AES.encrypt(req.body.password,process.env.SECRET_KEY).toString()

    })

   try {
   const savedUser=  await newUser.save()
    res.status(201).json(savedUser)
   } catch (error) {
    res.status(500).json(error) 
  }
})


//login

router.post('/login', async(req,res)=> {
    try {
        const user = await User.findOne({username: req.body.username})
        
        !user && res.status(401).json("Wrong credentials")
        
        const hashedPassword = CryptoJS.AES.decrypt(user.password, process.env.SECRET_KEY).toString(CryptoJS.enc.Utf8)

        hashedPassword !== req.body.password && res.status(401).json("Wrong credentials")
        
        const accessToken = jwt.sign({
            id: user._id,
            isAdmin : user.isAdmin
        }, process.env.JWT_KEY, {expiresIn: '1d'})
        
        const {password, ...others} = user._doc
        
        res.status(200).json({...others,accessToken})
    } catch (error) {
        res.status(500).json(error)
    }
})




export default router