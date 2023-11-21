
const { hash, hashSync } =require("bcrypt");
const {validationResult} =require("express-validator")
const userModel =require("../model/userModel");
const validat   =require("../validator/validate")


//
const creatUser=async function(req,res){
try{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
    return res.status(400).send({ status: false, message: errors.array()[0].msg });
    }

    let data=req.body
    let{mobileNumber,emailId,password,confirmPassword,dateOfBirth}=data;

    let email=await userModel.findOne({emailId:emailId})
    if(email) return res.status(400).send({error:'Please provide a unique email address. This email address already exists.'})

    let mobile=await userModel.findOne({mobileNumber:mobileNumber})
    if(mobile) return res.status(400).send({error:'This mobileNumber is already exists. Please use a different mobileNumber'})

    if (password.length < 8) return res.status(403).send({error:'Password is not strong enough. It should have atleast 8 characters!!'})
    if(!validat.pattern.test(password))
    return res.status(200).send({error:"please provide a strongPassword! in your password provide a special character"})
    
    if(data.password !==data.confirmPassword){
        return res.status(303).send({error:"Passwords do not match. please check! password and comfirmPassword"})
    }
    data.password=hashSync(data.password,10)

let result=await userModel.create(data)
return res.status(200).send({message: 'Registration successful',result})
}
catch(err){
        return res.status(500).send(err)}}



//
const getUser=async function(req,res){
    try{
        let userId=req.params.userId
        if (!(userId.length == 24)) {
            return res.status(400).send({ error: 'Please provide a valid userId.' })}
        
        let checkUser=await userModel.findById({_id:userId})
        if(!checkUser) return res.status(400).send({error: 'User not found. Please register the user first.'})

        let finduser=await userModel.findById({_id:userId})
        if(!finduser) return res.status(400).send({error:'User is not found. Please provide a valid userId (_id).' })
        return res.status(200).send({ message: 'User identified successfully',Profile:finduser })

    }
    catch(error){
        return res.status(500).send(error)
        }
        }


//
const updateUser=async function(req,res){
    try{
        let data=req.body
        let finduser=req.params.userId
        if (!(finduser.length == 24)) return res.status(400).send({ error: 'Please provide a valid userId (_id).' })
        
        let checkUser=await userModel.findById({_id:finduser})
        if(!checkUser) return res.status(400).send({error: 'User is not found. Please provide a valid userId'})

        let updateResult=await userModel.updateOne({_id:finduser},data)
        return res.status(200).send({ message: 'User is successfully updated 👤', updateInfo: updateResult });

    }
    catch(error){
        return res.status(500).send(error)
    }
    }

//
const deleteUser=async function(req,res){
    try{
        let data =req.params.userId
        if(!(data.length==24)) return res.status(400).send({error:'Please provide a valid userId(_id)'})

        let remove=await userModel.findByIdAndRemove({_id:data})
        if(!remove)return res.status(400).send({error:'User not found. Please provide a valid userId'})
        return res.status(202).send({message:'User is successfully deletead'})
    }
    catch(err){
        return res.status(500).send(err)
    }
}

//<><><><><><><><><><><><><><><><><><><><><>❗<<><><><><><><><><><><><><><><><><><><>

module.exports={creatUser,getUser,updateUser,deleteUser}
