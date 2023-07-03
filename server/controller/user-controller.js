const { UserModel } = require("../model/User")

const addUserDetail=async(req,res)=>{
    try {
      let exist= await UserModel.findOne({sub:req.body.sub})
      if(exist){
        res.status(200).json({msg:'user already exist'})
        return;
      }
      const newUser=new UserModel(req.body)
      await newUser.save()
      return res.status(200).json(newUser)
    } catch (error) {
        return res.status(500).json(error.message)
    }
}

const getUsers=async(req,res)=>{
  try {
    let users=await UserModel.find({})
    return res.status(200).json(users)
  } catch (error) {
    return res.status(500).json(error.message)
  }
}

module.exports={
    addUserDetail,
    getUsers
}

