const { addEmployeeGateway, getAllEmployeeGateway, getEmployeeByIdGateway, UpdateEmployeeGateway, deleteEmployeeGateway } = require("../gateways/employee-gateway");

module.exports.addEmployeeAction = (req, res) => {
    const employeeId = addEmployeeGateway(req.body);
    res.status(201).json({
        message: "Karyawan berhasil ditambahkan",
        employee_id: employeeId
    });
};

module.exports.getAllEmployeeAction = (req, res) => {
    res.json(getAllEmployeeGateway());
};

module.exports.getEmployeeByIdAction = (req, res) => {
    const id = parseInt(req.params.product_id)
    const employee = getEmployeeByIdGateway(id);
    if (!employee) return res.status(404).json({ message: 'Karyawan tidak ditemukan' });
    res.json(employee);
};

module.exports.updateEmployeeAction = (req, res) => {
    const id = parseInt(req.params.product_id)
    const employee = UpdateEmployeeGateway(id);
    if (!employee) return res.status(404).json({ message: 'Karyawan tidak ditemukan' });

    Object.assign(employee, req.body);
    res.json({ message: "Karyawan berhasil diperbarui" });
};

module.exports.deleteEmployeeAction = (req, res) => {
    const id = parseInt(req.params.product_id)
    const resultDelete = deleteEmployeeGateway(id);
    if (resultDelete) {
        res.status(200).json({ message: "Karyawan berhasil dihapus" });
    } else {
        res.status(404).json({ message: 'Karyawan tidak ditemukan' })
    }
};