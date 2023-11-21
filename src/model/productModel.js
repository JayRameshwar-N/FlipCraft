const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    
    productId: String,
    title: String,
    brand: String,
    price: Number,
    discountedPrice: Number,
    rating:{type:Number,default:0},

specification:{
        color : [String],
        size  : [Number],
        weight: [String]
        },

offers:[String],
images:[String],
productDetails:{String},

reviews:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:"productReviews"
}]

},{timestamps:true})

module.exports= mongoose.model("Product", productSchema);

