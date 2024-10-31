// books.js
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

let books = [];
let nextBookId = 1;

// CREATE
app.post('/api/books', (req, res) => {
    const book = {
        book_id: nextBookId++,
        ...req.body
    };
    books.push(book);
    res.status(201).json({
        message: "Buku berhasil ditambahkan",
        book_id: book.book_id
    });
});

// READ
app.get('/api/books', (req, res) => {
    res.json(books);
});

// READ by ID
app.get('/api/books/:book_id', (req, res) => {
    const book = books.find(b => b.book_id === parseInt(req.params.book_id));
    if (!book) return res.status(404).json({ message: 'Buku tidak ditemukan' });
    res.json(book);
});

// UPDATE
app.put('/api/books/:book_id', (req, res) => {
    const book = books.find(b => b.book_id === parseInt(req.params.book_id));
    if (!book) return res.status(404).json({ message: 'Buku tidak ditemukan' });

    Object.assign(book, req.body);
    res.json({ message: "Buku berhasil diperbarui" });
});

// DELETE
app.delete('/api/books/:book_id', (req, res) => {
    const bookIndex = books.findIndex(b => b.book_id === parseInt(req.params.book_id));
    if (bookIndex === -1) return res.status(404).json({ message: 'Buku tidak ditemukan' });

    books.splice(bookIndex, 1);
    res.json({ message: "Buku berhasil dihapus" });
});

// Jalankan server
app.listen(3000, () => {
    console.log('Server Berjalan di http://localhost:3000');
});
