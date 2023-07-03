const express=require("express")
const { addUserDetail,getUsers } = require("../controller/user-controller.js")

const route=express.Router()

route.post("/add",addUserDetail)
route.get("/users",getUsers)



module.exports={
    route
}