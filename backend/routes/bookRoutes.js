const express = require('express');
const router = express.Router();
const booksModel = require('../models/booksModel');


router.post("/add", async (req, res) => {
    try {
        const data = req.body;
        const newBook = new booksModel(data);
        await newBook.save();
        res.status(200).json({ message: "Book Added Successfully" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Failed to add book.' });
    }
});

router.get("/getBooks", async (req, res) => {
    try {
        const books = await booksModel.find();
        res.status(200).json({ books });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Failed to fetch books.' });
    }
});

router.get("/getBooks/:id", async (req, res) => {
    const id = req.params.id;
    try {
        const book = await booksModel.findById(id);
        if (!book) {
            res.status(404).json({ message: 'Book not found.' });
            return;
        }
        res.status(200).json({ book });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Failed to fetch book.' });
    }
});

router.put("/updateBook/:id", async (req, res) => {
    const id = req.params.id;
    const { bookname, description, author, image, price } = req.body;
    try {
        const updatedBook = await booksModel.findByIdAndUpdate(id, {
            bookname,
            description,
            author,
            image,
            price,
        }, { new: true });
        if (!updatedBook) {
            res.status(404).json({ message: 'Book not found.' });
            return;
        }
        res.status(200).json({ message: "Data Updated Successfully", book: updatedBook });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Failed to update book.' });
    }
});

router.delete("/deleteBook/:id", async (req, res) => {
    const id = req.params.id;
    try {
        const deletedBook = await booksModel.findByIdAndDelete(id);
        if (!deletedBook) {
            res.status(404).json({ message: 'Book not found.' });
            return;
        }
        res.status(200).json({ message: "Deleted Successfully" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Failed to delete book.' });
    }
});

router.post("/searchBooks", async (req, res) => {
    const { query } = req.body;
    try {
        const books = await booksModel.find({ bookname: { $regex: query, $options: 'i' } });
        if (books.length > 0) {
            res.status(200).json({ books });
        } else {
            res.status(200).json({ books: [] });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Failed to search books.' });
    }
});

module.exports = router;
