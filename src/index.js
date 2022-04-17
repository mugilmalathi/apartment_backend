const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
require("dotenv").config();
const connect = require("./config/db");

const PORT = process.env.PORT;

const flatController = require("./controller/flat.controller")
// const signinController = require("./controller/signin.controller")

app.use("/", flatController)
// app.use("/", signinController)

app.listen(PORT, async()=>{
    try{
        await connect();
        console.log("Connected to db");
    }
    catch(err){
        console.log("err", err);
    }
})
