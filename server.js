import app from "./app.js"
import connectDb from "./config/mongoose.config.js";
const port=process.env.PORT || 8000;

app.listen(port,()=>{

    console.log(`${port} port is started...`)
    connectDb();
})