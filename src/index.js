//
const express=require("express")
const mongoose=require("mongoose")
const route=require("./route/route")


const port= process.env.PORT || 3000; // Agar PORT defined nahi hai toh default value 3000 use karein
const app=express()
app.use(express.json())


mongoose.set("strictQuery", false)
mongoose.connect("mongodb+srv://RameshwarJay:6nmQC7OHwfpqR9UL@rameshwarnavathar.dujri1m.mongodb.net/?retryWrites=true&w=majority")

.then(()=>{console.log('Database is connected !!')})
.catch((arr)=>{console.log(arr);})

app.use('/',route)


app.listen(port,function(){
    console.log(`server is start on ${port}`);
})

