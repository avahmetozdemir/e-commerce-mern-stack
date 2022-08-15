import mongoose, { mongo } from "mongoose";

const productSchema =  new mongoose.Schema({
    title : {
        type: String,
        required : true,
        unique : true
    },
    desc : {
        type: String,
        required : true,
    },
    img : {
        type: String,
        required : true
    },
    categories : {
        type: Array
    },
    size : {
        type: String,
        required : true
    },
    color : {
        type: String,
        required : true
    },
    price : {
        type: Number,
        required : true
    },
    
    
},{timestamps:true})


const Product = mongoose.model('Product', productSchema)

export default Product