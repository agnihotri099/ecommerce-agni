const express=require('express')
const {authController,getUserProfile,registerUser}=require('../controllers/usersController')
const {protect}=require('../middlewares/authMiddleware')



const router=express.Router()


//user Registration

router.route("/").post(registerUser)

//post email and password auth

router.post("/login",authController)

//get user profile Private Route
router.route("/profile").get(protect,getUserProfile)

module.exports=router;