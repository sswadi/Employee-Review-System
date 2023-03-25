const { Timestamp } = require("mongodb");
const mongoose = require("mongoose");
const epmloyeeSchema = new mongoose.Schema({
    
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true,
    },
    toReview:{
        type: String,
        
    },
    reviewedBy:{
        type: String,
    }
    
}, {
    timestamps: true
});

const employee = mongoose.model('employee', epmloyeeSchema );
module.exports = employee;