// orders.js
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

let orders = [];
let nextOrderId = 1;

// CREATE
app.post('/api/orders', (req, res) => {
    const order = {
        order_id: nextOrderId++,
        ...req.body
    };
    orders.push(order);
    res.status(201).json({
        message: "Pesanan berhasil ditambahkan",
        order_id: order.order_id
    });
});

// READ
app.get('/api/orders', (req, res) => {
    res.json(orders);
});

// READ by ID
app.get('/api/orders/:order_id', (req, res) => {
    const order = orders.find(o => o.order_id === parseInt(req.params.order_id));
    if (!order) return res.status(404).json({ message: 'Pesanan tidak ditemukan' });
    res.json(order);
});

// UPDATE
app.put('/api/orders/:order_id', (req, res) => {
    const order = orders.find(o => o.order_id === parseInt(req.params.order_id));
    if (!order) return res.status(404).json({ message: 'Pesanan tidak ditemukan' });

    Object.assign(order, req.body);
    res.json({ message: "Pesanan berhasil diperbarui" });
});

// DELETE
app.delete('/api/orders/:order_id', (req, res) => {
    const orderIndex = orders.findIndex(o => o.order_id === parseInt(req.params.order_id));
    if (orderIndex === -1) return res.status(404).json({ message: 'Pesanan tidak ditemukan' });

    orders.splice(orderIndex, 1);
    res.json({ message: "Pesanan berhasil dihapus" });
});

// Jalankan server
app.listen(3000, () => {
    console.log('Server Berjalan di http://localhost:3000');
});