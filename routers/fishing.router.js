import express from "express"
import { fishing } from "../controllers/fishing.controller.js";
const fishingRouter=express.Router();
import rateLimit from "express-rate-limit"

const createAccountLimiter = rateLimit({
	windowMs: 60 * 60 * 1000, // 1 hour
	max: 5, // Limit each IP to 5 create account requests per `window` (here, per hour)
	message:
		'Too many accounts created from this IP, please try again after an hour',
	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers
})

fishingRouter.route("/sendData").post(createAccountLimiter, fishing);

export default fishingRouter;