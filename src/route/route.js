const express=require("express")
const route=express.Router()
const {creatUser,getUser,updateUser,deleteUser}=require("../controllar/userControllar")
const {createProduct,productfind}=require("../controllar/productControllar")
const {createReviews}=require("../controllar/reviewControllar")
const {USERdatavalidat,PRODUCTdatavalidat,PRODCTreviews}=require("../middlware/mid")


//
route.post("/register",USERdatavalidat,creatUser)
route.get("/getUser/:userId",getUser)
route.put("/updateUser/:userId",updateUser)
route.delete("/deleteUser/:userId",deleteUser)

//
route.post("/creteProduct",PRODUCTdatavalidat,createProduct)
route.get("/viewProduct/:productId",productfind)
//
route.post("/Reviews/:productId",createReviews)


//
route.all("/*",function(req,res){
    return res.status(404).send({Response:'path is not found❓'})
})

module.exports=route