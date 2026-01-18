import {Router} from "express";
import { registerUser } from "../controllers/user.controller.js";

const router = Router();

router.route("/register").post(registerUser);
//when a POST request is made to(app.js) /api/v1/users/register, the registerUser function from user.controller.js is called.
// controller sends the response to the request made to this route.
export default router;