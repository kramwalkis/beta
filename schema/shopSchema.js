const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const shopSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },    
    maxStay: {
        type: Number,
        required: true, 
    },
    maxPerson: {
        type: Number,
        required: true,
    },
    validTo: {
        type: Number,
        required: true,
    },
    picture: {
        type: String,
        required: true,
    }
})

const shop = mongoose.model("shop", shopSchema)

module.exports = shop