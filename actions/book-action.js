const { addBookGateway, getAllBookGateway, getBookByIdGateway, updateBookGateway, deleteBookGateway } = require("../gateways/book-gateway");


module.exports.addBookAction = (req, res) => {
    const bookId = addBookGateway(req.body);
    res.status(201).json({
        message: "Buku berhasil ditambahkan",
        book_id: bookId
    });
};

module.exports.getAllBookAction = (req, res) => {
    res.json(getAllBookGateway());
};

module.exports.getBookByIdAction = (req, res) => {
    const id = parseInt(req.params.product_id)
    const book = getBookByIdGateway(id);
    if (!book) return res.status(404).json({ message: 'Buku tidak ditemukan' });
    res.json(book);
};

module.exports.updateBookAction = (req, res) => {
    const id = parseInt(req.params.product_id)
    const book = updateBookGateway(id);
    if (!book) return res.status(404).json({ message: 'Buku tidak ditemukan' });

    Object.assign(book, req.body);
    res.json({ message: "Buku berhasil diperbarui" });
};

module.exports.deleteBookAction = (req, res) => {
    const id = parseInt(req.params.product_id)
    const resultDelete = deleteBookGateway(id);
    if (resultDelete) {
        res.status(200).json({ message: "Buku berhasil dihapus" });
    } else {
        res.status(404).json({ message: 'Buku tidak ditemukan' })
    }
};