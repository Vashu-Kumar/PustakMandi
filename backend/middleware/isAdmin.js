const jwt = require('jsonwebtoken');
const User = require('../models/userSchema')

const isAdmin = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;

        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(401).json({ message: ' Authorization token missing' });
        }
        const token = authHeader.split(' ')[1];

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        const user = await User.findById(decoded.id);
        if (!user) {
            return res.status(404).json({ message: ' User not found' });
        }
        if (user.role !== 'admin') {
            return res.status(403).json({ message: 'Access denied. Admins only.' });
        }
        req.user = user;
        next();
    }
    catch (err) {
        res.status(401).json({ message: 'Invalid token or not authorized' })
    }
}

module.exports = isAdmin;




