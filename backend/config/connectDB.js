require('dotenv').config();
const mongoose = require('mongoose');

const connectDB = async() => {
    try{
<<<<<<< HEAD
        await mongoose.connect(process.env.MONGO_URL, {});
    }catch(err){
        // console.error("MongoDB cnnection failed",err);
=======
        await mongoose.connect(process.env.MONGO_URI, {});
    }catch(err){
        // console.error("MngoDB cnnection failed",err);
>>>>>>> aea2970d30785cb3ad372155b984cc8132ea8a01
        process.exit(1);
    }
};

module.exports = connectDB;