const { addProductGateway, getAllProductGateway, getProductByIdGateway, updateProductGateway, deleteProductGateway } = require("../gateways/product-gateway");

module.exports.addProductAction = (req, res) => {
    const productId = addProductGateway(req.body);
    res.status(201).json({
        message: "Produk berhasil ditambahkan",
        product_id: productId
    });
};

module.exports.getAllProductAction = (req, res) => {
    res.json(getAllProductGateway());
};

module.exports.getProductByIdAction = (req, res) => {
    const id = parseInt(req.params.product_id)
    const product = getProductByIdGateway(id);
    if (!product) return res.status(404).json({ message: 'Produk tidak ditemukan' });
    res.json(product);
};

module.exports.updateProductAction = (req, res) => {
    const id = parseInt(req.params.product_id)
    const product = updateProductGateway(id);
    if (!product) return res.status(404).json({ message: 'Produk tidak ditemukan' });

    Object.assign(product, req.body);
    res.json({ message: "Produk berhasil diperbarui" });
};

module.exports.deleteProductAction = (req, res) => {
    const id = parseInt(req.params.product_id)
    const resultDelete = deleteProductGateway(id);
    if (resultDelete) {
        res.status(200).json({ message: "Produk berhasil dihapus" });
    } else {
        res.status(404).json({ message: 'Produk tidak ditemukan' })
    }
};