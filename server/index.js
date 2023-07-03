const express= require("express");
const { Connection } = require("./database/db");
const { route } = require("./routes/route.js");
const cors=require("cors")
const bodyParser=require("body-parser")

require('dotenv').config()
const app=express();
app.use(cors())
app.use(bodyParser.json({extended:true}))
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.json())
app.use("/",route)
Connection()

const PORT=process.env.PORT
app.listen(PORT,()=>{
 console.log(`Server is running on port ${PORT}`)
})