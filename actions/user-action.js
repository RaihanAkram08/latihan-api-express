const { getAllUserGateway, getUserByIdGateway, updateUserGateway, deleteUserGateway } = require("../gateways/user-gateway");

module.exports.addUserAction = (req, res) => {
    const userId = addUserGateway(req.body);
    res.status(201).json({
        message: "User berhasil ditambahkan",
        user_id: userId
    });
};

module.exports.getAllUserAction = (req, res) => {
    res.json(getAllUserGateway());
};

module.exports.getUserByIdAction = (req, res) => {
    const id = parseInt(req.params.product_id)
    const user = getUserByIdGateway(id);
    if (!user) return res.status(404).json({ message: 'User tidak ditemukan' });
    res.json(user);
};

module.exports.updateUserAction = (req, res) => {
    const id = parseInt(req.params.product_id)
    const user = updateUserGateway(id);
    if (!user) return res.status(404).json({ message: 'User tidak ditemukan' });

    Object.assign(user, req.body);
    res.json({ message: "User berhasil diperbarui" });
};

module.exports.deleteUserAction = (req, res) => {
    const id = parseInt(req.params.product_id)
    const resultDelete = deleteUserGateway(id);
    if (resultDelete) {
        res.status(200).json({ message: "User berhasil dihapus" });
    } else {
        res.status(404).json({ message: 'User tidak ditemukan' })
    }
};