const { validationResult } = require("express-validator")
const productModel = require("../model/productModel")
const reviewsModel = require("../model/reviewModel")


//
const createProduct=async function(req,res){
try{
    let data=req.body
    let {productId,title}=data

    let error=validationResult(req)
    if(!error.isEmpty()) return res.status(400).send({message:error.array()[0].msg})

    if (Object.keys(data).length === 0)
        return res.status(400).send({ message: 'Empty body is not allowed. Please provide some mandatory fields.' })
    
    let uniqueprod=await productModel.findOne({productId:productId,title:title})
    if(uniqueprod) return res.status(400).send({error:'This product is already created. Please create a different product.' })

    const createPro=await productModel.create(data)
    return res.status(200).send({ message: 'Product created successfully.' ,productInfo:createPro})

}
catch(err){
    return res.status(500).send(err)
    }
}


//
const productfind=async function(req,res){
    try{
        let productId=req.params.productId
        let find =await productModel.findOne({_id:productId})
        let review=[]
        for(let i=0;i<find.reviews.length;i++){
            let reviews=await reviewsModel.findById(find.reviews[i])
            review.push(reviews)
        }
        return res.status(200).send({message:'user find successfully',find,review})
    }
    catch(err){
        return res.status(500).send(err)
    }
}

//
module.exports={createProduct,productfind}