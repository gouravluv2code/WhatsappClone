const mongoose=require("mongoose")
require('dotenv').config()

const Connection=async()=>{
   
    try {
       await mongoose.connect(process.env.URL,{useUnifiedTopology:true})
       console.log("Database connected Successfully")
    } catch (error) {
        console.log('Error while Connecting With the databse',error.message)
    }
}

module.exports={
    Connection
}