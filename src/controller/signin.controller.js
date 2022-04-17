const express = require("express");
const router = express.Router();

const Signin = require("../model/signin.model");

router.get("/flat", async(req, res)=>{
    const signin = await Signin.find().lean().exec();
    res.send(signin);
})

router.post("/flat", async(req, res)=>{
    const signin = await Signin.create(req.body);
    res.send(signin);
})

module.exports = router;