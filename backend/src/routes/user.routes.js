import {Router} from "express";
import {loginUser, registerUser } from "../controllers/user.controller.js";



const router = Router();

router.route("/register").post(registerUser);
//when a POST request is made to(app.js) /api/v1/users/register, the registerUser function from user.controller.js is called.
// controller sends the response to the request made to this route.

router.route("/login").post(loginUser); 
//when a POST request is made to /api/v1/users/login, the loginUser function from user.controller.js is called. 

export default router;