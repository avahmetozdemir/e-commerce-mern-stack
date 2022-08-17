import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'
import userRoute from './routes/user.js'
import authRoute from './routes/auth.js'
import productRoute from './routes/product.js'
import orderRoute from './routes/order.js'
import cartRoute from './routes/cart.js'
import stripeRoute from './routes/stripe.js'

dotenv.config()
const app  = express()
const port  =  process.env.PORT || 5000
const DB = process.env.DATABASE


//MIDDLEWARES
app.use(express.json())
app.use(cors())
app.use('/api/v1/users', userRoute)
app.use('/api/v1/auth', authRoute)
app.use('/api/v1/products', productRoute)
app.use('/api/v1/orders', orderRoute)
app.use('/api/v1/carts', cartRoute)
app.use('/api/v1/checkout', stripeRoute)

//DATABASE CONNECTION
mongoose.connect(DB).then(()=> {
    console.log('Connection is successful');
}).catch((err)=>console.log(err))


//LISTENING
app.listen(port, ()=> {
    console.log(`Server is listening on port ${port}`);
})