import {asyncHandler } from "../utils/asyncHandler.js"
import {ApiError} from "../utils/ApiError.js"

const registerUser = asyncHandler(async (req, res)=>{
   //get user details form frontend
   //validation - not empty
   //check if user exists : username , email
   //check for images, check for avatar
   //upload them to cloudinary
   //remove password and refresh token field from response
   //check for user creation
   //return res

   const { username, email, password, avatar } = req.body;
   console.log("email: ", email)
   if (fullName ===""){
      throw new ApiError(400, "full name is required")
   }
})


export { registerUser}