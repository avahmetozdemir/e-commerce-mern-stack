import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import userRoute from './routes/user.js'

dotenv.config()
const app  = express()
const port  =  process.env.PORT || 5000
const DB = process.env.DATABASE


//MIDDLEWARES
app.use(express.json())
app.use('/api/v1/users', userRoute)



//DATABASE CONNECTION
mongoose.connect(DB).then(()=> {
    console.log('Connection is successful');
}).catch((err)=>console.log(err))


//LISTENING
app.listen(port, ()=> {
    console.log(`Server is listening on port ${port}`);
})