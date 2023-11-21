const { default: mongoose } = require("mongoose")
const ObjectId=mongoose.Schema.Types.ObjectId



const productReviews=new mongoose.Schema({
    

    userId:{
        type:ObjectId,
        ref:"userData"
        },

    rating:{type:Number,default:0},
    comment:String
    },

{timestamps:true})

module.exports=mongoose.model("productReviews",productReviews)


