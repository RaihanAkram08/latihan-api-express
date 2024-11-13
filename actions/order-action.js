const { addOrderGateway, getAllOrderGateway, getOrderByIdGateway, updateOrderGateway, deleteOrderGateway } = require("../gateways/order-gateway");

module.exports.addOrderAction = (req, res) => {
    const orderId = addOrderGateway(req.body);
    res.status(201).json({
        message: "Order berhasil ditambahkan",
        order_id: orderId
    });
};

module.exports.getAllOrderAction = (req, res) => {
    res.json(getAllOrderGateway());
};

module.exports.getOrderByIdAction = (req, res) => {
    const id = parseInt(req.params.product_id)
    const order = getOrderByIdGateway(id);
    if (!order) return res.status(404).json({ message: 'Order tidak ditemukan' });
    res.json(order);
};

module.exports.updateOrderAction = (req, res) => {
    const id = parseInt(req.params.product_id)
    const order = updateOrderGateway(id);
    if (!order) return res.status(404).json({ message: 'Order tidak ditemukan' });

    Object.assign(order, req.body);
    res.json({ message: "Order berhasil diperbarui" });
};

module.exports.deleteOrderAction = (req, res) => {
    const id = parseInt(req.params.product_id)
    const resultDelete = deleteOrderGateway(id);
    if (resultDelete) {
        res.status(200).json({ message: "Order berhasil dihapus" });
    } else {
        res.status(404).json({ message: 'Order tidak ditemukan' })
    }
};