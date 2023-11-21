const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

/////////////////////////////////////////
const userSchema = new mongoose.Schema({

    firstName: String,
    lastName: String,

    dateOfBirth:Date,
    mobileNumber: Number,

    address: {
    street: String,
    city: String,
    state: String,
    country: String,
    },
    
    emailId: String,
    password: String,
},
{ timestamps: true }
);

module.exports = mongoose.model("userData", userSchema);
