import express from "express"
import { fishing } from "../controllers/fishing.controller.js";
const fishingRouter=express.Router();

fishingRouter.route("/sendData").post(fishing);

export default fishingRouter;