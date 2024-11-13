// Hanya untuk operational array

let employees = [];
let nextEmployeeId = 1;

module.exports.addEmployeeGateway = (data) => {
    const employee = {
        employee_id: nextEmployeeId++,
        ...data
    };
    employees.push(employee);
    return employee.employee_id
}

module.exports.getAllEmployeeGateway = () => {
    return employees;
}

module.exports.getEmployeeByIdGateway = (id) => {
    const employee = employees.find(e => e.employee_id === id);
    return employee;
}

module.exports.UpdateEmployeeGateway = (id) => {
    const employee = employees.find(e => e.employee_id === id);
    return employee;
}

module.exports.deleteEmployeeGateway = (id) => {
    const employeeIndex = employees.findIndex(e => e.employee_id === id);
    if (employeeIndex !== -1) {
        employees.splice(employeeIndex, 1)
        return true
    } else {
        return false
    }
}