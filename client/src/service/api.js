import axios from "axios";

const url = "http://localhost:8080";

export const addUser = async (data) => {
  try {
    await axios.post(`${url}/add`,data);
  } catch (error) {
    console.log(error.message);
  }
};

export const getUsers=async()=>{
  try {
    let res=await axios.get(`${url}/users`)
     return res.data
  } catch (error) {
    console.log("Error while calling getUsers api",error.message)
  }
}
