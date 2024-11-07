// products.js
const express = require('express');

const app = express();
app.use(express.json());

let products = [];
let nextProductId = 1;

// CREATE
app.post('/api/products', (req, res) => {
    const product = {
        product_id: nextProductId++,
        ...req.body
    };
    products.push(product);
    res.status(201).json({
        message: "Produk berhasil ditambahkan",
        product_id: product.product_id
    });
});

// READ
app.get('/api/products', (req, res) => {
    res.json(products);
});

// READ by ID
app.get('/api/products/:product_id', (req, res) => {
    const product = products.find(p => p.product_id === parseInt(req.params.product_id));
    if (!product) return res.status(404).json({ message: 'Produk tidak ditemukan' });
    res.json(product);
});

// UPDATE
app.put('/api/products/:product_id', (req, res) => {
    const product = products.find(p => p.product_id === parseInt(req.params.product_id));
    if (!product) return res.status(404).json({ message: 'Produk tidak ditemukan' });

    Object.assign(product, req.body);
    res.json({ message: "Produk berhasil diperbarui" });
});

// DELETE
app.delete('/api/products/:product_id', (req, res) => {
    const productIndex = products.findIndex(p => p.product_id === parseInt(req.params.product_id));
    if (productIndex === -1) return res.status(404).json({ message: 'Produk tidak ditemukan' });

    products.splice(productIndex, 1);
    res.json({ message: "Produk berhasil dihapus" });
});

// Jalankan server
app.listen(3000, () => {
    console.log('Server Berjalan di http://localhost:3000');
});