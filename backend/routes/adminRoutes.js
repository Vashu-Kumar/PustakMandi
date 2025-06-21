const express = require('express');
const router = express.Router();
const Book = require('../models/bookSchema.js');


// Create a new book 
router.post('/addBook', async (req, res) => {
    const { title, author, genre, imageURI = '' } = req.body;

    if (!title || !author || !genre) {
        return res.status(400).json({ message: 'Title, Author, and Genre are required' });
    }

    try {
        const newBook = new Book({ title, author, genre, status: 'available', imageURI });
        await newBook.save();
        return res.status(201).json({ message: 'Book added', book: newBook });
    } catch (err) {
        console.error('Error adding book:', err);
        return res.status(500).json({ message: 'Internal server error' });
    }
});

// Delete a book by title
router.delete('/deleteBook/:title', async (req, res) => {
    const { title } = req.params;

    try {
        const allBooks = await Book.find();
        const match = allBooks.find(
            (book) => book.title.trim().toLowerCase() === title.trim().toLowerCase()
        );

        if (!match) {
            return res.status(404).json({ message: 'Book not found' });
        }

        await Book.findByIdAndDelete(match._id);
        //console.log('Book delete with title',title);
        return res.status(200).json({ message: 'Book deleted', book: match });
    } catch (err) {
        //console.error('Error deleting book:', err);
        return res.status(500).json({ message: 'Internal server error' });
    }
});




module.exports = router;
