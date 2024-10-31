// users.js
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

let users = [];
let nextUserId = 1;

// CREATE
app.post('/api/users', (req, res) => {
    const user = {
        user_id: nextUserId++,
        ...req.body
    };
    users.push(user);
    res.status(201).json({
        message: "Pengguna berhasil ditambahkan",
        user_id: user.user_id
    });
});

// READ
app.get('/api/users', (req, res) => {
    res.json(users);
});

// READ by ID
app.get('/api/users/:user_id', (req, res) => {
    const user = users.find(u => u.user_id === parseInt(req.params.user_id));
    if (!user) return res.status(404).json({ message: 'Pengguna tidak ditemukan' });
    res.json(user);
});

// UPDATE
app.put('/api/users/:user_id', (req, res) => {
    const user = users.find(u => u.user_id === parseInt(req.params.user_id));
    if (!user) return res.status(404).json({ message: 'Pengguna tidak ditemukan' });

    Object.assign(user, req.body);
    res.json({ message: "Pengguna berhasil diperbarui" });
});

// DELETE
app.delete('/api/users/:user_id', (req, res) => {
    const userIndex = users.findIndex(u => u.user_id === parseInt(req.params.user_id));
    if (userIndex === -1) return res.status(404).json({ message: 'Pengguna tidak ditemukan' });

    users.splice(userIndex, 1);
    res.json({ message: "Pengguna berhasil dihapus" });
});

// Jalankan server
app.listen(3000, () => {
    console.log('Server Berjalan di http://localhost:3000');
});