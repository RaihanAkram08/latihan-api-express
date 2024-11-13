const express = require('express');
const { addProductAction, getAllProductAction, getProductByIdAction, updateProductAction, deleteProductAction } = require('./actions/product-action');
const { addEmployeeAction, getAllEmployeeAction, getEmployeeByIdAction, updateEmployeeAction, deleteEmployeeAction } = require('./actions/employee-action');
const { addBookAction, getAllBookAction, getBookByIdAction, updateBookAction, deleteBookAction } = require('./actions/book-action');
const { addUserAction, getAllUserAction, getUserByIdAction, updateUserAction, deleteUserAction } = require('./actions/user-action');
const { addOrderAction, getAllOrderAction, getOrderByIdAction, updateOrderAction, deleteOrderAction } = require('./actions/order-action');

const app = express();
app.use(express.json());

// API Products
app.post('/api/products', addProductAction); // CREATE
app.get('/api/products', getAllProductAction);  // READ
app.get('/api/products/:product_id', getProductByIdAction); // READ by ID
app.put('/api/products/:product_id', updateProductAction); // UPDATE
app.delete('/api/products/:product_id', deleteProductAction); // DELETE

// API Employees
app.post('/api/employees', addEmployeeAction); // CREATE
app.get('/api/employees', getAllEmployeeAction);  // READ
app.get('/api/employees/:employee_id', getEmployeeByIdAction); // READ by ID
app.put('/api/employees/:employee_id', updateEmployeeAction); // UPDATE
app.delete('/api/employees/:employee_id', deleteEmployeeAction); // DELETE

// API Books
app.post('/api/books', addBookAction); // CREATE
app.get('/api/books', getAllBookAction);  // READ
app.get('/api/books/:book_id', getBookByIdAction); // READ by ID
app.put('/api/books/:book_id', updateBookAction); // UPDATE
app.delete('/api/books/:book_id', deleteBookAction); // DELETE

// API Users
app.post('/api/users', addUserAction); // CREATE
app.get('/api/users', getAllUserAction);  // READ
app.get('/api/users/:user_id', getUserByIdAction); // READ by ID
app.put('/api/users/:user_id', updateUserAction); // UPDATE
app.delete('/api/users/:user_id', deleteUserAction); // DELETE

// API Orders
app.post('/api/orders', addOrderAction); // CREATE
app.get('/api/orders', getAllOrderAction);  // READ
app.get('/api/orders/:order_id', getOrderByIdAction); // READ by ID
app.put('/api/orders/:order_id', updateOrderAction); // UPDATE
app.delete('/api/orders/:order_id', deleteOrderAction); // DELETE

// Jalankan server
app.listen(3000, () => {
    console.log('Server Berjalan di http://localhost:3000');
});