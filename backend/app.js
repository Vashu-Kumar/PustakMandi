const express = require('express');
require('dotenv').config();
const cors = require('cors');
const connectDB = require('./config/connectDB');
const seedData = require('./init/seedData');
const userRoutes = require('./routes/userRoutes');
const adminRoutes = require('./routes/adminRoutes');
const authRoutes = require('./routes/authRoutes');
const path = require('path');
const ADMIN_URL = process.env.ADMIN_URL;


const app = express();
app.use(express.json());

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE']
}));


app.use('/PustakMandi/api', userRoutes);
app.use(ADMIN_URL, adminRoutes);
app.use('/PustakMandi/api/auth',authRoutes);

(async () => {
    await connectDB();
    console.log("Connected to MongoDB");


    // Uncomment the seedData() below to seed the database with sample book data
    // This should be done only once or when you want to reset the database


    //await seedData();   

    // console.log("Database seeded with sample data");

    // Start the server
    app.listen(process.env.PORT, () => {
        console.log(`Server is running on port ${process.env.PORT}`);

    });

})();

