const mongoose = require("mongoose");

const signinSchema = new mongoose.Schema({
    id:{type: Number},
    name:{type: String},
    password:{type: Number},
    email:{type: Number}
},
{
    versionkey: false,
    timestamps: true
})

module.exports = mongoose.model("signin", signinSchema)