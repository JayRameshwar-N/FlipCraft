const { validationResult } = require("express-validator")
const productModel = require("../model/productModel")
const reviewsModel = require("../model/reviewModel")



const createReviews=async function(req,res){
    try{
        let data =req.body
        let res=req.params.productId
        
        let{ userId,rating}=data
        let error=validationResult(req)
        if(!error.isEmpty) return res.status(400).send({message:error.array()[0].msg})
        

        let reviews=await reviewsModel.create(data)
        await productModel.findByIdAndUpdate({_id:res},{$push:{reviews:reviews._id}})
        return res.status(200).send({message:'Reviews create successfully',reviews})

    }
    catch(err){
        return res.status(500).send(err)
        }
}
//

module.exports={createReviews}