const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");
const Book = require('../models/bookSchema');
const User = require('../models/userSchema')
const isVlalidObjectId = (id) => { return mongoose.Types.ObjectId.isValid(id) };


router.get('/books', async (req, res) => {
    try {
        const books = await Book.find();
        res.status(200).json(books);
        //console.log('Books fetch succesfully');
    } catch (err) {
        console.error('Error in fetching books', err);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// router.get('/books', async (req, res) => {
//     const { genre, page = 1, limit = 8 } = req.query;
//     //limit means no. of books in a page

//     const query = genre ? { genre } : {};
//     const skip = (page - 1) * limit;
//     //skip means how many documents(books) to skip before starting to return results   

//     const total = await Books.countDocuments(query);
//     const books = await Books.find(query).skip(skip).limit(parseInt(limit));

//     res.json({
//         books,
//         currentPage: parseInt(page),
//         totalPages: Math.ceil(total / limit),
//     });
// })



router.get('/book/:id', async (req, res) => {
    const { id } = req.params;

    if (!isVlalidObjectId(id)) {
        return res.status(400).json({ message: 'Invalid book id' });
    }
    try {
        const book = await Book.findById(id);
        if (!book) {
            return res.status(404).json({ message: 'Book not found' });
        }
        res.status(200).json(book);
    } catch (err) {
        console.log('Error in fetching book with this id');
        res.status(500).json({ message: 'Internal server error' });
    }
})

module.exports = router;



