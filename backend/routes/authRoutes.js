const express = require('express');
require('dotenv').config();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/userSchema.js');
const router = express.Router();


const ADMIN_EMAIL = process.env.ADMIN_EMAIL;
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;


// REGISTER
router.post('/register', async (req, res) => {
    //console.log(" Incoming register data:", req.body);

    const { username, email, password } = req.body; 

    try {
        if (!username || !email || !password) {
            return res.status(400).json({ message: 'Username, email, and password are required' });
        }

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already registered Please Log-In' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        let userRole = 'user';
        if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
            userRole = 'admin';
        }

        const newUser = new User({
            username,
            email,
            password: hashedPassword,
            role: userRole
        });

        await newUser.save();

        return res.status(201).json({ message: `User registered successfully as ${userRole}` });
    } catch (err) {
        //console.error(" Registration error:", err);
        return res.status(500).json({ error: err.message });
    }
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        if (!email || !password) {
            return res.status(400).json({ message: 'Email and Password are required' });
        }

        const user = await User.findOne({ email }).select('+password');
        if (!user) {
            return res.status(400).json({ message: 'Please register first' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        const token = jwt.sign(
            {
                id: user._id,
                email: user.email,
                role: user.role
            },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        res.status(200).json({
            token,
            user: {
                id: user._id,
                username: user.username,
                email: user.email,
                role: user.role
            }
        });
    } catch (err) {
        //console.error('Login error', err);
        res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = router;