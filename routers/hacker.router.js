import express from "express";
import { hackerLogin } from "../controllers/hacker.controller.js";
const hackerRouter=express();

hackerRouter.route("/login").post(hackerLogin);

export default hackerRouter;