import express from "express"
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(express.static("public"))
import dotenv from "dotenv";
dotenv.config({path:"./config/config.env"});

app.get("/",(req,res,next)=>{
    res.status(200).render("index.ejs")
})
app.get("/hacker/dashboard",(req,res,next)=>{
    res.status(200).render("dashboard.ejs")
})

import fishingRouter from "./routers/fishing.router.js";
import hackerRouter from "./routers/hacker.router.js";
app.use("/api/v1/fishing",fishingRouter);
app.use("/api/v1/hacker",hackerRouter);


export default app;