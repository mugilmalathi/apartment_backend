const mongoose = require("mongoose");

const flatSchema = new mongoose.Schema({
    id:{type: Number},
    block:{type: String},
    flatNo:{type: Number},
    totalNo:{type: Number},
    residenttype:{type:String},
    image:{type: String},
    Name:{type: String},
    Age:{type: Number},
    Gender:{type: String}
},
{
    versionkey: false,
    timestamps: true
})

module.exports = mongoose.model("flat", flatSchema)