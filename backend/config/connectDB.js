require('dotenv').config();
const mongoose = require('mongoose');

const connectDB = async() => {
    try{
        await mongoose.connect(process.env.MONGO_URL, {});
    }catch(err){
        // console.error("MongoDB cnnection failed",err);  
    }
};

module.exports = connectDB;