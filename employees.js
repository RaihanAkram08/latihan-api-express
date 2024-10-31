// employees.js
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

let employees = [];
let nextEmployeeId = 1;

// CREATE
app.post('/api/employees', (req, res) => {
    const employee = {
        employee_id: nextEmployeeId++,
        ...req.body
    };
    employees.push(employee);
    res.status(201).json({
        message: "Karyawan berhasil ditambahkan",
        employee_id: employee.employee_id
    });
});

// READ
app.get('/api/employees', (req, res) => {
    res.json(employees);
});

// READ by ID
app.get('/api/employees/:employee_id', (req, res) => {
    const employee = employees.find(e => e.employee_id === parseInt(req.params.employee_id));
    if (!employee) return res.status(404).json({ message: 'Karyawan tidak ditemukan' });
    res.json(employee);
});

// UPDATE
app.put('/api/employees/:employee_id', (req, res) => {
    const employee = employees.find(e => e.employee_id === parseInt(req.params.employee_id));
    if (!employee) return res.status(404).json({ message: 'Karyawan tidak ditemukan' });

    Object.assign(employee, req.body);
    res.json({ message: "Karyawan berhasil diperbarui" });
});

// DELETE
app.delete('/api/employees/:employee_id', (req, res) => {
    const employeeIndex = employees.findIndex(e => e.employee_id === parseInt(req.params.employee_id));
    if (employeeIndex === -1) return res.status(404).json({ message: 'Karyawan tidak ditemukan' });

    employees.splice(employeeIndex, 1);
    res.json({ message: "Karyawan berhasil dihapus" });
});

// Jalankan server
app.listen(3000, () => {
    console.log('Server Berjalan di http://localhost:3000');
});