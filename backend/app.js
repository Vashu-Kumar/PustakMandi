<<<<<<< HEAD
// app.js
const express = require('express');
require('dotenv').config();
const cors = require('cors');
const path = require('path');


// Import DB + routes + middleware
const connectDB = require('./config/connectDB');

//const seedData = require('./init/seedData');

const isAdmin = require('./middleware/isAdmin');
const userRoutes = require('./routes/userRoutes');
const adminRoutes = require('./routes/adminRoutes');
const authRoutes = require('./routes/authRoutes');

const ADMIN_URL = process.env.ADMIN_URL;


// Initialize Express app
const app = express();

// Middleware
app.use(express.json());
app.use(cors({
  origin: process.env.FRONTEND_URL,
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
}));

// Serve static uploads
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));



// Routes
app.use('/PustakMandi/api/auth', authRoutes);
app.use('/PustakMandi/api', userRoutes);
app.use(ADMIN_URL, isAdmin, adminRoutes);



// Start server after connecting DB
(async () => {
  try {
    await connectDB();
    console.log('Connected to MongoDB');
=======
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
const isAdmin = require('./middleware/isAdmin')


const app = express();
app.use(express.json());

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE']
}));


app.use('/PustakMandi/api', userRoutes);
app.use(ADMIN_URL, isAdmin, adminRoutes);
app.use('/PustakMandi/api/auth',authRoutes);

(async () => {
    await connectDB();
    console.log("Connected to MongoDB");

>>>>>>> aea2970d30785cb3ad372155b984cc8132ea8a01

    // Uncomment the seedData() below to seed the database with sample book data
    // This should be done only once or when you want to reset the database


<<<<<<< HEAD
    //await seedData();

    //console.log("Database seeded with sample data");


    const PORT = process.env.PORT;
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  } catch (err) {
    console.error('Error starting server:', err.message);
    process.exit(1);
  }
})();
=======
    //await seedData();   

    // console.log("Database seeded with sample data");

    // Start the server
    app.listen(process.env.PORT, () => {
        console.log(`Server is running on port ${process.env.PORT}`);

    });

})();

>>>>>>> aea2970d30785cb3ad372155b984cc8132ea8a01
